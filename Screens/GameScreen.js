import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import GameBtn from '../Functions/GameBtn';
import Grid from '../Components/game/Grid';
import PowerBar from '../Functions/PowerBar';
import RoundTimer from '../Components/game/RoundTimer';
import { gameScreenStyle } from '../style/gameScreenStyle';

const GameScreen = ({ navigation }) => {
  const [gameKey, setGameKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setScore] = useState(0);

  const handleRoundEnd = (round, gameOver) => {
    if (gameOver) {
      setIsPlaying(false);
    }
  };

  const updateScore = (points) => {
    setScore(prevScore => prevScore + points);
  };

  const startNewGame = () => {
    setGameKey(prevKey => prevKey + 1);
    setIsPlaying(true);
    setScore(0);
  };

  return (
    <View style={gameScreenStyle.container}>
      <View style={gameScreenStyle.centerItems}>
        <Image 
          style={gameScreenStyle.headerImg}
          source={require('../assets/images/header_img.png')}
        />
        <View style={gameScreenStyle.btnContainer}>
          <GameBtn name="Title Screen" onPress={() => navigation.goBack()} />
          <GameBtn name="New Game" onPress={startNewGame} />
        </View>
      </View>

      <View>
        <Text style={gameScreenStyle.txt}>Score: {score}</Text>
        <RoundTimer key={gameKey} onRoundEnd={handleRoundEnd} />
        <View>
          {isPlaying ? (
            <Grid key={gameKey} onScoreUpdate={updateScore} />
          ) : (
            <GameBtn name="High Scores" />
          )}
        </View>
      </View>

      <PowerBar />
    </View>
  );
};

export default GameScreen;
