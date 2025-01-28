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
        margin: 5,
    },

    // ********* Grid *********

    gridContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      width: 50,
      height: 50,
      margin: 2,
    },

  square: {
      width: 45,
      height: 45,
      margin: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#add8e6', 
      borderWidth: 1,
      borderColor: '#13333e', 
  },

  squareText: {
      fontSize: 10,
      color: '#13333e', 
  },

  squareIcon: {
    backgroundColor: "red",
    width: 40,
    height: 40
  }

  });

  
export default styles;