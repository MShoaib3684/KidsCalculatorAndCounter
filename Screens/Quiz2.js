import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useState } from "react";
import TrackPlayer from 'react-native-track-player';



const Quiz2 = ({ navigation }) => {
  const [app, setApp] = useState(true)
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../music/quizq2.mp3'),

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


    <View style={{ flex: 1,width: '100%', height: '100%', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
         

      <TouchableOpacity onPress={() => start()}>
        <ImageBackground source={require('../pics/66.jpg')}
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.1, }}>
</View>
          <View style={{ width: "100%", height: "80%", backgroundColor: '', borderRadius: 10, alignItems: 'center', }}>
            <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '', alignItems: 'center', }}>
              {/* 2 */}
              <Image style={{ width: 155, height: 155 }}
                source={require('../p/cat.png')}
              />
              <Image style={{ width: 155, height: 155 }}
                source={require('../p/cat.png')}
              />
            </View>
            <View style={{ flex: 0.3, }}>
</View>

            <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center', borderRadius: 30, }}>
              <View style={{ backgroundColor: 'yellow', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'black' }}> + </Text>
              </View>
            </View>
            <View style={{ flex: 0.3, }}>
</View>


            <View style={{ flex: 1.5, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 155, height: 155 }}
                source={require('../p/cat.png')}
              />
              <Image style={{ width: 155, height: 155 }}
                source={require('../p/cat.png')}
              />
            </View>

            {/* <View style={{ flex: 1, backgroundColor: 'green',flexDirection:'row', justifyContent: 'center' }}>
              <View style={{flex:0.8, backgroundColor: 'yellow',width:'50%',height:'70%', alignItems: 'center', borderRadius: 30 }}>

                <Text style={{ fontSize: 70, fontWeight: 'bold', color: 'black',justifyContent:'center'}}> = </Text>

              </View>
            </View> */}
            <View style={{ flex: 0.3, }}>
</View>

            <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', borderRadius: 20, }}>
                <TouchableOpacity onPress={() => navigation.navigate('WrongAnswer')}>
                  <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'black' }}> = </Text>
                </TouchableOpacity>
              </View>
            </View>
           
            <View style={{ flex: 0.3 }}>
</View>

            <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 20, }}>
              <TouchableOpacity onPress={() => start2()}>
                  <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}> 2 </Text>
                </TouchableOpacity>
              </View>
      
              <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 65 }}>
              <TouchableOpacity onPress={() => start2()}>
                  <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}> 6 </Text>
                </TouchableOpacity>
              </View>


              <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 65 }}>
              <TouchableOpacity onPress={() => start1()}>
                  <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}> 4 </Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>


          <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
            <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                  <View style={{ marginTop: 0, marginRight: 50 }}>
                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Quiz3')}>
                    <View style={{ marginTop: 0, marginRight: -50 }}>
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
export default Quiz2;

const style = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 70,
  },

});