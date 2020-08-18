import React from 'react';
import {Text, View, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import WebView from 'react-native-webview';

function stories({navigation}){
    return(
        <ScrollView style={{marginTop: Constants.statusBarHeight}}>
        <View>
            <View style={{backgroundColor: 'black', height: 50}}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, paddingTop: 15}}>Video Stories</Text>
            </View>
            <TouchableOpacity>
                <Button title='Open Menu' onPress={() => navigation.openDrawer()} />
            </TouchableOpacity>
        </View>
         <Text>{'\n\n'}</Text>
         <View style={{ height: 300 }}>
             <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Shiva: The God</Text>
            <WebView source={{uri: 'https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597036069&f=vWw2xUvgGevqo26kkd0oQw' }} />
        </View>
        <Text></Text>
        <View style={{ height: 300 }}>
             <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Must Know Stories</Text>
            <WebView source={{uri: 'https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597035582&f=8wtDIAgHKDqpdU6jz0ge6Q' }} />
        </View>
    </ScrollView>
    )
}

const  vid = ({navigation}) => {
    return (
        <ScrollView style={{marginTop: Constants.statusBarHeight}}>
        <View>
            <View style={{backgroundColor: 'black', height: 50}}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 20, paddingTop: 15}}>Welcome To E-Darshan(Pre-Recorded)</Text>
            </View>
            <TouchableOpacity>
                <Button title='Open Menu' onPress={() => navigation.openDrawer()} />
            </TouchableOpacity>
        </View>
         
         <Text>{'\n\n'}</Text>
         <View style={{ height: 300 }}>
             <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Shri Kaasi Vishwanath Darshan</Text>
            <WebView source={{uri: 'https://www.youtube-nocookie.com/embed/74O0ejFC0Mk' }} />
        </View>
        <Text></Text>
        <View style={{ height: 300 }}>
             <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Somnath e-Darshan</Text>
            <WebView javaScriptEnabled={true} domStorageEnabled={true} source={{uri: 'https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597037304&f=nIubdxO3J0DTlgCxIbR9uQ' }} />
        </View>
        <Text></Text>
        <View style={{ height: 300 }}>
             <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Ganga Aarathi(Kaasi)</Text>
            <WebView javaScriptEnabled={true} domStorageEnabled={true} source={{uri: 'https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597051013&f=lAdXu1bmu4uW9KZCydU6SQ' }} />
        </View>
        <Text></Text>
        <View style={{height: 300}}>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Ujjain Live Darshan</Text>
            <WebView javaScriptEnabled={true} domStorageEnabled={true} source={{uri: 'https://www.youtube-nocookie.com/embed/-mwX2GEd47M?rel=0&' }} />
        </View>
    </ScrollView>
    )
}

export { vid, stories }