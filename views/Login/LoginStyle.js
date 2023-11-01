import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    backgroundColor: '#fff',
    containerLogin:{
        display: 'flex',
        maxWidth: '100%',
        marginTop: 50,
    },
    divLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        alignItems: 'center',
        width: 80,
        height: 80,
        position: 'relative',
        marginBottom: 10,
    },

    containerCentralize:{
        display: 'flex',
        textAlign: 'center',
        maxWidth: '100%',
        alignItems: 'center',
    },

    titleLogin: {
        textAlign: 'center',
        marginBottom: 21,
        fontSize: 34,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#363636'
    },
    
    titleButton: {
        textAlign: 'center',
        fontSize: 21,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFF'
    },

    fieldLogin: {
        backgroundColor: '#F2F2F5',
        borderRadius: 5,
        fontSize: 13,
        minWidth: 255,
        maxWidth: '100%',
        marginBottom: 20,
        marginTop: 10,
        height: 55,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    textLogin: {
        textAlign: 'left',
        fontSize: 13,
        margin: 10,
        color: '#363636',
    },

    buttonLogin: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 34,
        height: 55,
        width: 200,
        borderRadius: 5,
        backgroundColor: '#6A79A8',
      },
});

export default loginStyle;