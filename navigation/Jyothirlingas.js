import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { JLinfo, sn }  from './JLinfo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  places: {
      marginTop: 10,
      fontSize: 25,
      textDecorationLine: 'underline',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'gold',
    },
    time: {
      marginTop: 5,
      fontSize: 15,
      color: 'gold',
      textAlign: 'center',
      backgroundColor: 'black',
    },
    mark: {
      fontWeight: 'bold'
    }
})

function sn1({navigation}){
  return(
    <ScrollView style={{backgroundColor: 'black'}}>
    <View style={{marginTop: Constants.statusBarHeight}}>
        <View style={{backgroundColor: 'mediumslateblue', height: 50}}>
            <Text style={{color: 'white', marginTop: 15, fontSize: 25, paddingLeft: 10, fontSize: 15}}>History of Jyothirlingas</Text>
              <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white', alignSelf: 'center', marginTop: -25}} />
        </View>
        <View>
          <Text style={styles.places}>Somnath:</Text>
          <Text style={styles.time}>
            According to ShivPurana, Moon has married all the 27 daughters of Daksha Prajapathi. But, he is caring Rohini the most. Seeing that, Daksha has cursed moon that he will lose all his glow. Feeling sad, 
            Rohini came to Somnath and worshipped Lord Shiva. There, Lord Shiva blesses moon and he gains all his powers and glow. Finally, Moon has requested Lord Shiva to stay there and the place is called as 'Somnath'.
          </Text>             
        </View>

        <View>
          <Text style={styles.places}>Srisailam:</Text>
          <Text style={styles.time}>
            According to ShivPurana, Lord Ganesha got married whereas his elder brother(Karthikeya) didn't . He got angry and went to Kraunch parvath. All the gods including his parents(Lord Shiva and Goddess Parvathi) came there to cool him up but coudn't able to do that. 
            So, Lord shiva has assumed the form of a JyothirLinga. The place is now called as 'Srisailam'.
          </Text>             
        </View>

        <View>
          <Text style={styles.places}>Ujjain:</Text>
          <Text style={styles.time}>
            Once upon a time, there is a boy named 'Srikar' who was completely excited by seeing his King's(Chandrasena) devotion towards Lord Shiva. From then, The boy has started worshipping Lord Shiva. Many people had tried to stop him but they couldn't.
            Seeing his devotion towards him(Lord Shiva), he took the form of Jyothirlinga and resided near the Mahakal forest. The place is now known as 'Ujjain'.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Omkareshwar:</Text>
          <Text style={styles.time}>
            Once upon a time, there was a war between Devas and Rakshasas resulting Demons as winner. Devas started worshipping Lord Shiva. Finally, Lord Shiva has emerged as Omkareshwar and defeated the Rakshasas.
            The place is now called as 'Omkareshwar'
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Vaidyanath:</Text>
          <Text style={styles.time}>
          The King Ravana meditated for Lord Shiva and asked him to reside in his kingdom(Lanka). Lord Shiva has given him the twelve lingas with a condition that if any of the linga would be grounded, the linga would root there permanently. 
          Demon Ravana accepted it and lifted all the lingas and moved towards his kingdom. While in a way, Lord Varuna entered Ravana’s body, So that he could leave all the lingas. He needed to relieve himself. Then, Lord Vishnu has manifested in the form of a young man to help Ravana by holding the lingas. 
          However, Lord Vishnu has placed the lingam on ground and it got rooted there. By Watching this Ravana in anger of not taking Lord Shiva with him, shred down all of his nine heads. Seeing this, Lord Shiva came to him and joined his all nine head as a Vaidya (one who make on Ayurvedic Medicines). 
          The place is called as 'Vaidyanath'.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Bhimashankar:</Text>
          <Text style={styles.time}>
          When Bhima got to know that he was the son of Demon Kubhakarana who was killed by Lord Vishnu in the form of Lord Rama, he decided to take revenge against Lord Vishnu. 
          He performed penance of Lord Brahma to get powers from him. Seeing his prayers Lord Brahma fulfilled his wishes. Soon after getting all the powers, he started destruction on the earth. He also had a fight with Kamarupeshwar, a devotee Lord Shiva, and put him behind the bars. 
          This frustrated many Gods and they worshiped Lord Shiva to finish this demon. A war went on and Lord Shiva dust him out. All Gods asked Lord Shiva to make this place as his home. This is the place known as 'Bhimashankar'. 
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Rameshwaram:</Text>
          <Text style={styles.time}>
          Lord Rama while traveling towards Sri Lanka in search of his wife Sita rested at Rameshwaram and were drinking water near the seashore. He heard these words, “How could you drink water without my permission?”. 
          After listening this Lord Rama made an idol with the sand and worshipped it and asked blessings of Lord Shiva so that he could defeat Ravana. He received the blessings from Lord Shiva which then turned into a Jyotirlinga and resided in Rameshwaram.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Grishneshwar:</Text>
          <Text style={styles.time}>
          According to Shiva Purana, there was a married couple Sudharm and Sudeha who lived on the Devnagari mountain. But they had no infants so Sudeha allowed Sudharm to marry her own sister Ghusma. Sudharm and Ghusma had a beautiful boy which made her parents proud and this happiness acted as a thorn in the eyes of Sudeha. Without taking this further, Sudeha threw the baby into a lake where
          Sudharm used to discharge 101 lingams in the same lake. After getting to know about his missing child, he went to the lake and prayed Lord Shiva to get his son back. After listening to his prayer Lord Shiva showed his presence with the boy. 
          The Lord returned his child and disclosed Sudeha’s evil deeds to him. Hearing this, instead of getting Sudeha punished, he asked Lord Shiva to release her. This pleased Lord Shiva for Sudharm’s generosity. Sudharm also requested God to reside there. That place is now called as 'Ghushmeshwar'.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Nageshwar:</Text>
          <Text style={styles.time}>
          There's a devotee named Supriya who was captured by a demon name Daaruka. He imprisoned Supriya in his kingdom with many others behind the bars. 
          She advised everyone present there to recite “Om Nama Shivaaya” in every breath. This information got into the eyes of the demon. He immediately moved towards the prison to kill Supriya. 
          But, before he could do anything Lord Shiva manifested as Nageshwara in between and killed the demon. This made in the formation of Nageshwar Jyotirlinga.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Kashi Vishwanath:</Text>
          <Text style={styles.time}>
          People believes that if a body is burnt here after death, his soul will be sent to heaven, that’s why the burning ghats never goes out of fire. 
          Many old age homes are situated beside the ghats where old people come and live after leaving their family to have their last breath in the holy city. So that their soul can live in peace.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Trimbakeshwar:</Text>
          <Text style={styles.time}>
          According to Shiva Purana, it was a request from river Godavari, Gautam Rishi with many other Gods to reside Lord Shiva there as Trimbakeshwar. Once, Gautam Rishi was given boon from Lord Varuna with a power of unlimited supply of food and grains. This made feel jealous among other gods. So they decided to send a cow to his grain stock. Gautam Rishi killed the cow accidentally. 
          After realizing his mistake he went to Lord Shiva to clean his sins and purify the premises. Lord Shiva after hearing his prayer asked Ganga to flow through the land to clean all his sins and resided beside the river in the form of Trimbakeshwar Jyotirlinga.
          </Text>             
        </View>
        <Text></Text>

        <View>
          <Text style={styles.places}>Trimbakeshwar:</Text>
          <Text style={styles.time}>
          According to Shiva Purana, it was a request from river Godavari, Gautam Rishi with many other Gods to reside Lord Shiva there as Trimbakeshwar. Once, Gautam Rishi was given boon from Lord Varuna with a power of unlimited supply of food and grains. This made feel jealous among other gods. So they decided to send a cow to his grain stock. Gautam Rishi killed the cow accidentally. 
          After realizing his mistake he went to Lord Shiva to clean his sins and purify the premises. Lord Shiva after hearing his prayer asked Ganga to flow through the land to clean all his sins and resided beside the river in the form of Trimbakeshwar Jyotirlinga.
          </Text>             
        </View>
        <Text></Text>
        
        <View>
          <Text style={styles.places}>Kedarnath:</Text>
          <Text style={styles.time}>
          According to puranas, having pleased by Nara and Narayana(Incarnations of Lord Vishnu), Lord Shiva permanently resided in the mountain of Kedarnath in the form of Jyotirlinga. This place is believed to be the permanent home of Lord Shiva.
          </Text>             
        </View>
        <Text></Text>

    </View>
    </ScrollView>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName = "JLinfo"
      tabBarOptions = {{
        activeTintColor: 'white',
        activeBackgroundColor: 'mediumslateblue',
        inactiveTintColor: 'slateblue',
      }}>
      
    <Tab.Screen name="Home" component={JLinfo} options={{
        tabBarLabel: 'Overview',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="home" color={color} size={size} />
          </TouchableOpacity>
        ),
    }} />

    <Tab.Screen name="Pictures & Links" component={sn} options={{
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="folder-multiple-image" color={color} size={size} />
          </TouchableOpacity>
        )
    }} />

  <Tab.Screen name="History" component={sn1} options={{
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="history" color={color} size={size} />
          </TouchableOpacity>
        )
    }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator