import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003367',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //  ********* Buttons Section *********

  BtnRow: {
    flexDirection: 'row', // Direction of the top Buttons
  },

  gameBtn: { // Buttons style
    backgroundColor: '#FFE500',
    color: '#003367',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },

  btnTxt: {
    fontFamily: 'Bangers-Regular',
    fontSize: 16,
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
    width: 40,
    height: 40,
    margin: 2,
  },

  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },


});


export default styles;