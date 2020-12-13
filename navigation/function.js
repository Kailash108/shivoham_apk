import React from "react";
import {View, Text, Image, Button, StyleSheet, ScrollView, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    text: {
      color: 'midnightblue',
      fontWeight: 'bold',
      fontSize: 15,
      letterSpacing: 3,
      textTransform: 'capitalize',
      textAlign: 'left',
    },
    padding: {
      marginTop: 20,
    },
    text1: {
      color: 'white',
      textAlign: 'center',
    },
    container: {
      flex:1,
      backgroundColor: 'slateblue',
    },
    con: {
      flex: 1,
      backgroundColor: 'black'
    },
    ste: {
      fontSize: 15
    },
    images: {
      height: 200,
      width: 300,
      borderWidth: 2,
      borderColor: 'gold',
      alignSelf: 'center'
  },
})  

  function Home(){
    return (
      <ScrollView style={styles.container}>
        <LinearGradient colors={['indigo', 'slateblue']}>

          <View>
            <Animatable.Text delay={1500} animation="fadeInDown" style={{color: 'white', textAlign: 'center'}}>Version: [1.6]</Animatable.Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Animatable.Image delay={1000} animation="bounceIn" style={{height: 300, width: 250, marginTop: 10, borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://dz0qr9vdflcrm.cloudfront.net/wp-content/uploads/2017/08/lord-shiva.jpg'}} />
          
            <View>
              <Animatable.Text animation="swing" style={{color: 'gold', fontSize: 30}}>Mahadev</Animatable.Text>
            </View>
          
            <Animatable.View animation="bounceInDown" style={styles.padding}>
              <Text style={styles.text1}>An App which covers the information of Lord Shiva.</Text>
              <Text style={styles.text1}>Go through the app and get some information.{'\n\n'}Requires Internet Connection To Load Some Of The In-App Elements.</Text>
            </Animatable.View>

            <View>
              <Animatable.Text delay={500} animation="flipInY" style={{fontSize: 15, fontWeight: 'bold', backgroundColor: 'khaki', color: 'black', alignSelf: 'center', borderRadius: 18}}>
              {'\n'}Note: {'\n'}The content which is in this app is taken from the various resources on the Internet.
              i.e., Wikipedia, Google, YouTube, euttaranchal, IshaFoundation, Tripoto, Postoast.
              {'\n'}The motivation for creating this app is to bring most of the information of LORD SHIVA under this app.{'\n\n'}
              </Animatable.Text>
            </View>

        </View>
      </LinearGradient>
    </ScrollView>  
    )
  }
  
  function Contact(){
    return (
      <ScrollView>
        <LinearGradient colors={['indigo', 'slateblue', 'indigo']}>

        <View>
          
          <Animatable.Text animation="slideInLeft" style={{color: 'gold', lineHeight: 30, letterSpacing: 3, textTransform: 'capitalize', fontWeight: 'bold', flex: 1}}>
              Shiva is a supreme <Text style={{textTransform: 'uppercase'}}>GOD</Text>, a lord of divine energy, supreme <Text style={{textTransform: "uppercase"}}>destroyer of evil</Text>.
              Lord Shiva is called in different names like <Text style={{textTransform: 'uppercase'}}>Parameshwara, Maheshwara, Shankara, BholeNath, Rudra</Text>. When we heard the word 'Lord Shiva', the thing
              we recalls is, his mantra, <Text style={{textTransform: 'uppercase'}}>OM NAMAH SHIVAYA.</Text>
          </Animatable.Text>
          
          <View>
              <Text style={{textDecorationLine: 'underline', color: 'white', fontSize: 20, alignSelf: 'center'}}>
                {'>>'} The Things Around Shiva {'<<'}
              </Text>
          </View>

          <View>
            <Animatable.Text delay={0} animation="fadeInDown" style={{color: 'orange', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>1. Moon: </Text>Wisdom is beyond the mind, but it needs to be expressed with a thing of mind and this is symbolized by the creacent moon
            </Animatable.Text>

            <Animatable.Text delay={300} animation="fadeInDown" style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>2. Snake: </Text>The snake symbolizes alertness. To express this state of consiousness, a snake is shown around Lord Shiva's neck.
            </Animatable.Text>

            <Animatable.Text delay={600} animation="fadeInDown" style={{color: 'springgreen', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>3. Trident: </Text>Trishul signifies that Shiva is above all 3states - waking, dreaming and sleeping, yet he upholds all 3states
            </Animatable.Text>

            <Animatable.Text delay={900} animation="fadeInDown" style={{color: 'gold', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>4. Third Eye: </Text>Alertness, Knowledge and Wisdom are all related  to the third eye
            </Animatable.Text>

            <Animatable.Text delay={1200} animation="fadeInDown" style={{color: 'yellow', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>5. Drum: </Text>symbolizes the universe which is always expanding and collapsing. From an expansion it collapses and then it re-expands, this is
               the process of creation.
            </Animatable.Text>

            <Animatable.Text delay={1500} animation="fadeInDown" style={{color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 20}}>
               <Text style={{fontWeight: 'bold'}}>6. Bull: </Text>is a symbol of dharma(righteousness). Lord Shiva riding on the bull means that when you are truthful, the infinte
               consciousness is with you{'\n'}
            </Animatable.Text>
          </View>

          <View>
              <Text style={{textDecorationLine: 'underline', color: 'gold', fontSize: 20, alignSelf: 'center'}}>
                {'>>'}How He Came Into Existence{'<<'}
              </Text>
          </View>

          <View>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white', textTransform: 'capitalize'}}>
                {'\n'}
                There are many stories on the topic, How Lord Shiva Came Into Existence, Let's see the undisscused here.{'\n\n'}
                As many people know, that Lord Shiva is a Svayambhu, i.e., he is not born from a human body. He is also called as Adi-Dev which means he is the oldest god of the Hindu Mythology.{'\n\n'}
                He was there when there was nothing and he will be there even after everything is destroyed.{'\n'}
              </Text>
              <View>
               <Image source={{uri: 'https://english.cdn.zeenews.com/sites/default/files/2017/11/06/636471-shivathink7.jpg'}} style={styles.images}/>
              </View>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'gold', textTransform: 'capitalize'}}>
                {'\n'}
                 When we say the word Shiva, it means literally, 'that which is not.'{'\n\n'}
                 Shivoham means I am Lord Shiva. You can even reverse the word and spell it, the word sounds like 'aham shiva', which means I am lord shiva.{'\n\n'}
                 There's a story in Shiva Purana. While Lord Vishnu and Lord Brahma debatting between themselves on the superiority. Then in-front of them, a huge pillar as it does not have any end.
                 Both Brahma and Vishnu went to search the ends of the pillar, but they failed. Then, Lord Vishnu realised that it is the Maya of the god and accepted his failure. Whereas, Brahma has lied that he had found the end.
                 Then, Lord Shiva came and explained brahma's mistakes to him.
              </Text>
          </View>


        </View>
        </LinearGradient>
      </ScrollView>
    )
  }

function Home1(){
    return (
      
      <ScrollView style={styles.container}>
        <LinearGradient colors={['orange', 'white', 'springgreen']}>
          <View style={{alignItems: 'center'}}>
          
          <Animatable.View animation="fadeInUp" style={{flex: 1}}>
            <Text style={styles.text}>
              Jyothirlinga is a sacred place/temple where Lord Shiva is worshipped. Jyothi means 'Light' Linga means 'A Form Of Lord Shiva', if combined, The light of Lord Shiva.
              If we understand it much deeper, we can understand that 'If we are at utmost devotion at Jyothirlinga(s), Lord Shiva's divine light eneters our body and removes all our pains and challenges.{'\n\n'}
              Let's discuss more...{'\n'}
              There are 12(Dwadhasa) JyothirLingas all over India. In Orginal there were 64 JyothirLingas but, only 12 of them considered as holy and very sacred.
              {'\n'}
            </Text>
          </Animatable.View>
          
          <View style={{flex: 2}}>
            <Animatable.Text animation="fadeInDown" style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                1. Somnath(Somnath)---Gujarat{'\n\n'}2.Srisailam(Mallikarjuna)---Andhra Pradesh{'\n\n'}
                3. Ujjain(Mahakaleswar)---Madhya Pradesh{'\n\n'}4.Khandwa(Omkareswar)---Madhya Pradesh{'\n\n'}
                5. RudhraPrayag(Kedarnath)---Uttarkhand{'\n\n'}6.Triambakeshwar(Nashik)---Maharashtra{'\n\n'}
                7. Bhimashankar(Bhimashankara)---Maharashtra{'\n\n'}8.Varanasi(Vishwanath)---Uttar Pradesh{'\n\n'}
                9. Deoghar(Baidyanath)---Jharkhand{'\n\n'}10.Dwaraka(Nageshwara)---Gujarat{'\n\n'}
                11. Rameswaram(Ramanathaswamy)---Tamil Nadu{'\n\n'}12.Aurangabad(Grishneswar)---Maharashtra{'\n'}
            </Animatable.Text>
          </View>  

          <Animatable.View animation="shake" style={{alignSelf:'flex-start'}}>
            <Text  style={{fontSize: 15}}>
            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>{'\n'}There's a Slokha on Dwadhasa Jyothirlingas in Sanskrit.{'\n\n'}</Text>
            सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम्।{'\n'}
            उज्जयिन्यां महाकालमोङ्कारममलेश्वरम्॥{'\n\n'}
            पूर्वोत्तरे प्रज्वालिकानिधाने वैद्यनाथम् च डाकिन्यां भीमशङ्करम्।{'\n'}
            सेतुबन्धे तु रामेशं नागेशं दारुकावने॥{'\n\n'}
            वाराणस्यां तु विश्वेशं त्र्यम्बकं गौतमीतटे।{'\n'}
            हिमालये तु केदारं घुश्मेशं च शिवालये॥{'\n\n'}
            एतानि ज्योतिर्लिङ्गानि सायं प्रातः पठेन्नरः।{'\n'}
            सप्तजन्मकृतं पापं स्मरणेन विनश्यति॥{'\n\n'}
            एतेषां दर्शनादेव पातकं नैव तिष्ठति।{'\n'}
            कर्मक्षयो भवेत्तस्य यस्य तुष्टो महेश्वराः॥:{'\n\n'}	
            </Text>
            <Text style={styles.ste}>
            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>In English.{'\n\n'}</Text>
              Saurāṣṭre Somanāthaṃ ca Śrīśaile Mallikārjunam |{'\n'}
              Ujjayinyāṃ Mahākālam Omkāram Mamaleśhwaram ||{'\n\n'}
              Purvottare Prajwalikanidhane Vaidyanāthaṃ cha Ḍākinyāṃ Bhīmaśhaṅkaram |{'\n'}
              Setubandhe tu Rāmeśaṃ Nāgeśhaṃ Dārukāvane ||{'\n\n'}
              Vārāṇasyāṃ tu Viśveśaṃ Tryambakaṃ Gautamītaṭe |{'\n'}
              Himālaye tu Kedāraṃ Ghuśmeśaṃ ca Śivālaye ||{'\n\n'}
              etāni jyotirliṅgāni sāyaṃ prātaḥ paṭhennaraḥ |{'\n'} 
              saptajanmakṛtaṃ pāpaṃ smaraṇena vinaśyati ||{'\n\n'}
              eteṣāṃ darśanādeva pātakaṃ naiva tiṣṭhati |{'\n'}
              karmakṣayo bhavettasya yasya tuṣṭo maheśvarāḥ ||{'\n\n'}
            </Text>
            <Text>
            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>Meaning Of The Slokha{'\n\n'}</Text>
            Somanath in Saurashtra and Sri Mallikarjuna in Shri-Shailam(Srishailam);{'\n'}
            Mahakaal in Ujjain, Mamleshwar in Omkareshwar;{'\n\n'}
            Vaidyanath in Purvottar Chitabhoomi,(Deoghar) Jharkhand[7] and Bhimashankaram in Dakinya;{'\n'}
            Ramesham (Rameshwaram) in Sethubandh, Nagesham in Daruka-Vana;{'\n\n'}
            Vishwesham (Vishvanath) in Varanasi, Tryambakam at bank of the river Gautami (Godavari);{'\n'}
            Kedar (Kedarnath) in the Himalayas and Ghrishnesh (Ghrishneshwar) in Shivalaya (Verul);{'\n\n'}
            One who recites these Jyotirlingas every evening and morning{'\n'}
            is relieved of all sins committed in past seven lives.{'\n\n'}
            One who visits these, gets all his wishes fulfilled,{'\n'}
            and one's karma gets eliminated as Maheshwara gets satisfied to the worship.{'\n\n'}
            </Text>
          </Animatable.View>
          <View style={{textAlign: 'center'}}>
            <Text>*****</Text>
          </View>      
        </View>

        </LinearGradient>
      </ScrollView>  
    )
  }

  function somnath(){
    return (
        <ScrollView>
          <LinearGradient colors = {['indigo', 'slateblue']}>
            <Animatable.View animation="flash" style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://somnath.org/Areas/Xpanel/Content/img/01c0ef4b-8.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="1. Somnath Temple Website" onPress={() => Linking.openURL('https://somnath.org')} />
                  </TouchableOpacity>
                </View>
            </Animatable.View>
            <Text>{'\n\n'}</Text>
            <Animatable.View animation="fadeInUp" style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://www.organiser.org/Encyc/2019/9/12/2_03_28_09_Srisailam-Temple_1_H@@IGHT_359_W@@IDTH_640.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="2. Srisailam Temple Website" onPress={() => Linking.openURL('http://www.srisailamonline.com/')} />
                  </TouchableOpacity>
                </View>
            </Animatable.View>
            <Text>{'\n\n'}</Text>
            <Animatable.View animation="fadeInDown" style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center',  borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://5.imimg.com/data5/DL/LB/TA/ANDROID-26492615/product-jpeg-500x500.jpg'}} />
                <View style={{width: 200}}>
                    <TouchableOpacity>
                      <Button title="3. Ujjain Temple Website" onPress={() => Linking.openURL('http://dic.mp.nic.in/ujjain/mahakal/default.aspx')} />
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center',  borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/omkareshwar-cityscape-dusk.jpg'}} />
                <View style={{width: 200}}>
                    <TouchableOpacity>
                      <Button title="4. Omkareshwar Temple Website" onPress={() => Linking.openURL('https://shriomkareshwar.org/')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 400, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://i.pinimg.com/originals/12/b3/f5/12b3f51d60f63bb566d5b2a5e9526f64.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="5. Kedarnath Temple Website" onPress={() => Linking.openURL('https://badrinath-kedarnath.gov.in/')} />
                  </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_KMOyTeFyRhQ58QMIL-RzI3ear50tdNEHOg&usqp=CAU'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="6. Triambakeshwar Temple Website" onPress={() => Linking.openURL('https://nashik.gov.in/tourist-place/trimbakeshwar-temple/')} />
                  </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://ffo.gov.in/uploads/location_photos/Bhimashankar-Jyotirlinga3-1.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="7. BhimaShankar Temple Website" onPress={() => Linking.openURL('https://bhimashankar.in/')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center',borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/1a/91/76.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="8. Varanasi Temple Website" onPress={() => Linking.openURL('https://shrikashivishwanath.org/')} />
                  </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://cdn.s3waas.gov.in/s3559cb990c9dffd8675f6bc2186971dc2/uploads/bfi_thumb/2018031279-olw8xqqrzx20xf8qzhr0fpnv86m57ygkh9ljis7qmi.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="9. Baidhyanath Temple Website" onPress={() => Linking.openURL('https://deoghar.nic.in/tourist-place/baidyanath-temple/')} />
                  </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 300, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://www.trawell.in/admin/images/upload/900551700Dwarka_Nageshwar_Temple_main.jpg'}} />
                <View style={{width: 200}}>
                    <TouchableOpacity>  
                      <Button title="10. Nageshwara Temple Website" onPress={() => Linking.openURL('https://www.gujarattourism.com/destination/details/10/312')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 250, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Rameshwaram-temple.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="11. Ramanathaswamy Temple Website" onPress={() => Linking.openURL('https://rameshwaramtourism.co.in/sri-ramanathaswamy-temple-rameshwaram')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}> 
                <Image style={{height: 200, width: 350, alignSelf: 'center', borderColor: 'gold', borderWidth: 1}} source={{uri: 'https://i.pinimg.com/originals/47/d0/60/47d06077fbca9ee5e284045bf924f066.jpg'}} />
                <View style={{width: 200}}>
                  <TouchableOpacity>
                    <Button title="12. Grishneswar Temple Website" onPress={() => Linking.openURL('http://jyotirlingatemples.com/article/id/1065/temple/53/grishneshwar-temple-contact')} />
                  </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        </ScrollView>  
      )
  }

  function nandi(){
    return(
      <ScrollView>
        <View>
        <LinearGradient colors={['indigo', 'slateblue']}>
          <Animatable.View delay={250} animation="flash" style={{alignItems: 'center'}}>
            <Image style={{height: 300, width: 250, marginTop: 30, borderWidth: 2, borderColor: 'gold', alignSelf: 'center'}} source={{uri: 'https://i.pinimg.com/474x/94/83/b4/9483b4a9b2acdc87943818cda1966586.jpg'}} />
            <Text style={{fontSize: 30, color: 'gold'}}>Nandi</Text>
          </Animatable.View>
          
          <Animatable.View delay={125} animation="rubberBand" style={{alignItems: 'center'}}>
            <Text style={{letterSpacing: 1,textTransform: 'capitalize', fontSize: 20, color: 'white'}}>{'\n'}Nandi is the sacred bull, vahana of Lord Shiva. Nandi is the son of Shailada. Shailada has a boon of having 'A son having blessing of Lord Shiva'.{'\n\n'}Nandi is a devotee of Lord Shiva. He did a Japa and Lord shiva got praised and he has given him a boon
            of being his gatekeeper.{'\n\n'} Later, Lord Shiva and Parvathi taught Nandi, the divine-knowledge in the form of eight ways known as 'Nandhinatha Sampradaya'.{'\n\n'}
            <Text style={{fontWeight: '200', color: 'khaki'}}>
              Those Eight Are:
              1. Sanaka{'\n'} 
              2. Sanatana{'\n'} 
              3. Sanandana{'\n'} 
              4. SanatKumara{'\n'} 
              5. Tirumular{'\n'} 
              6. Vyagrapada{'\n'} 
              7. Patanjali{'\n'} 
              8. Sivayoga Muni{'\n'} 
              </Text>
            </Text>
            <Image source={{uri: 'https://cdn.britannica.com/26/142626-050-01A227C8/Statue-Nandi-bull-Chamundi-Hill-Karnataka-India.jpg'}} style={{height: 200, width: 300, marginTop: 30, borderWidth: 2, borderColor: 'gold', alignSelf: 'center'}} />
          </Animatable.View>

          <View>
            <Text>{'\n'}</Text>
          </View>

        <Animatable.View animation="pulse">
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 25, textDecorationLine: 'underline'}}>{'>>'}Nandi Flag{'<<'}</Text>
          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/NandiFlag.svg/330px-NandiFlag.svg.png'}} style={{height: 200, width: 300, marginTop: 30, borderWidth: 2, borderColor: 'gold', alignSelf: 'center'}} />
          <Text style={{fontSize: 20, color: 'white'}}>{'\n'}It is also known as Vrishaba Flag, A flag which is recognized as 'THE FLAG OF SAIVISM' {'\n\n'}This Flag Has Been Designed By Ravindhra Sastry of Madurai, Tamil Nadu, in the guidance of Danapala S, a Sri Lankan.</Text>
        </Animatable.View>
        

        </LinearGradient>
        </View>
      </ScrollView>
    )
  }
const styles1 = StyleSheet.create({
  images: {
    height: 200, 
    width: 300,
    alignSelf: 'center',
    borderColor: 'gold',
    borderWidth: 2
  }
})
  function fourTemple(){
    return (
      <ScrollView>
        
        <LinearGradient colors={['purple', 'indigo', 'slateblue']}>
        
        <View>
          <View>
            <Animatable.Text animation="fadeInDown" style={{fontSize: 20, color: 'springgreen'}}>
                There are four popular temples namely 
                <Text style={{color: 'gold'}}> ''Yamunothri, Gangothri, Kedarnath and Badrinath''</Text> which covers scenic view of Himalayas. These temples draws the more number of devotees every year.
                All 4 deities are been worshipped differently. Let's know more about these places...{'\n\n'}
                <Text style={{color: 'orange', textDecorationLine: 'underline', fontWeight: 'bold'}}>1. Yamunothri: {'\n'}</Text>
                <Text style={{color: 'white'}}>Yamunothri is elevated about 3291mts above the sea level and River Yamuna is the second sacred river in India. The picturesque view of Himalayas and <Text style={{color: 'red'}}>Surya Kund and Gouri Kund</Text> containing hot and cold water providdes a peaceful environment around the temple.
                  Taking bath in River Yamuna <Text style={{color: 'gold'}}>purifies our body, ideas and removes sins and protects us from evil thoughts and dangers.</Text>
                </Text>{'\n'}
            </Animatable.Text>
          </View>
        
          <View>
            <Animatable.Image animation="fadeInLeft" style={styles1.images} source={{uri: 'https://harshtravelblogger.files.wordpress.com/2019/09/yamunotri-temple.jpg?w=790'}}/>
          </View>
        
          <Animatable.View animation="fadeInRight">
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{fontSize: 30}}>{'->'}History:{'\n'}</Text>
                  <Text style={{color: 'white'}}>1. Temple of Yamunothri has been built in 1839 by King of Tehri(Naresh Sudarshan Shah).{'\n\n'}2. Due to an eathquake, it has been reconstructed in 19th century by Maharani of Jaipur(Gularia Devi){'\n\n'}
                    3. The temple of Yamunothri is made using granite stones and the surroundings are very pleasant with cool breezes of Himalayas.{'\n\n'}
                  </Text>
                </Text>
          </Animatable.View>
        
          <View>
            <Animatable.Image animation="fadeInLeft" style={styles1.images} source={{uri: 'https://i1.wp.com/news.jugaadin.com/wp-content/uploads/2019/07/yamunotri-tourism-uttrakhand-char-dham.jpg?resize=749%2C372'}}/>
          </View>
          <Text>{'\n'}</Text>


          <Animatable.View animation="fadeInDown">
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{color: 'orange', textDecorationLine: 'underline', fontWeight: 'bold'}}>2. Gangothri: {'\n'}</Text>
                <Text style={{color: 'white'}}>Gangothri is a small village surrounded around the one of the most famous temples in CharDhams(i.e., Gangothri Temple)<Text style={{color: 'springgreen'}}> River Ganga is worshipped as Goddess in India</Text> It is also known as highest and important temple.
                There's a 19km trek from Gangothri to the Gaumukh(A Sacred River) which sets in Gangothri Glacier<Text style={{color: 'gold'}}> According to puranas, It is said that LordShiva has come down from heaven to release 'River Ganga' from his hair locks.</Text>
                </Text>{'\n'}
            </Text>
          </Animatable.View>

          <Animatable.View animation="fadeInLeft">
            <Image style={styles1.images} source={{uri: 'https://www.tourmyindia.com/chardham/images/gangotri-dham1.jpg'}}/>
          </Animatable.View>

          <Animatable.View animation="fadeInRight">
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{fontSize: 30}}>{'->'}History:{'\n'}</Text>
                  <Text style={{color: 'white'}}>
                    1. The person whom we remember while coming to the story of River Ganga is 'King Bagirath'. He is the great-grand-father of King Sagara. He performed the 'Ashwamedha Yaaga', while doing the Yagna, his hores got mssing.{'\n\n'}
                    2. In search of his horse, he and his 60,000 sons came across a place where 'Sage Kapila' was meditating and his horse was tied next to him.{'\n\n'}
                    3. They disturbed him when he was meditating. The sage got frustrated and has given a curse to turn all of his 60,000 sons into ashes{'\n\n'}
                    4. As a great-grand-son, King Bhagiratha did a serious Japa for 1,000 years to give 'Moksha/Salvation' for his ancestors.{'\n\n'}
                    5. Lord Shiva has given him a boon that he would bear Ganga's force and locked Ganga with his hair locks.{'\n\n'}
                    6. From the, Goddess Ganga has started flowing and all of the ancestors who were burned into ashes has attained Salvation.{'\n\n'}  
                  </Text>
                </Text>
          </Animatable.View>
          <Text></Text>

          <View>
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{color: 'orange', textDecorationLine: 'underline', fontWeight: 'bold'}}>3. Kedarnath: {'\n'}</Text>
                <Text style={{color: 'white'}}>Kedarnath is a small village surrounded by scenic view of Himalayas and Kedarnath Temple.<Text style={{color: 'springgreen'}}> It is situated at a height of 3584meters from the sea level.</Text> The nearest river to Kedaranth is River Mandakini.
                <Text style={{color: 'gold'}}> Kedarnath is situated on the snow-capped Garhwal Himalayan ranges.</Text>
                </Text>{'\n'}
            </Text>
          </View>

          <View>
            <Image style={styles1.images} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kedarnath_Temple.jpg/287px-Kedarnath_Temple.jpg'}}/>
          </View>

          <View>
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{fontSize: 30}}>{'->'}History:{'\n'}</Text>
                  <Text style={{color: 'white'}}>
                    1. Looks less with the history part of this temple.{'\n\n'}
                    2. It is said that, Pandavas from Mahabharata has built the Temple of Kedarnath to please Lord Shiva with their devotion and Japa.{'\n\n'}
                    3. The great Hindu Philospher, Aadi Shankaracharya has revived the temple with his shishyas in the 8th century.{'\n\n'} 
                  </Text>
                </Text>
          </View>

          <View>
            <Image style={{height: 300, width: 250, alignSelf: 'center', borderColor: 'gold', borderWidth: 3}} source={{uri: 'https://i.pinimg.com/originals/c0/17/33/c01733507bc7c3f1138e72862b473540.jpg'}}/>
          </View>
          <Text></Text>

          <View>
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{color: 'orange', textDecorationLine: 'underline', fontWeight: 'bold'}}>4. Badrinath: {'\n'}</Text>
                <Text style={{color: 'white'}}>Badrinath is a small town which is the last stop in Chardham Yathra.<Text style={{color: 'springgreen'}}> It is elevated at a height of 3,300meters from the sea level.</Text> Badrinath is situated on the banks of Alakananda River.
                <Text style={{color: 'gold'}}>The temple is bulit using traditional Garhwali wooden architecture</Text>
                </Text>{'\n'}
            </Text>
          </View>

          <View>
            <Image style={styles1.images} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Badrinath_Temple%2C_Uttarakhand_%28Photo-_Vishwanath_Negi%29.jpg'}}/>
          </View>

          <View>
            <Text style={{fontSize: 20, color: 'springgreen'}}>
                <Text style={{fontSize: 30}}>{'->'}History:{'\n'}</Text>
                  <Text style={{color: 'white'}}>
                    1. Badrinath was re-designed as a prominent piligrim site as 'Adi Shankaracharya'.{'\n\n'}
                    2. During WorldWar-I, Badrinath had only 20 huts where temple staff lived.{'\n\n'}
                    3. Lord Vishnu has manifested as a child in search of a place to meditate and showed up some interest at site which is near the river Alakananda.{'\n\n'} 
                    4. He started crying and Goddess Parvathi has listened and came to the child and asks him 'what do you want?'{'\n\n'}
                    5. The child says that he likes the place for meditating and Goddess Parvati grants his wish and lastly the place has become 'BadriVishal'.{'\n\n'}
                  </Text>
                </Text>
          </View>

          <View>
            <Image style={styles1.images} source={{uri: 'https://i.ytimg.com/vi/zXKLelu9VMU/hqdefault.jpg'}}/>
          </View>
          <Text></Text>


        </View>
        </LinearGradient>
      </ScrollView>
    )
  }
  export { Home1, somnath, Contact, Home, nandi, fourTemple }