import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import TrackPlayer from 'react-native-track-player';

const add1 = ({ navigation }) => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/ad1.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',

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
      url: require('../music/22.mp3'),

    });


  // Start playing it
  await TrackPlayer.play();
};
  start()


  return (
    <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => start1()}>
      <ImageBackground source={require('../pics/2.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: "100%", height: "100%", backgroundColor: '' }}>


          {/* <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}> */}
          {/* 1 */}
          {/* <IconAntDesign name="apple1" size={95} color="red" />
          <Text style={style.text}>+</Text>
          <IconAntDesign name="apple1" size={95} color="red" />
          <Text style={style.text}>=</Text>
          <Text style={style.text}>2</Text>
        </View> */}

          <View style={{ flex: 3, width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center', }}>
            {/* 2 */}
            <Image style={{ width: 100, height: 100 }}
            source={require('../p/apple.png')}
          />
        

          </View>
          <View style={{ backgroundColor: '', alignItems: 'center', marginTop: -24 }}>

            <Text style={style.text}>+</Text>
          </View>

          <View style={{ flex: 3, backgroundColor: '', flexDirection: 'row', marginTop: -20, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 100, height: 100 }}
            source={require('../p/apple.png')}
          />

          </View>
          <View style={{ flex: 2, backgroundColor: '', alignItems: 'center' ,marginTop:-30}}>
            <Text style={style.text}>=</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: '', alignItems: 'center' }}>
            <Text style={style.text}>2</Text>
          </View>



          {/* <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ backgroundColor: '', width: '50%', height: '120%', alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 30 }}>
              <TouchableOpacity onPress={() => start1()}>
                <IconFontAwesome5 name="play-circle" size={150} color="green" />
              </TouchableOpacity>

            </View>
          </View> */}



          <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <View style={{ marginTop: -50, marginRight: 50 }}>
                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity onPress={() => navigation.navigate('add2')}>
                    <View style={{ marginTop: -50, marginRight: -50 }}>
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
export default add1;

const style = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 80,
  },


  // <Text  style={style.bigBlue}> 4 </Text>
});