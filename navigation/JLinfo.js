import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';  
import {Home1, somnath} from './function'
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const JLinfo= ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="Dwadhasa Jyothir Lingas" component={Home1} options={{
        headerLeft: () => (
          <TouchableOpacity>
            <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
          </TouchableOpacity>
        ),
        headerTitleAlign: "center",
      }} />
    </Stack.Navigator>
  );
};

const sn= ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
        <Stack.Screen name="Temples" component={somnath} options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }} />
      </Stack.Navigator>
    );
  };
export { JLinfo, sn };