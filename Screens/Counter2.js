import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter2 = ({ navigation }) => {


  const [app, setApp] = useState(true);
  var s = 3;
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/orangesq.mp3'),

    });
    // Start playing it
    await TrackPlayer.play();
  };
  const musicp = async () => {
    if (s == 1) {
      // Set up the player
      await TrackPlayer.setupPlayer();
      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../music/oranges.mp3'),

      });
      // Start playing it
      await TrackPlayer.play();

    } else if (s == 2) {

      // Set up the player
      await TrackPlayer.setupPlayer();
      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../music/oranges.mp3'),

      });
      // Start playing it
      await TrackPlayer.play();

    } else { s = 3 }
    s--;

  }
  const start1 = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/oranges.mp3'),

    });
    // Start playing it
    await TrackPlayer.play();
  };

  start()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/2.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>


        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ backgroundColor: '', marginLeft: 400 }}></View>
          <IconFontAwesome5 name="home" size={60} color="purple" fontWeight="bold" />
        </TouchableOpacity> */}



        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', marginTop: 90, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
          {app ?

            <TouchableOpacity onPress={() => musicp()}>
              <Image style={{ width: 200, height: 200 }}
                source={require('../p/orange.png')}
              />
            </TouchableOpacity>

            :
            AnimationEffect = "false"}

          <TouchableOpacity onPress={() => musicp()}>
            <Image style={{ width: 200, height: 200 }}
              source={require('../p/orange.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '', alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 30 }}>
        <TouchableOpacity onPress={() => start1()}>
        <Text style={style.bigBlue}> 2 </Text>
        </TouchableOpacity>
</View>

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ backgroundColor: '', width: '50%', height: '120%', alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 30 }}>
            <TouchableOpacity onPress={() => start1()}>
              <IconFontAwesome5 name="play-circle" size={120} color="purple" />
            </TouchableOpacity>

          </View>
        </View>



        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
          <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
                <View style={{ marginTop: -10, marginRight:50}}>
                  <IconEntypo name="arrow-bold-left" size={100} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Counter3')}>
                  <View style={{ marginTop: -10 ,marginRight:-50}}>
                    <IconEntypo name="arrow-bold-right" size={100} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>


        {/* <Button
             onPress={() => 
      navigation.navigate('Counter3')
    }
            size="10%"
            title="NEXT"
            color="#FF3D00"
          /> */}


      </ImageBackground>


    </View>

  );

};
export default Counter2;

const style = StyleSheet.create({

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 120,
  },

});

