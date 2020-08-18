import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fourTemp, threeTemp }  from './tempinfo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

const FTTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName = "fourTemp"
      tabBarOptions = {{
        activeTintColor: 'white',
        activeBackgroundColor: 'mediumslateblue',
        inactiveTintColor: 'slateblue',
      }}>

    <Tab.Screen name="Home" component={fourTemp} options={{
        tabBarLabel: 'Chardham',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="alpha-a-box" color={color} size={size} />
          </TouchableOpacity>
        ),
    }} />

    <Tab.Screen name="Other Temples" component={threeTemp} options={{
        tabBarLabel: 'Few More Centers',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="alpha-b-box" color={color} size={size} />
          </TouchableOpacity>
        )
    }} />
    </Tab.Navigator>
  );
}

export default FTTabNavigator;