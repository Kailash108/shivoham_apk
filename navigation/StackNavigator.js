import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Contact, nandi, } from './function';
import {Bhasmam} from './function1';
import Icon from 'react-native-vector-icons/Ionicons';  
import { Alert, Linking} from 'react-native'
import email from 'react-native-email'
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const handleEmail = () => {
  const to = ['srikarkailash09@outlook.com'] // string or array of email addresses
  email(to, {
      subject: 'Suggestion/Requesting A Feature in App(Shivoham)',
      body: 'Hello Kailash, \n',
  })
}

const createTwoButtonAlert = () =>
Alert.alert(
  "Please Note These Points",
`From,\nKailash Medavarapu,\nDeveloper Of Shivoham.\n
1. The information you see in the app have been taken from various websites. If anyone thinks that your information should not be here in this app, you can send me a mail. So that, I will remove it.\n
2. Don't completely depend for temple timings and directions provided to you in this app.\n
3. One should have their own plans for travelling.\n
4. If you have any suggestions or need some more content, send me an email.\n`,
  [
    {
      text: "Share This App??",
      onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=com.msk.ABLS'),
    },
    {
      text: "Email??",
      onPress: (handleEmail),
    },
    { text: "OK" }
  ],
);

const MainStackNavigator= ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="Lord Shiva" component={Home} options={{
        headerLeft: () => (
          <TouchableOpacity>
            <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Icon name="md-information-circle" onPress={createTwoButtonAlert} size={30} style={{marginRight: 5, color: 'white'}} />
          </TouchableOpacity>
        ),
        headerTitleAlign: "center",
      }} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator  screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="About Lord Shiva" component={Contact} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity>
            <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
          </TouchableOpacity>
        )
      }} />
    </Stack.Navigator>
  );
};

const nandiHeader = ({navigation}) => {
  return (
    <Stack.Navigator  screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="Nandi" component={nandi} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity>
            <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
          </TouchableOpacity>
        )
      }} />
    </Stack.Navigator>
  );
};

const bhasmam = ({navigation}) => {
  return (
    <Stack.Navigator  screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'mediumslateblue'} }}>
      <Stack.Screen name="Importance of Bhasmam" component={Bhasmam} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity>
            <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white'}} />
          </TouchableOpacity>
        )
      }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, bhasmam, nandiHeader };