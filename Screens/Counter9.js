import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import TrackPlayer from 'react-native-track-player';
import { useState } from "react";

const Counter9 = ({ navigation }) => {


    const [app, setApp] = useState(true)
    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: require('../music/calculatorsq.mp3'),

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
            url: require('../music/calculators.mp3'),

        });


        // Start playing it
        await TrackPlayer.play();
    };
    start()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../pics/13.jpg')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={{ backgroundColor: '', marginLeft: 400 }}></View>
                    <IconFontAwesome5 name="home" size={60} color="black" fontWeight="bold" />
                </TouchableOpacity> */}


                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 30, marginLeft: 110 }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'center', borderRadius: 40, marginTop: 20, }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '100%', justifyContent: 'center', borderRadius: 40, marginRight: 110,marginTop:20 }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => start1()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../p/calculator.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '', height: '250%', width: '90%', alignItems: 'center', justifyContent: 'center', marginRight: -220, marginTop: 100, borderRadius: 30 }}>
                        <TouchableOpacity onPress={() => start1()}>
                            <IconFontAwesome5 name="play-circle" size={120} color="green" />
                            <View style={{ flex: 1, }}></View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 3, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => start1()}>
                        <Text style={style.bigBlue}> 9 </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: '', justifyContent: 'center' }}>
                    <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ marginTop: -50, marginLeft: -50 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Counter8')}>
                                    <IconEntypo name="arrow-bold-left" size={100} color="black" />
                                </TouchableOpacity>
                                </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '', width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                                    <View style={{ marginTop: -50, marginRight: -50 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Counter10')}>
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
export default Counter9;

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
