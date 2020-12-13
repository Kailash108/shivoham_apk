import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MainStackNavigator, ContactStackNavigator, nandiHeader, bhasmam } from './StackNavigator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      tabBarOptions = {{
        inactiveTintColor: 'slateblue',
        activeTintColor: 'white',
        activeBackgroundColor: 'mediumslateblue'
      }}>

    <Tab.Screen name="Home" component={MainStackNavigator} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="home" color={color} size={size} />
          </TouchableOpacity>
        ),
    }} />
    
    <Tab.Screen name="Second" component={ContactStackNavigator} options={{
      tabBarLabel: 'About',
      tabBarIcon: ({color, size}) => (
        <TouchableOpacity>
          <MaterialCommunityIcons name="numeric-1-circle" color={color} size={size} />
        </TouchableOpacity>
      )
    }} />

    <Tab.Screen name="Third" component={nandiHeader} options={{
      tabBarLabel: 'Nandi',
      tabBarIcon: ({color, size}) => (
        <TouchableOpacity>
          <MaterialCommunityIcons name="numeric-2-circle" color={color} size={size} />
        </TouchableOpacity>
      )
    }} />

    <Tab.Screen name="Fourth" component={bhasmam} options={{
      tabBarLabel: 'Bhasmam',
      tabBarIcon: ({color, size}) => (
        <TouchableOpacity>
          <MaterialCommunityIcons name="numeric-3-circle" color={color} size={size} />
        </TouchableOpacity>
      )
    }} />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator