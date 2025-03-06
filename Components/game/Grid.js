import React, { useState } from 'react';
import { View, Image, gridStyleheet } from 'react-native';
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

// Generate grid with random images
const customGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => icons[Math.floor(Math.random() * icons.length)])
  );
};

const Grid = () => {
  const [numRows, setNumRows] = useState(8);
  const [numCols, setNumCols] = useState(8);
  const [grid, setGrid] = useState(() => customGrid(numRows, numCols));

  // Swap items in the grid
  const swapItems = (row, firstCol, secondCol) => {
    const newGrid = grid.map(rowArr => [...rowArr]); // Deep copy the grid
    [newGrid[row][firstCol], newGrid[row][secondCol]] = [newGrid[row][secondCol], newGrid[row][firstCol]]; // Swap images
    setGrid(newGrid);
  };

  return (
    <View style={gridStyle.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View style={gridStyle.row} key={rowIndex}>
          {row.map((imagePath, colIndex) => (
            <GestureRecognizer
              key={`${rowIndex}-${colIndex}`}
              onSwipeLeft={() => {
                if (colIndex > 0) {
                  swapItems(rowIndex, colIndex, colIndex - 1);
                }
              }}
              onSwipeRight={() => {
                if (colIndex < numCols - 1) {
                  swapItems(rowIndex, colIndex, colIndex + 1);
                }
              }}
              style={gridStyle.cell} // No backgroundColor, as we're using images
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
