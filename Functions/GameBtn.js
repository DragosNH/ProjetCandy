import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { btnStyle } from '../style/btnStyle';

const GameBtn = (props) => {
  return (
    <View>
      <TouchableOpacity style={btnStyle.gameBtn} onPress={props.onPress}>
        <Text style={btnStyle.btnTxt}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameBtn;
