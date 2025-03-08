import { StyleSheet } from "react-native";

export const powerBar = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFE500',
        padding: 10,
    },

    txt: {
        color: '#FFE500',
        fontSize: 20,
        fontFamily: 'Bangers-Regular',

    },

    center: {
        height: 35,
        width: 5,
        backgroundColor: '#FFE500',
    },

    colorVilain: {
        height: 20,
        width: '45%',
        backgroundColor: 'red',
    },

    vilainTxt: {
        textAlign: 'center',
        fontFamily: 'Bangers-Regular',
    },

    colorHero: {
        height: 20,
        width: '45%',
        backgroundColor: 'lightskyblue',
        justifyContent: 'center',
    },

    heroTxt: {
        textAlign: 'center',
        fontFamily: 'Bangers-Regular',
    },
})