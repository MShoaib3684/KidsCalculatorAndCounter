import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import TrackPlayer from 'react-native-track-player';

const sub2 = ({ navigation }) => {
    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: require('../music/applq.mp3'),
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
          url: require('../music/appl.mp3'),
    
        });
    
    
      // Start playing it
      await TrackPlayer.play();
    };
    start()


    return (


        <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity onPress={() => start1()}>
            <ImageBackground source={require('../pics/66.jpg')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: "100%", height: "100%", backgroundColor: '', borderRadius: 40 }}>


                    {/* <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}> */}
                    {/* 1 */}
                    {/* <IconAntDesign name="apple1" size={95} color="red" />
            <Text style={style.text}>+</Text>
            <IconAntDesign name="apple1" size={95} color="red" />
            <Text style={style.text}>=</Text>
            <Text style={style.text}>2</Text>
          </View> */}

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center',justifyContent: 'center' ,marginTop:40}}>
                        {/* 2 */}
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/apple.png')}
                        />

                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/apple.png')}
                        />

                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/applec.png')}
                        />

                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/applec.png')}
                        />


                    </View>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <Text style={style.text}>-</Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/applec.png')}
                        />

                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/applec.png')}
                        />

                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '' ,marginTop:-20}}>
                        <Text style={style.text}>=</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '',marginTop:-20 }}>

                        <Text style={style.text}>2</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '' }}>
                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('sub1')}>
                                    <View style={{marginTop:-30}}>
                                        <IconEntypo name="arrow-bold-left" size={100} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'flex-end' }}>
                                <View style={{marginTop:-30}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('sub3')}>
                                        <IconEntypo name="arrow-bold-right" size={100} color="black" />
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
export default sub2;

const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 90,
    },


    // <Text  style={style.bigBlue}> 4 </Text>
});