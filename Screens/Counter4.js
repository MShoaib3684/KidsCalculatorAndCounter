import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter4 = ({ navigation }) => {


  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/applesqq.mp3'),

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
      url: require('../music/apples4.mp3'),

    });


    // Start playing it
    await TrackPlayer.play();
  };

  start()


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/66.jpg')}

        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ backgroundColor: '', marginLeft: 400 }}></View>
          <IconFontAwesome5 name="home" size={60} color="black" fontWeight="bold" />
        </TouchableOpacity> */}


        <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '40%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 20, }}>
          <TouchableOpacity onPress={() => start1()}>

            <Image style={{ width: 155, height: 155 }}
              source={require('../p/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>

            <Image style={{ width: 155, height: 155 }}
              source={require('../p/apple.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 5 }}></View>

        <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '40%', width: '90%', justifyContent: 'center', borderRadius: 40, }}>

          <TouchableOpacity onPress={() => start1()}>
            <Image style={{ width: 155, height: 155 }}
              source={require('../p/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>

            <Image style={{ width: 155, height: 155 }}
              source={require('../p/apple.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '', marginTop: 40, marginLeft: -200, borderRadius: 30 }}>
          <TouchableOpacity onPress={() => start1()}>
            <Text style={style.bigBlue}> 4 </Text>
          </TouchableOpacity>
        </View>


        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ backgroundColor: '', height: '250%', width: '100%', alignItems: 'center', justifyContent: 'center', marginRight: -250, marginTop: -200, borderRadius: 30 }}>
            <TouchableOpacity onPress={() => start1()}>
              <IconFontAwesome5 name="play-circle" size={120} color="purple" />
            </TouchableOpacity>

          </View>
        </View>



        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
          <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
             <View style={{ marginTop: -50, marginLeft: -50 }}>
             <TouchableOpacity onPress={() => navigation.navigate('Counter3')}>
                  <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </TouchableOpacity>
                </View>
              
            </View>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
               <View style={{ marginTop: -50, marginRight: -50 }}>
               <TouchableOpacity onPress={() => navigation.navigate('Counter5')}>
                    <IconEntypo name="arrow-bold-right" size={100} color="black" />
                    </TouchableOpacity>
                  </View>
                
              </View>
            </View>
          </View>
        </View>


      </ImageBackground>


    </View>

  );

};
export default Counter4;

const style = StyleSheet.create({

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 140,
  },

});

