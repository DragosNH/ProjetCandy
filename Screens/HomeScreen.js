import React from 'react';
import { View, Image } from 'react-native';
import homeScreenStyle from '../style/homeScreenStyle';
import GameBtn from '../Functions/GameBtn';

const HomeScreen = ({ navigation }) => {
    return(
        <View style={homeScreenStyle.container}>
            <Image style={homeScreenStyle.titleImg} source={require('../assets/images/title_img.png')} />
            <GameBtn name="Start Game" onPress = {() => navigation.navigate('Game Screen')} />
        </View>
    )
}

export default HomeScreen;