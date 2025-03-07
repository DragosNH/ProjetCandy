import React, { useState } from 'react';
import { View, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { gridStyle } from '../../style/gridStyle';

const icons = [
  require('../../assets/images/aqman.png'),
  require('../../assets/images/batm.png'),
  require('../../assets/images/bzro.png'),
  require('../../assets/images/dksid.png'),
  require('../../assets/images/flsh.png'),
  require('../../assets/images/riddl.png'),
  require('../../assets/images/spman.png'),
];

// --- Create grid with random icons ---
const customGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => icons[Math.floor(Math.random() * icons.length)])
  );
};

const Grid = () => {
  const numRows = 8;
  const numCols = 8;
  const [grid, setGrid] = useState(() => customGrid(numRows, numCols));

  // --- Swap Function ---
  const swapCells = (row1, col1, row2, col2) => {
    const newGrid = grid.map(row => [...row]);
    const temp = newGrid[row1][col1];
    newGrid[row1][col1] = newGrid[row2][col2];
    newGrid[row2][col2] = temp;
    
    const processedGrid = processMatches(newGrid);
    setGrid(processedGrid);
  };

  // --- Match Detection ---
  const findMatches = (grid) => {
    let matches = grid.map(row => row.map(() => false));

    for (let row = 0; row < numRows; row++) {
      let matchLength = 1;
      for (let col = 1; col < numCols; col++) {
        if (grid[row][col] === grid[row][col - 1]) {
          matchLength++;
        } else {
          if (matchLength >= 3) {
            for (let k = col - matchLength; k < col; k++) {
              matches[row][k] = true;
            }
          }
          matchLength = 1;
        }
      }
      if (matchLength >= 3) {
        for (let k = numCols - matchLength; k < numCols; k++) {
          matches[row][k] = true;
        }
      }
    }

    // --- Check for vertical matches ---
    for (let col = 0; col < numCols; col++) {
      let matchLength = 1;
      for (let row = 1; row < numRows; row++) {
        if (grid[row][col] === grid[row - 1][col]) {
          matchLength++;
        } else {
          if (matchLength >= 3) {
            for (let k = row - matchLength; k < row; k++) {
              matches[k][col] = true;
            }
          }
          matchLength = 1;
        }
      }
      if (matchLength >= 3) {
        for (let k = numRows - matchLength; k < numRows; k++) {
          matches[k][col] = true;
        }
      }
    }
    return matches;
  };

  // --- Remove Matched Cells ---
  const removeMatches = (grid, matches) => {
    const newGrid = grid.map(row => row.slice());
    let matchFound = false;
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (matches[row][col]) {
          newGrid[row][col] = null;
          matchFound = true;
        }
      }
    }
    return { newGrid, matchFound };
  };

  // --- Drop Cells ---
  const dropCells = (grid) => {
    const newGrid = grid.map(row => row.slice());
    for (let col = 0; col < numCols; col++) {
      for (let row = numRows - 1; row >= 0; row--) {
        if (newGrid[row][col] === null) {
          for (let above = row - 1; above >= 0; above--) {
            if (newGrid[above][col] !== null) {
              newGrid[row][col] = newGrid[above][col];
              newGrid[above][col] = null;
              break;
            }
          }
        }
      }
    }
    return newGrid;
  };

  // --- Fill Empty Cells ---
  const fillEmptyCells = (grid) => {
    const newGrid = grid.map(row => row.slice());
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (newGrid[row][col] === null) {
          newGrid[row][col] = icons[Math.floor(Math.random() * icons.length)];
        }
      }
    }
    return newGrid;
  };

  // --- Matches ---
  const processMatches = (grid) => {
    let currentGrid = grid;
    while (true) {
      const matches = findMatches(currentGrid);
      const { newGrid, matchFound } = removeMatches(currentGrid, matches);
      if (!matchFound) break;
      const droppedGrid = dropCells(newGrid);
      currentGrid = fillEmptyCells(droppedGrid);
    }
    return currentGrid;
  };

  return (
    <View style={gridStyle.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View style={gridStyle.row} key={rowIndex}>
          {row.map((imagePath, colIndex) => (
            <GestureRecognizer
              key={`${rowIndex}-${colIndex}`}
              // Swipe left: swap with left cell.
              onSwipeLeft={() => {
                if (colIndex > 0) {
                  swapCells(rowIndex, colIndex, rowIndex, colIndex - 1);
                }
              }}
              // Swipe right: swap with right cell.
              onSwipeRight={() => {
                if (colIndex < numCols - 1) {
                  swapCells(rowIndex, colIndex, rowIndex, colIndex + 1);
                }
              }}
              // Swipe up: swap with above cell.
              onSwipeUp={() => {
                if (rowIndex > 0) {
                  swapCells(rowIndex, colIndex, rowIndex - 1, colIndex);
                }
              }}
              // Swipe down: swap with below cell.
              onSwipeDown={() => {
                if (rowIndex < numRows - 1) {
                  swapCells(rowIndex, colIndex, rowIndex + 1, colIndex);
                }
              }}
              style={gridStyle.cell} 
            >
              <Image source={imagePath} style={gridStyle.image} />
            </GestureRecognizer>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;

