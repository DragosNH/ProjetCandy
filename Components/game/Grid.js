import React, { useState } from 'react';
import { View, Image, LayoutAnimation, UIManager, Platform } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { gridStyle } from '../../style/gridStyle';

const icons = [
  require('../../assets/images/aqman.png'),
  require('../../assets/images/revfl.png'),
  require('../../assets/images/batm.png'),
  require('../../assets/images/bzro.png'),
  require('../../assets/images/dksid.png'),
  require('../../assets/images/flsh.png'),
  require('../../assets/images/riddl.png'),
  require('../../assets/images/spman.png'),
];

// --- Layout Animation ---
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newGrid = grid.map(row => [...row]);
    const temp = newGrid[row1][col1];
    newGrid[row1][col1] = newGrid[row2][col2];
    newGrid[row2][col2] = temp;
    setGrid(newGrid);
    setTimeout(() => processMatchesAsync(newGrid), 300);
  };

  // --- Process Matches Asynchronously with Fade Out ---
  const processMatchesAsync = (currentGrid) => {
    const matches = findMatches(currentGrid);
    const { newGrid, matchFound } = removeMatches(currentGrid, matches);
    if (!matchFound) {
      setGrid(currentGrid);
      return;
    }
    // --- Fade out matched icons ---
    LayoutAnimation.configureNext({
      duration: 300,
      update: { type: LayoutAnimation.Types.easeInEaseOut },
      delete: { type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity },
    });
    setGrid(newGrid);
    // --- drop and fill cells ---
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      const droppedGrid = dropCells(newGrid);
      const filledGrid = fillEmptyCells(droppedGrid);
      setGrid(filledGrid);
      setTimeout(() => processMatchesAsync(filledGrid), 300);
    }, 300);
  };

  // --- Match Detection ---
  const findMatches = (grid) => {
    const matches = grid.map(row => row.map(() => false));
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const icon = grid[row][col];
        if (!icon) continue;
        // Check horizontal
        if (col <= numCols - 3 &&
            grid[row][col + 1] === icon &&
            grid[row][col + 2] === icon) {
          let c = col;
          while (c < numCols && grid[row][c] === icon) {
            matches[row][c] = true;
            c++;
          }
        }
        // Check vertical
        if (row <= numRows - 3 &&
            grid[row + 1][col] === icon &&
            grid[row + 2][col] === icon) {
          let r = row;
          while (r < numRows && grid[r][col] === icon) {
            matches[r][col] = true;
            r++;
          }
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

  return (
    <View style={gridStyle.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View style={gridStyle.row} key={rowIndex}>
          {row.map((imagePath, colIndex) => (
            <GestureRecognizer
              key={`${rowIndex}-${colIndex}`}
              onSwipeLeft={() => {
                if (colIndex > 0) swapCells(rowIndex, colIndex, rowIndex, colIndex - 1);
              }}
              onSwipeRight={() => {
                if (colIndex < numCols - 1) swapCells(rowIndex, colIndex, rowIndex, colIndex + 1);
              }}
              onSwipeUp={() => {
                if (rowIndex > 0) swapCells(rowIndex, colIndex, rowIndex - 1, colIndex);
              }}
              onSwipeDown={() => {
                if (rowIndex < numRows - 1) swapCells(rowIndex, colIndex, rowIndex + 1, colIndex);
              }}
              style={gridStyle.cell}
            >
              {imagePath && <Image source={imagePath} style={gridStyle.image} />}
            </GestureRecognizer>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
