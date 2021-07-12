import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useState } from "react";
import TrackPlayer from 'react-native-track-player';



const Paractice2 = ({ navigation }) => {
  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/orngq.mp3'),

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
      url: require('../music/right2.mp3'),

    });


    // Start playing it
    await TrackPlayer.play();
  };

  const start2 = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/wrong.mp3'),

    });


    // Start playing it
    await TrackPlayer.play();
  };
  start()

  return (


    <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => start()}>
        <ImageBackground source={require('../pics/14.jpg')}
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: "90%", height: "85%", backgroundColor: '', borderRadius: 40 }}>

            <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
              <Image style={{ width: 95, height: 95 }}
                source={require('../p/orange.png')}
              />
              <Image style={{ width: 95, height: 95 }}
                source={require('../p/orange.png')}
              />

              <View style={{ backgroundColor: 'yellow', width: '15%', height: '40%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 20, marginRight: 20 }}>

                <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}> + </Text>

              </View>
              <Image style={{ width: 95, height: 95 }}
                source={require('../p/orange.png')}
              />

            </View>
            <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

              <View style={{ backgroundColor: 'yellow', width: '20%', height: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>

                <Text style={{ fontSize: 70, fontWeight: 'bold', color: 'black' }}> = </Text>

              </View>
            </View>


            <View style={{ flex: 0.9, backgroundColor: '', flexDirection: 'row', }}>

              <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => start1()}>
                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />


                </TouchableOpacity>
              </View>
              {/* 
              <View style={{ flex: 0.1, backgroundColor: 'blue', flexDirection: 'column', }}>
              </View> */}
              <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => start1()}>

                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />

                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />
                </TouchableOpacity>
              </View>



              <View style={{ backgroundColor: '', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginRight: 50, marginLeft: 50 }}>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => start2()}>

                    <Image style={{ width: 60, height: 60 }}
                      source={require('../p/orange.png')}
                    />

                    <Image style={{ width: 60, height: 60 }}
                      source={require('../p/orange.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>


              <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => start2()}>
                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />

                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />
                </TouchableOpacity>
              </View>
              {/* 
<View style={{ flex: 0.1, backgroundColor: 'blue', flexDirection: 'column', }}>
</View> */}
              <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => start2()}>

                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />

                  <Image style={{ width: 60, height: 60 }}
                    source={require('../p/orange.png')}
                  />
                </TouchableOpacity>
              </View>


            </View>


          </View>


          <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Paractice')}>
                  <View style={{ marginTop: -20, marginRight: 50 }}>
                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Paractice3')}>
                    <View style={{ marginTop: -20, marginRight: -50 }}>
                      <IconEntypo name="arrow-bold-right" size={100} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>



        </ImageBackground>
      </TouchableOpacity>

    </View>
  );

};
export default Paractice2;

const style = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },

});