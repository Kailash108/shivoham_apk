import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';  
import { fourTemple } from './function'
import { threeTemple } from './function1'
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const fourTemp = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="Chardham Yathra" component={fourTemple} options={{
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

const threeTemp = ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
        <Stack.Screen name="Other Places To Visit" component={threeTemple} options={{
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

export { fourTemp, threeTemp };