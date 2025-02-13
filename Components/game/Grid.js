import React, { useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import styles from '../../Screens/style';

const Grid = () => {
  // Initial grid, going to change it latter
  const [grid, setGrid] = useState([
    ['red', 'blue', 'green', 'yellow', 'purple'],
    ['yellow', 'red', 'blue', 'green', 'purple'],
    ['green', 'yellow', 'purple', 'red', 'blue'],
    ['blue', 'green', 'red', 'purple', 'yellow'],
    ['purple', 'blue', 'yellow', 'green', 'red'],
  ]);

  // Swap grid items
  const swapItems = (row, col1, col2) => {
    const newGrid = [...grid];
    [newGrid[row][col1], newGrid[row][col2]] = [newGrid[row][col2], newGrid[row][col1]];
    setGrid(newGrid);
  };

  const createPanResponder = (row, col) => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) > 30) {
          // horizontal movement
          if (gestureState.dx > 0 && col < grid[row].length - 1) {
            swapItems(row, col, col + 1); 
          } else if (gestureState.dx < 0 && col > 0) {
            swapItems(row, col, col - 1); 
          }
        }
      },
    });
  };

  return (
    <View style={styles.gridContainer}>
      {grid.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((color, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              {...createPanResponder(rowIndex, colIndex).panHandlers}
              style={[styles.cell, { backgroundColor: color }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};


export default Grid;
