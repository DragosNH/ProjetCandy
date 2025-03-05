import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../../Screens/style';
import GestureRecognizer from 'react-native-swipe-gestures';

const coloredItems = ['red', 'blue', 'yellow', 'purple', 'green', 'brown', 'black', 'white'];

// Generate grid with random colors
const customGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => coloredItems[Math.floor(Math.random() * coloredItems.length)])
  );
};

const Grid = () => {
  const [numRows, setNumRows] = useState(8);
  const [numCols, setNumCols] = useState(8);
  const [grid, setGrid] = useState(() => customGrid(numRows, numCols));

  // swamp items
  const swapItems = (row, firstCol, secondCol) => {
    
    const newGrid = grid.map(rowArr => [...rowArr]); 
    [newGrid[row][firstCol], newGrid[row][secondCol]] = [newGrid[row][secondCol], newGrid[row][firstCol]]; 
    setGrid(newGrid);
  };

  return (
    <View style={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((color, colIndex) => (
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
              style={[styles.cell, { backgroundColor: color }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
