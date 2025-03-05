import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../Screens/style';

const GameBtn = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.gameBtn}>
        <Text style={styles.btnTxt}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameBtn;
