import React from 'react';
import { View, Image } from 'react-native'
import GameBtn from '../Functions/GameBtn';
import Grid from '../Components/game/Grid';
import PowerBar from '../Functions/PowerBar';
import { gameScreenStyle } from '../style/gameScreenStyle';

const GameScreen = ({ navigation }) => {
  const isPlaying = true;

  return (
    <View style={gameScreenStyle.container}>
      <View style={gameScreenStyle.centerItems}>
        <Image style={gameScreenStyle.headerImg} source={require('../assets/images/header_img.png')} />
        <View style={gameScreenStyle.btnContainer}>
          <GameBtn name="Title Screen" onPress={() => navigation.goBack()} />
          <GameBtn name="New Game" />
        </View>
      </View>

      <View style={gameScreenStyle.BtnRow}>
        {isPlaying ? <Grid /> : <GameBtn name="High Scores" />}
      </View>

      <PowerBar />
    </View>
  );
}

export default GameScreen;