import React from "react";
import { start, ImageBackground,Image, StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useState } from "react";
import TrackPlayer from 'react-native-track-player';



const Counter = ({ navigation }) => {
  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/appleq.mp3'),

    });

    // Start playing it
    await TrackPlayer.play();
  };

    const start1 = async () => {
      // Set up the player
      await TrackPlayer.setupPlayer();
  
      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../music/1.mp3'),
  
      });
  

    // Start playing it
    await TrackPlayer.play();
  };
  start()

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <TouchableOpacity onPress={() => start1()}>
<ImageBackground source={require('../pics/13.jpg') }
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

      
          
          
          {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ backgroundColor: '',marginLeft:400  }}></View>
          <IconFontAwesome5 name="home" size={60} color="purple" fontWeight="bold"/>
            </TouchableOpacity>
             */}
  


        <View style={{ flex: 1, backgroundColor: '', width: '100%', height: '80%', marginTop: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          {app ?
            <TouchableOpacity onPress={() => setApp(true)}>
              <TouchableOpacity onPress={() => start1()}>
              <Image style={{width:230,height:230}}
        source={require('../p/apple.png')}
      />
              </TouchableOpacity>
            </TouchableOpacity>
            :
            AnimationEffect = ""}


          <Text style={style.bigBlue}>1</Text>


          <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ backgroundColor: '', width: '50%', height: '120%', alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 30 }}>

                <IconFontAwesome5 name="play-circle" size={120} color="green" />

            </View>
          </View>



          <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <View style={{ marginTop: -40,marginRight:50 }}>
                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Counter2')}>
                    <View style={{ marginTop: -40 ,marginRight:-50}}>
                      <IconEntypo name="arrow-bold-right" size={100} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>

      </ImageBackground>
              </TouchableOpacity>


    </View>

  );

};
export default Counter;

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 120,
  },

});

