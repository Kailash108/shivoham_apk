import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, ScrollView, StyleSheet, Linking} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';  
import { two, three } from './function1'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  places: {
    marginTop: 10,
    fontSize: 25,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  time: {
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    textAlign: 'center'
  },
  mark: {
    fontWeight: 'bold'
  }
})

function one({navigation}){
    return(
      <ScrollView>
        <View style={{marginTop: Constants.statusBarHeight}}>
            <View style={{backgroundColor: 'mediumslateblue', height: 50}}>
                <Text style={{color: 'white', marginTop: 15, fontSize: 25, paddingLeft: 10, fontSize: 15}}>Directions{'&'}Timings</Text>
                <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white', alignSelf: 'center', marginTop: -25}} />
            </View>
            <View>
              <Text style={styles.places}>Somnath:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>6.00am to 9.00pm</Text>{'\n'}
                Timing for Aarti : <Text style={styles.mark}>7.00 am, 12.00 Noon and 7.00 pm</Text>{'\n'}
                Jai Somnath Sound cum Light Show :<Text style={styles.mark}> 8.00 pm to 9.00 pm</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                Amdavad is connected by Rail, Road and Air with all the major destinations.{'\n\n'}
                Veraval Somnath is connected with Amdavad to Rail and Road facilities.{'\n\n'} 
                Somnath is at a distance of 465 km. from Amdavad.{'\n\n'}
                At present Jet Airwais operates passenger flight from Bombay to Diu every day accept Thursday. 
                Somnath is connected with Diu by road (95 km).
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Shree Somnath Trust{'\n'}
                C / 12-A, Shree Om Villa Apartment{'\n'}
                F.C.I. Godown Road,{'\n'}
                Shahibaug, Ahmedabad -380 004{'\n'}
                GUJARAT, INDIA.{'\n'}
                Phone and Fax No.: +91-79-22686335,{'\n'}
                Phone No.: +91-79-22686442,{'\n'}
                Email: somnathad1@sancharnet.in{'\n'}
              </Text>
            </View>
        </View>
        <Text></Text>

            <View>
              <Text style={styles.places}>Srisailam:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5.30am(Sun, Mon), 6.30am to 1.00pm[Morning]{'\n'}6.00pm to 10.00pm[Night]</Text>{'\n'}
                Suprabhatam : <Text style={styles.mark}>4.00am to 5.00am(Sun, Mon). 5.00am to 6.00am(Rest of the week)</Text>{'\n'}
                Abhishekam :<Text style={styles.mark}>5.30am to 3.30pm(Sun, Mon). 6.30am  to 3.30pm(Rest of the week)</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}} onPress={()=> Linking.openURL('http://www.srisailamonline.com/timings.html')}>Press Here For More{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  Air: The nearest Airport is Hyderabad (230 K.M.) from where buses are plying to Srisailam everyday frequently.{'\n\n'}
                  Rail: Markapur, which is 91 K.M. from Srisailam in Guntur-Hubli, line on South Central Railway from where buses are available to Srisailam.{'\n\n'}
                  Raod: Srisailam is well connected by A.P.S.R.T.C.Buses not only from all corners of the State but also from Bangalore, Chennai etc. 
                  The Karnataka Road Transport Corporation is also running buses from various main cities of that state.{'\n\n'}
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                  Executive Officer,{'\n'}
                  Srisaila Devasthanam,{'\n'}
                  Srisailam - 518101,{'\n'}
                  Kurnool (Dt),{'\n'}
                  Andhra Pradesh (State).{'\n'}
                  E-Mail : eo@srisailamonline.com, endow-eosri@gov.in{'\n'}
                  S.T.D CODE : 08524{'\n'}
                  Phone No. : 8333901351, 8333901352, 8333901353, 8333901354, 8333901355
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Ujjain:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>4:00 AM - 10:00 PM</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}} onPress={()=> Linking.openURL('http://dic.mp.nic.in/ujjain/mahakal/default.aspx')}>Press Here For More Info.{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                The nearest airport is Indore Airport, 51 km from the temple.{'\n\n'}
                The nearest railway station is Ujjain Railway Station, located 1 km from the temple.{'\n\n'}
                Visitors can also take buses from Bhopal (188km), Delhi (776km) and Mumbai (648km) to Ujjain.{'\n\n'}
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
              Administrator - Shree Mahakaleshwar Temple Management Committee,Ujjain.{'\n'}        
              Off Tel 0734-2550563{'\n'}
              Shree Mahakaleshwar Temple{'\n'}
              E-mail: office@mahakaleshwar.nic.in{'\n'}
              Tel.: 0734-2550563{'\n'}
              Dharmshala: 0734-2551714, 0734-2585873{'\n'}
              IT: 0734-2551295{'\n'}
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Omkareshwar:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>8am to 8pm[Might Differ]</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}}>For More Info. Visit The Official Website{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: The nearest airport is Indore (75KM), Connected by regular flights from all over India. Indore having direct flights from Mumbai, Delhi, Kolkata, Ahmedabad and measure cities. 
                  Almost most of the airlines are operating in Indore.{'\n\n'}
                  By Railway: Nearest railhead is Omkareshwar road (Mortakka) 12 KM on ratlam Khandawa section of Western Railway.{'\n\n'} 
                  By Road:
                  Omkareshwar is connected to Indore Khandawa and Ujjain by regular bus services.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                  Shri Omkareshwar JyothirLinga, Khandwa.
                  Phone No. : +917280271228{'\n'}
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Kedarnath:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>April To October(4AM to 7PM)</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}} onPress={()=> Linking.openURL('http://www.kedarnathindia.com/pilgrimage.html')}>Press Here To Know More{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: Jolly Grant Airport is the nearest Airport to Kedarnath situated at a distance of 238kms. Jolly Grant Airport is well connected to Delhi with daily flights.
                  Gaurikund is well connected by motorable roads with Jolly Grant Airport. Taxis are available from Jolly Grant Airport to Gaurikund.{'\n\n'}
                  By Railway: The nearest railway station to Kedarnath is Rishikesh. Rishikesh railway station is situated 216kms before Kedarnath on NH58. Rishikesh is well connected by railway networks with major destinations of India. 
                  Trains to Rishikesh are frequent. Gaurikund is well connected by motorable roads with Rishikesh. Taxis and buses are easily available from Rishikesh to Gaurikund.{'\n\n'} 
                  By Road: Gaurikund is the point where road to Kedarnath ends and an easy trek of 14km commence. Gaurikund is well connected by motorable roads with major destinations of Uttarakhand and northern states of India. Gaurikund lies on National Highway 109 which connects Rudraprayag with Kedarnath.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Rajshekhar Ling{'\n'}
                Chief Priest{'\n'}
                Shri Kedarnath Temple{'\n'}
                Post Ukhimath / Kedarnath{'\n'}
                District: Rudraprayag, UTTARAKHAND{'\n'}
                Pin Code: 246 469 INDIA{'\n'}
                Phone: 0091-1364 2642 11{'\n'}
                Cell: 0091 9458 4913 60, 0091 9675 3372 00 {'\n'}
                E-mail: rajshekhar_50@rediffmail.com, rajkedarnath@yahoo.com{'\n'}
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Trimbakeshwar:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5.30AM to 9PM</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}} onPress={()=> Linking.openURL('http://www.kedarnathindia.com/pilgrimage.html')}>Press Here To Know More{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: Nearest Airport is Mumbai, which is 180 Kms from The Temple.{'\n\n'}
                  By Road: Shri Trimbakeshwar Temple is located at a distance of about 28 km from Nashik City Trimbakeshwar is well connected by state transport buses.{'\n\n'}
                  By Rail: Nashik to Trimbakeshwar Road Distance is about 30 Kms Nashik is well connected by Road.{'\n\n'}
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Phone No. : +91 2594 234 335
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>BhimaShankar:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5.30AM to 9PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: Nearest Airport is at Pune which is 125km from the temple{'\n\n'}
                  By Road: From Pune(ShivajiNagar S.T Stand) -- 5.30am to 4.00pm{'\n'}From Kalyan -- 9.00AM{'\n'}From Gahtkopar(Kurla) -- 11.00AM{'\n\n'}
                  By Rail: Nearest Railway Station is at Pune
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Ganesh Gawande,
                Email: ganesh@bhimashankar.in,
                Phone No. : +91 9970045972
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Kaasi Vishwanath:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>4AM to 10PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: Varanasi airport is well-linked to some of the major cities in India like Delhi and Mumbai. 
                  International tourists can board connecting flights from Delhi airport which is well-connected to all the major cities in the world.{'\n\n'}
                  By Road: Varanasi is connected to major cities of Uttar Pradesh and neighbouring states by state-run buses. 
                  Private air-conditioned buses are also available from nearby cities to Varanasi.{'\n\n'}
                  By Rail: The Varanasi railway station is connected to major cities of India via rail. From the railway station, tourists can hire a taxi or a cab to explore the city.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                      Address :
                      Chief Executive Officer{'\n'}
                      Shri Kashi Vishwanath Temple Help Desk{'\n'}
                      CK 37/40,41,42 Bansphatak, Varanasi-221 001{'\n'}
                      Phone : 0542- 2392629, +91-6393131608{'\n'}
                      Email : shrikashivishwanathtempletrust@gmail.com, support@shrikashivishwanath.org{'\n'}
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Baidyanath JyothirLinga:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>4am to 4pm & 6.30pm to 8.45pm[Might Differ]</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air: You can reach Deoghar from Kolkata Airport or Ranchi Airport By train.{'\n\n'}
                  By Road: Deoghar is 6 km away from Jasidih Junction.{'\n\n'}
                  By Rail: Bayidhnath Temple is about 3km from Deoghar bus stand.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                  Phone No. : +91-643-2232295
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Nageshwar JyothirLinga:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5AM to 9PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air:  Nearest airport is Jamnagar which is 137 km from the temple.{'\n\n'}
                  By Road: Dwarka is on the state highway from Jamnagar to Dwarka. Direct buses available from Jamnagar and Ahmedabad.{'\n\n'}
                  By Rail: Dwarka is a station on the Ahmedabad-Okha broad gauge railway line, with trains connecting it to Jamnagar (137 km), Rajkot (217 km) and Ahmedabad (471 km), 
                  and some trains that continue all the way down the coast through Vadodara, Surat, Mumbai, Goa, Karnataka, to the southern tip of India in Kerala.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                  Phone No. : +91-79-23977200
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>RamanathaSwamy Jyothirlinga:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5AM to 1PM & 3PM to 9PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air:  The nearest airport is at Madurai, 163 km from Rameshwaram.{'\n\n'}
                  By Road: The city is well connected to Madurai, Kanyakumari, Chennai and Trichy. It is also connected to Pondicherry and Thanjavur via Madurai.{'\n\n'}
                  By Rail: Rameshwaram is connected by rail with Chennai, Madurai, Coimbatore, Trichy, Thanjavur and other important cities.
                  The two kilometers stretch of Indira Gandhi Bridge connects the island of Rameshwaram to the mainland of Mandapan.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
              Arulmigu Ramanathaswamy Temple{'\n'}
              Ramanathapuram, District,{'\n'}
              Rameswaram - 623 526.{'\n'}
              Phone No. : 04573 - 221223{'\n'}
              E-Mail ID : rameshwaramtemple@tnhrce.com
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Grishneshwara Jyothirlinga:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>5.30AM to 9.30PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                  By Air:  The nearest airport is in Aurangabad, and there are regular flights from Delhi, Mumbai, Jaipur, and Udaipur.{'\n\n'}
                  By Road: From Pune: 256 km/4.5 hours. From Nasik: 187 km/3 hours. From Shirdi: 122 km/2.5 hours.{'\n\n'}
                  By Rail: Aurangabad is the nearest railway station. Manmad is also closer and better connected.
                </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Phone No. : 8500898000, 9393939150
              </Text>
            </View>
            <Text></Text>
      </ScrollView>
    )
}

const Tab = createBottomTabNavigator();

const DnT = () => {
  return (
    <Tab.Navigator
      initialRouteName = "fourTemp"
      tabBarOptions = {{
        activeTintColor: 'white',
        activeBackgroundColor: 'mediumslateblue',
        inactiveTintColor: 'slateblue',
      }}>

    <Tab.Screen name="Home" component={one} options={{
        tabBarLabel: "JyothirLingas",
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
          </TouchableOpacity>
        ),
    }} />

    <Tab.Screen name="Other Temples" component={two} options={{
        tabBarLabel: 'Chardham',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="map-marker-check" color={color} size={size} />
          </TouchableOpacity>
        )
    }} />

    <Tab.Screen name="Others" component={three} options={{
        tabBarLabel: 'Few More Centers',
        tabBarIcon: ({color, size}) => (
          <TouchableOpacity>
            <MaterialCommunityIcons name="map-search" color={color} size={size} />
          </TouchableOpacity>
        )
    }} />
    </Tab.Navigator>
  );
}

export default DnT;