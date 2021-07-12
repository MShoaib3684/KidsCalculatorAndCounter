
import React from "react";
import { ImageBackground, TouchableOpacity, Image, StyleSheet, Text, View, Button } from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";
// import sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';

const music = ({ navigation }) => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/one.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',

    });

    // Start playing it
    await TrackPlayer.play();
  };
  start()
  return (


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/s5.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: "90%", height: "65%", backgroundColor: '', borderRadius: 40 }}>

          <View style={{ flex: 6, backgroundColor: '', flexDirection: 'row', borderRadius: 40 }}>

            {/* 1,2 */}





            <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => start()}>
                <Image style={{ width: 180, height: 180 }}
                  source={require('../icons/1menu.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <Button
          color="purple"
          title="Play Music"
          onPress={() => start()
          }
        />

      </ImageBackground>

    </View>
  );

};

export default music;
