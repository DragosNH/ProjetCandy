import React from 'react';
import { Text, View, } from 'react-native'
import GameBtn from '../Functions/GameBtn';
import styles from './style';

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.BtnRow}>
        <GameBtn name="New Game" />
        <GameBtn name="High Scores" />
      </View>
    </View>
  );
}

export default GameScreen;