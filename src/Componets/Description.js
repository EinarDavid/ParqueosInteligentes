import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//import Colors from '../../Config/Colors';


const ScreenPMD = ({ Titulo, Contenido }) => {
    return (
        <View style={styles.containerGen}>
            <View style={styles.container}>
                <Text style={styles.TextTitulo} category='h1'>{Titulo}</Text>
                <Text style={styles.TextContenido} category='h6'>{Contenido}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerGen: {
        marginTop:80,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextTitulo: {
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 30,
        marginBottom:10,
    },
    TextContenido:{
        color: '#ffffff',
        width:'60%',
        backgroundColor: 'transparent',
        fontSize: 20,
        textAlign: 'center',
    },
    ContainerImg: {
        marginTop: -145,
        marginLeft: 70,
    },
    Image: {
        width: 500,
        height: 600,
    },
});
export default ScreenPMD;

