import React from "react";
import { ImageBackground, Image, TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter3 = ({ navigation }) => {


  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/pineapplesq.mp3'),

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
      url: require('../music/pineapples.mp3'),

    });


  // Start playing it
  await TrackPlayer.play();
};


  start()
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/14.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>


        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ backgroundColor: '', marginLeft: 400 }}></View>
          <IconFontAwesome5 name="home" size={60} color="darkred" fontWeight="bold" />
        </TouchableOpacity> */}



        <View style={{ height: '60%', width: '30%', flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '', borderRadius: 40, marginTop: 50 }}>
        <TouchableOpacity onPress={() => start1()}>
          <Image style={{ width: 190, height: 190 }}
            source={require('../p/pineapple.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start1()}>
          <Image style={{ width: 190, height: 190 }}
            source={require('../p/pineapple.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1,marginTop:20 }}>
</View>  

        <View style={{ height: '80%', width: '100%', flex: 2, flexDirection: 'column', backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => start1()}>
          <Image style={{ width: 190, height: 190 }}
            source={require('../p/pineapple.png')}
          />
          </TouchableOpacity>
        
        </View>
        <View style={{ backgroundColor: '', marginTop: 10,marginLeft:-200, borderRadius: 30 }}>
        <TouchableOpacity onPress={() => start1()}>
        <Text style={style.bigBlue}> 3 </Text>
</TouchableOpacity>
</View>


        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ backgroundColor: '',  height: '250%', width: '100%', alignItems: 'center', justifyContent: 'center', marginRight: -250, marginTop: -200, borderRadius: 30  }}>
            <TouchableOpacity onPress={() => start1()}>
              <IconFontAwesome5 name="play-circle" size={120} color="purple" />
            </TouchableOpacity>

          </View>
        </View>



        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
          <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
              <View style={{marginTop: -50 ,marginRight:50}}>
              <TouchableOpacity onPress={() => navigation.navigate('Counter2')}>
                  <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </TouchableOpacity>
                </View>
              
            </View>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                  <View style={{ marginTop: -50 ,marginRight:-50}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Counter4')}>
                    <IconEntypo name="arrow-bold-right" size={100} color="black" />
                    </TouchableOpacity>
                  </View>
                
              </View>
            </View>
          </View>
        </View>
        {/* <Button
              onPress={() =>
                navigation.navigate('Counter4')
              }
              size="10%"
              title="NEXT"
              color="#FF3D00"
            />
           */}





      </ImageBackground>
    </View>

  );

};
export default Counter3;

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 130,
    marginTop: '-5%'
  },

});

