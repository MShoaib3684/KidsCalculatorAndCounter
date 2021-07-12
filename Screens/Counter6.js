import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, TouchableOpacity, Button } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter6 = ({ navigation }) => {


    const [app, setApp] = useState(true)
    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: require('../music/starsq.mp3'),

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
            url: require('../music/stars.mp3'),

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
                    <IconFontAwesome5 name="home" size={60} color="black" fontWeight="bold" />
                </TouchableOpacity> */}

                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 10, marginLeft: 200 }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <IconAntDesign name="star" size={100} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <IconAntDesign name="star" size={100} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 20, }}>
                    <TouchableOpacity onPress={() => start1()}>

                        <IconAntDesign name="star" size={100} color="orange" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>

                        <IconAntDesign name="star" size={100} color="brown" />
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginRight: 200 }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <IconAntDesign name="star" size={100} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>

                        <IconAntDesign name="star" size={100} color="purple" />
                    </TouchableOpacity>
                </View>



                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ backgroundColor: '', height: '250%', width: '90%', alignItems: 'center', justifyContent: 'center', marginRight: -200, borderRadius: 30 }}>
                        <TouchableOpacity onPress={() => start1()}>
                            <IconFontAwesome5 name="play-circle" size={120} color="green" />
                            <View style={{ flex: 1, }}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: '', height: '200%', marginTop: 0 }}>
                    <Text style={style.bigBlue}> 6 </Text>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
                    <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                            <View style={{ marginTop: -50, marginLeft: -50 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Counter5')}>
                                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ marginTop: -50, marginRight: -50 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Counter7')}>
                                        <IconEntypo name="arrow-bold-right" size={100} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                {/* <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={style.bigBlue}> 5 </Text>
        </View> */}

            </ImageBackground>


        </View>

    );

};
export default Counter6;

const style = StyleSheet.create({

    bigBlue: {
        color: '#27026e',
        fontWeight: 'bold',

        fontSize: 120,
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
