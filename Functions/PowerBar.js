import React from 'react';
import { View, Text } from 'react-native';
import { powerBar } from '../style/powerBarStyle';

const PowerBar = () => {
    return (
        <View style={powerBar.container}>
            <Text style={powerBar.txt}>Dominance</Text>
            <View style={powerBar.colorContainer}>
                <View style={powerBar.colorVilain}><Text style={powerBar.vilainTxt}>Vilain</Text></View>
                <View style={powerBar.center}></View>
                <View style={powerBar.colorHero}><Text style={powerBar.heroTxt}>Hero</Text></View>
            </View>
        </View>

    );
};

export default PowerBar;
