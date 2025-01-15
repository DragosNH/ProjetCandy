import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../Screens/style';
import Square from './Square';

const Grid = ({ navigation }) => {
  function makeCell(amount) {
    const squareCell = [];
    for (let i = 0; i < amount; i++) {
      squareCell.push(<Text><Square key={i} /></Text>);
    }
    return squareCell;
  }

  function makeGrid(amount) {
    const squareStock = [];
    for (let rows = 0; rows < amount; rows++) {
      squareStock.push(
        <View style={styles.row} key={rows}>
          <Text>{makeCell(amount)}</Text>
        </View>
      );
    }
    return squareStock;
  }

  return (
    <View style={styles.gridContainer}>
      {makeGrid(8)}
    </View>


  );
};


export default Grid;