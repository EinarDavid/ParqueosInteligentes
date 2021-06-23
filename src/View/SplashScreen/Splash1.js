import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
//import Colors from '../../Config/Colors';
import Descripcion from '../../Componets/Description';
import Images from '../../Config/Images';
//import Constans from '../../Config/Constans';
import ButtonFooter from '../../Componets/Button';

const Splash1 = ({navigation}) => {
 
  return (
    <ImageBackground source={Images.SPLASH1} style={{ width: '100%', height: '100%' }}>
      <View style={{flex:1}}>
      <View style={styles.container}>
        <Descripcion
          Titulo={"Parqueos Inteligentes"}
          Contenido={"Verifica si hay espacios libres desde cualquier en el que te encuentres"}
        />
      </View>
      <View style={styles.boton}>
        <ButtonFooter
          Accion={"INGRESAR"}
          onPress={() => { navigation.navigate('Desplegables'); }}
        />
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
    justifyContent:'flex-end',
    //backgroundColor: '#000',
    //marginTop: 430,
    marginBottom:50,
  },
  boton: {
    flex:1,
    //backgroundColor: '#dedede',
    alignItems: 'center',
    
   
   
  },
});
export default Splash1;
/*
<View style={styles.container}>
       <Onboarding
           //source={Images.FONDO3}
           Titulo={Constants.STRING.TITULO3}
           Contenido={Constants.STRING.CONTENIDO3}
           onPressPrev={() => {navigation.navigate('Task');}}
           onPressNext={() => { }}
       ></Onboarding>
   </View>
*/