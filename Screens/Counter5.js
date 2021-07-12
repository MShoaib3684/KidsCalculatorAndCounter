import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter5 = ({ navigation }) => {


  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/donutsq.mp3'),

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
      url: require('../music/donuts.mp3'),

    });


    // Start playing it
    await TrackPlayer.play();
  };
  start()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/14.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {/* 
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ backgroundColor: '', marginLeft: 400 }}></View>
          <IconFontAwesome5 name="home" size={60} color="black" fontWeight="bold" />
        </TouchableOpacity> */}

        <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 10, }}>
          <TouchableOpacity onPress={() => start1()}>
            <Image style={{ width: 130, height: 130 }}
              source={require('../p/donut.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>
            <Image style={{ width: 130, height: 130 }}
              source={require('../p/donut.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>
            <Image style={{ width: 130, height: 130 }}
              source={require('../p/donut.png')}
            />
          </TouchableOpacity>
        </View>


        <View style={{ flex: 4, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, }}>
          <TouchableOpacity onPress={() => start1()}>
            <Image style={{ width: 160, height: 160 }}
              source={require('../p/donut.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>

            <Image style={{ width: 160, height: 160 }}
              source={require('../p/donut.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '', marginTop: -100, marginLeft: -200, borderRadius: 30 }}>
          <TouchableOpacity onPress={() => start1()}>
            <Text style={style.bigBlue}> 5 </Text>
          </TouchableOpacity>
        </View>


        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ backgroundColor: '', height: '250%', width: '100%', alignItems: 'center', justifyContent: 'center', marginRight: -220, marginTop: -240, borderRadius: 30 }}>
            <TouchableOpacity onPress={() => start1()}>
              <IconFontAwesome5 name="play-circle" size={140} color="purple" />
              <View style={{ flex: 1, }}></View>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
          <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ marginTop: -70, marginLeft: -50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Counter4')}>
                  <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </TouchableOpacity>
                </View>
              
            </View>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ marginTop: -70, marginRight: -50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Counter6')}>
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
export default Counter5;

const style = StyleSheet.create({

  bigBlue: {
    color: 'red',
    fontWeight: 'bold',

    fontSize: 150,
  },

});

{/* 
          <View style={[{ width: "100%", height: "6%", margin: 50, backgroundColor: "red" }]}>
            <Button
              onPress={() =>
                navigation.navigate('Counter4')
              }
              size="10%"
              title="NEXT"
              color="#FF3D00"
            />
          </View> */}
