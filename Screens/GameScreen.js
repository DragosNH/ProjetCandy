import React from 'react';
import { View } from 'react-native'
import GameBtn from '../Functions/GameBtn';
import Grid from '../Components/game/Grid';
import styles from '../style/style';

const GameScreen = ({ navigation }) => {
  const isPlaying = true; 

  return (
    <View style={styles.container}>
      <GameBtn name="New Game" />
      <View style={styles.BtnRow}>
        {isPlaying ? <Grid /> : <GameBtn name="High Scores" />}
      </View>
    </View>
  );
}

export default GameScreen;