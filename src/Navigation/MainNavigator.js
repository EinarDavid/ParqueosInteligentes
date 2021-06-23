import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavegacionDesplegable from "./Tabs";


import Inicio from '../View/SplashScreen/Splash1';


const Stack = createStackNavigator();
export default class NavegacionPrincipal extends React.Component {
  render()
  {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="Desplegables"
            component={NavegacionDesplegable}
            options={{
                headerShown: false
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}