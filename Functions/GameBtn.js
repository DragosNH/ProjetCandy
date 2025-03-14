import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { btnStyle } from '../style/btnStyle';

const GameBtn = ({ name, onPress }) => (
  <View>
    <TouchableOpacity style={btnStyle.gameBtn} onPress={onPress}>
      <Text style={btnStyle.btnTxt}>{name}</Text>
    </TouchableOpacity>
  </View>
);

export default GameBtn;
