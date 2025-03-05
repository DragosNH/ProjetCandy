import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.gameBtn}
                onPress = {() => navigation.navigate('Game Screen')}> 
                <Text style={styles.btnTxt}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;