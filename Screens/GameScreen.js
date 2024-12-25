import { Text, View, } from 'react-native'
import GameBtn from './Screens/GameBtn';

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