import { StyleSheet } from 'react-native';

export const gameScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003367',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
  },
  headerImg: {
    width: 350,
    height: 60,
  },
  txt: {
    fontSize: 24,
    color: '#FFE500',
    fontFamily: 'Bangers-Regular',
    textAlign: 'center',
  },
  gameEnd:{
    justifyContent: 'center',
    alignItems:'center'
  }
});
