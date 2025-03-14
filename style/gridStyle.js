import { StyleSheet } from "react-native";

export const gridStyle = StyleSheet.create({
    gridContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },

      gridBorder:{
        borderWidth: 5,
        borderColor: '#FFE500',
        padding: 5,
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
})