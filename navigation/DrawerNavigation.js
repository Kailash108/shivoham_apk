import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FTTabNavigator from "./famoustemp";
import TabNavigator from "./TabNavigator";
import Jyothirlingas from "./Jyothirlingas";
import { vid, stories } from './livedarshan';
import DnT from './Directions';
import {audio} from './function1'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeBackgroundColor: 'slateblue',
      inactiveBackgroundColor: 'black',
      labelStyle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    }}} 
    drawerStyle={{
      backgroundColor: 'khaki',
      width: 230,
    }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="JyothirLingas" component={Jyothirlingas} />
      <Drawer.Screen name="Stories(Video)" component={stories} />
      <Drawer.Screen name="Popular Temples" component={FTTabNavigator} />
      <Drawer.Screen name="Directions and Timings" component={DnT} />
      <Drawer.Screen name="E-Darshan" component={vid} />
      <Drawer.Screen name="Audios" component={audio} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;