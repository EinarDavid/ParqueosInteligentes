import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/material-top-tabs';
import Piso1 from '../View/TabsView/Piso1';
import Piso2 from '../View/TabsView/Piso2';
import Piso3 from '../View/TabsView/Piso3';

const Tab = createBottomTabNavigator();   //Abajo
//const Tab = createTopTabNavigator();   //Arriba


export default class NavegacionAbajo extends React.Component {
  render()
  {
    console.disableYellowBox = true; 
    return (

        <Tab.Navigator>
          <Tab.Screen style={{fontSize: 25, fontWeight:'bold',}} name="Floor One" component={Piso1} />
          <Tab.Screen name="Floor Two" component={Piso2} />
          <Tab.Screen name="Floor Three" component={Piso3} />
        </Tab.Navigator>

    );
  }
}
/*

          <Tab.Screen name="Floor Two" component={Piso_two} />
          <Tab.Screen name="Floor Three" component={Piso_three} />
*/