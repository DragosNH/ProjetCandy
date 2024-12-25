import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003367',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //  ********* Buttons Section *********

    BtnRow:{
        flexDirection: 'row', // Direction of the top Buttons
    },

    gameBtn: { // Buttons style
        backgroundColor: '#FFE500',
        color: '#003367',
        padding: 10,
        borderRadius: 20,
        margin: 5
    }
  });

  
export default styles;