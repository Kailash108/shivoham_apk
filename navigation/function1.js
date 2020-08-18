import React from "react";
import {View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    images: {
        height: 200,
        width: 300,
        borderWidth: 2,
        borderColor: 'gold',
        alignSelf: 'center'
    },
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
function threeTemple(){
    return(
        <ScrollView>
            <LinearGradient colors={['purple', 'slateblue']}>
                <View>
                    <Text style={{fontSize: 30, color: 'gold', alignSelf: 'center', backgroundColor: 'black'}}>1. Manasasarovar Yathra</Text>
                    <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                        This Yathra contains two places to visit.{'\n'} 1. Parikrama of Mount Kailash{'\n'}2. Taking a dip in Manasarovar Lake.{'\n'}
                    </Text>
                    <Image style={styles.images} source={{uri: 'https://i.ytimg.com/vi/u-nV8IjTPvs/hqdefault.jpg'}}/>
                    <Text style={{fontSize: 20, color: 'gold', textAlign: 'center'}}>
                        {'\n\n'}It is elevated at a height of 4,500 meters and also known as 'Highest Freshwater Lake' in the world. The lake is at the foot of 'mount Kailash'
                        . The journey and moments felt at this place is memorable and atmosphere, ambience looks quite awesome.{'\n'}
                    </Text>
                    <WebView style={{height: 200}} source={{uri: 'https://www.youtube-nocookie.com/embed/sF36RiJ0dVc?modestbranding=1&rel=0&autoplay=1'}} />
                </View>
                <Text></Text>

                <View>
                    <Text style={{fontSize: 20, color: 'gold', alignSelf: 'center'}}>2. Mount Kailash</Text>
                    <Image style={styles.images} source={{uri: 'https://miro.medium.com/max/768/1*D-PJMoI_RIVGsBDaTuSRdQ.jpeg'}}/>
                    <Image style={styles.images} source={{uri: 'https://www.tibettravel.org/blog/wp-content/uploads/2013/09/Ben-Mt-Kailash-Day-2-Sunrise-1.jpg'}}/>
                    <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                    {'\n'} 
                    The walk around the Mount Kailash in anti-clockwise or in clockwise direction is known as 'Parikrama'. For those who cannot do it on foot, 
                    there is an option of hiring 'A Dholi'.
                    {'\n'}
                    </Text>
                </View>
                <Text></Text>


                <View>
                    <Text style={{fontSize: 30, color: 'gold', alignSelf: 'center', backgroundColor: 'black'}}>AdiYogi(Isha Foundation)</Text>
                    <Image style={styles.images} source={{uri: 'https://images.sadhguru.org/sites/default/files/media_files/adiyogi-vital-to-our-times-20170705_063117-02.jpg'}}/>
                    <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                        {'\n'}Over 15,000 years ago, Adiyogi(The first Yogi) taught the Yoga to his seven shishyas, also known as 'Saptharishis'.{'\n\n'}
                        He taught the Yoga is 112 different ways to reach their ultimate potential.{'\n\n'}
                        His fundamental message is that “in is the only way out” for human wellbeing and liberation.{'\n\n'}                     
                        Located at Coimbatore, Tamil Nadu.
                    </Text>
                    <WebView style={{height: 200}} source={{uri: 'https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597033931&f=aCD0JK2v3FKmgNU6ZDzekw'}}/>
                </View>
                <Text></Text>

            </LinearGradient>
        </ScrollView>
    )
}

function two({navigation}){
    return(
        <ScrollView>
        <View style={{marginTop: Constants.statusBarHeight}}>
            <View style={{backgroundColor: 'mediumslateblue', height: 50}}>
                <Text style={{color: 'white', marginTop: 15, fontSize: 25, paddingLeft: 10, fontSize: 15}}>Directions{'&'}Timings</Text>
                <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white', alignSelf: 'center', marginTop: -25}} />
            </View>
            <View>
              <Text style={styles.places}>Gangothri:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>6.15am to 2.00pm and 3.00pm to 9.30pm</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air: Jolly Grant Airport is the nearest airport to Gangotri situated at a distance of 250 kms. Jolly Grant Airport is well connected to Delhi with daily flights and Gangotri is well connected by motorable roads with Jolly Grant Airport. 
                    You can also hire chopper services to Gangotri from Dehradun.{'\n\n'}
                    By Rail: The nearest railway station to Gangotri is Rishikesh 234 kms before Gangotri on NH58 and is well connected by railway network with major destinations of India.{'\n\n'}
                    By Road: The major destinations of Uttarakhand state are situated at the end of NH108, buses to Rishikesh are available from ISBT Kashmiri Gate, Delhi. Buses and Taxis to Gangotri are easily available from major destinations of Uttarakhand state like Dehradun, UttaraKashi{'\n'}
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                    Yatra Office(Rishikesh) -- 0135-2431783 / 93 / 2432648{'\n'}
                    Chardham Board(Dehradun) -- 0135-2666755 / 2666704
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Yamunothri:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>6:00 AM to 8:00 PM</Text>{'\n'}
                Time Of Aarati: <Text style={styles.mark}>6:30 PM to 7:30 PM</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air:  Jolly Grant Airport is the nearest Airport to Yamunotri situated at a distance of 210kms. It is well connected to Delhi with daily flights. 
                    Hanuman Chatti is directly not connected by motorable roads with Jolly Grant Airport  but taxis are available from Jolly Grant Airport to Hanuman Chatti. Helicopter services are also available till Yamunotri from Dehradun. {'\n\n'}
                    
                    By Rail: Dehradun railway station is situated 175kms from Yamunotri and Rishikesh railway station is situated 200kms before Yamunotri on NH58. Rishikesh and Dehradun are well connected by railway networks with major destinations of India. 
                    Trains to Rishikesh are frequent. Hanuman Chatti is well connected by motorable roads with Rishikesh and Dehradun. 
                    Taxis and buses are available from Rishikesh, Uttarakashi {'\n\n'}
                    
                    By Road:  Yamunotri is directly not connected with motorable roads and the trek commences from Hanuman Chatti. Hanuman Chatti is well connected by motorable roads with major destinations of Uttarakhand state. 
                    Buses to Rishikesh are available from ISBT Kashmiri Gate. Buses and Taxis to Hanuman Chatti are easily available from major destinations of Uttarakhand state like i{'\n'}
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
              Tourist Information Centre(Uttarkashi) -- 01374-274761{'\n'}
                    Head of Taxi Union(Uttarkashi) -- 	01374-222399
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Kedarnath:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>April to October(4AM to 7PM)</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air: The nearest domestic airport is Jolly Grant Airport in Dehradun, about 239 km from Kedarnath and operates daily flights to Delhi. 
                    Taxis are available from Dehradun airport to Kedarnath. Nearest international airport is Delhi. {'\n\n'}
                    
                    By Rail: The nearest railhead is at Rishikesh, 221 km away. Pre-paid taxi services are available at the railway station which charge about Rs 3,000. 
                    One has to travel 207 km by road and the rest 14 km on foot to reach Kedarnath. {'\n\n'}
                    
                    By Road: Visitors can board regular buses from Rishikesh and Kotdwar to Kedarnath. Private taxis can also be hired from these places. 
                    The National Highway from Delhi to Mana (538 km) remains open throughout the year. Kedarnath is also accessible by foot from GauriKund, which is connected by state buses to Rishikesh, Dehradun, Kotdwara and Haridwar. 
                    The bus fares vary depending on the season.{'\n'}
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                    Badrinath – Kedarnath Temple Commitee(Rishikesh) -- 0135-2430261{'\n'}
                    Uttaranchal Tourism Development Board(Dehradun) -- 	0135-2624147
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>Badrinath:</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>April to October(4AM to 1PM and 4PM to 9PM)</Text>{'\n'}
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air: The Jolly Grant Airport in Dehradun is the closest airport from Badrinath, situated at a distance of around 317 km. It is located in a picturesque setting with the Himalayas in the background. 
                    It is a domestic airport and situated at a distance of 22 kms from the city centre of Dehradun. The airport was re-opened for use in 2009 after a renovation of new terminal building and runway extension.{'\n\n'}
                    
                    By Rail: Badrinath doesn’t have a railway station. It is connected via railway stations of Haridwar at 324km, Kotdwar at 327 km and Rishikesh at 397 km from the town. Kotdwar has very few trains and Rishikesh has no express trains. 
                    However, Haridwar is the best-connected railway station for Badrinath, connecting the town to the rest of the country. {'\n\n'}
                    
                    By Road: The distance from Haridwar to Badrinath is 318 km and from Rishikesh it is 298 km, taking around 12 hours and 10 hours respectively to complete this journey.{'\n'}
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                    Badrinath – Kedarnath Temple Commitee(Badrinath) -- 01381-222205{'\n'}
                    Uttaranchal Tourism Development Board(Dehradun) -- 	0135-2624147
              </Text>
            </View>
            <Text></Text>

        </View>
        </ScrollView>
    )
}

function three({navigation}){
    return(
        <ScrollView>
        <View style={{marginTop: Constants.statusBarHeight}}>
            <View style={{backgroundColor: 'mediumslateblue', height: 50}}>
                <Text style={{color: 'white', marginTop: 15, fontSize: 25, paddingLeft: 10, fontSize: 15}}>Directions{'&'}Timings</Text>
                <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white', alignSelf: 'center', marginTop: -25}} />
            </View>
            <View>
              <Text style={styles.places}>Manasarovar Yatra:</Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air: Chaudhary Charan Singh International Airport in Lucknow is 437 km away from Kailash Mansarovar, whereas Ngari Gunsa Airport is 209 km away. Tribhuvan International Airport in Kathmandu is 501 km away.{'\n\n'}
                    
                    By Rail: Kailash Mansarovar has no railway station of its own. Lucknow Railway Station is the nearest station to reach Mansarovar by train. From here, one can hire a taxi or cab to travel further. Other nearest railway stations are Kathgodam, Ramanagar, Kotdwara, Rishikesh and Haridwar Junction.{'\n\n'}
                    
                    By Road: Buses to Kailash Mansarovar are available from certain regions in India, China and Nepal. Indian government organises regular tours, but the number of seats are limited. Kailash Mansarovar can only be reached from four land routes- Indian border near Pithoragarh in Uttarakhand state of India, Shigatse in Tibet, Kashgar in China and Simikot/Hilsa in Nepal. Private buses are available from these places. 
                    You can also reach Kailash Mansarovar through a jeep safari or helicopter.{'\n'}
              </Text>
            </View>
            <Text></Text>

            <View>
              <Text style={styles.places}>AdiYogi(Isha Foundation):</Text>
              <Text style={styles.time}>
                Timing for Darshan : <Text style={styles.mark}>7AM to 8PM</Text>{'\n'}
                <Text style={{backgroundColor: 'black', color: 'white'}} onPress={()=> Linking.openURL('https://www.ishafoundation.org/Isha-Yoga-Center/visitor-information.isa')}>Press Here To Know More{'\n'}</Text>
              </Text>
              <Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>How To Reach</Text>{'\n'}
                    By Air: The nearest airport is Coimbatore, about 35 kilometers away. Coimbatore is well connected to all the major cities in India. Pre-paid taxi counters are available at the Coimbatore Airport. The taxi fare from the airport is Indian Rupees (INR) 900. Pay the fare at the counter and mention the destination as Isha Yoga Center. 
                    The prepaid counter does not assign a particular vehicle to a passenger, so once you collect your receipt, you can choose a vehicle of your choice. Usually, it takes a about an hour-and-a-half for the taxi to reach the Yoga Center. If there is no traffic on the roads of Coimbatore, the drive lasts about an hour.{'\n\n'}
                    
                    By Rail: Coimbatore is the nearest railway station. It is a major rail-head and is well connected to all parts of the country. Prepaid taxi counters are available from the Gandhipuram railway station. The fare is around INR 550 and the distance about 30 Kilometers.{'\n\n'}
                    
                    By Road: Bus services are also available from Gandhipuram(Coimbatore) Town Bus stand to the ashram. You need to catch bus no. 14D. Other buses also available. The Isha Yoga Center is the last stop on this route and the fare is INR 40. The bus timings for the route 14D from Gandhipuram Bus stand to Isha Yoga Center and back are given in the table below. 
                    The exact timings may vary by ten to fifteen minutes, but even if you miss one bus, the next bus will generally be ready to depart within the next hour.{'\n'}
              </Text>
              <Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline'}}>Contact{'\n'}</Text>
                Isha Yoga Center{'\n'}
                Velliangiri Foothills{'\n'}
                Ishana Vihar Post,{'\n'}
                Coimbatore – 641 114, India{'\n'}
                Tel.: +91 83000 83111{'\n'}
                Email: info@ishayoga.org{'\n'}
              </Text>
            </View>
            <Text></Text>
        </View>
        </ScrollView>
    )
}

function audio({navigation}){
  return(
    <View style={{flex: 1}}>
        <View style={{backgroundColor: 'mediumslateblue', marginTop: Constants.statusBarHeight}}>
            <Text style={{color: 'white', paddingLeft: 15, fontSize: 20, textAlign: "center"}}>Audio Clips</Text>
              <Icon onPress={() => navigation.openDrawer()} name="md-menu" size={30} style={{paddingLeft: 10, color: 'white', alignSelf: 'center', marginTop: 0}} />
        </View>
        <WebView
          source={{
          uri: 'https://kailash108.github.io/audioapp'
        }}
      />
    </View>
  )
}

export { threeTemple, two, three, audio }