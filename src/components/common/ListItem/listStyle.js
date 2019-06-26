import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerStyle: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginLeft: 10,
      marginRight:10,
      marginTop:10,
      marginBottom:10,
      //ios    
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowColor: '#f6e0f2',
      shadowOffset: { height: 2, width: 0},
      //android
      elevation: 1
    },

    buttonStyle : {
        height: 40,
        justifyContent: 'center',
    },
    textStyle: {
        color: '#ff7aa8',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

    contentCenter: {
        justifyContent:'center', 
        alignItems:'center'
    },

    columnStyle: {
        flex: 1, 
        flexDirection: 'column'
    },

    rowStyle: {
        flex: 1, flexDirection: 'row'
    },

    fontLargeBold: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: 'black' 
    },

    fontMediumBold: {
        fontSize: 14, 
        fontWeight: 'bold', 
        color: 'black'
    },

    fontSmall: {
        fontSize: 12
    }
});