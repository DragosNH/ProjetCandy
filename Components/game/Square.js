import React from 'react';
import { View } from 'react-native'; // Fixed incorrect import
import styles from '../../Screens/style';

const Square = () => {
  return (

    <View style={styles.square}>
      <View style={styles.squareIcon}></View>
    </View>
  );
};

export default Square;
