import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
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
            url: require('../music/5.mp3'),

        });

        // Start playing it
        await TrackPlayer.play();
    };
    start()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../pics/14.jpg')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ backgroundColor: 'black', width: '30%', height: '7%', alignItems: 'center', justifyContent: 'center', marginLeft: -300, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> Home </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: -30, marginLeft: 200 }}>
                    <IconAntDesign name="star" size={100} color="green" />
                    <IconAntDesign name="star" size={100} color="red" />

                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginTop: 20, }}>
                    <IconAntDesign name="star" size={100} color="orange" />
                    <IconAntDesign name="star" size={100} color="brown" />
                </View>
                <View style={{ flex: 2, backgroundColor: '', flexDirection: 'row', height: '20%', width: '90%', justifyContent: 'center', borderRadius: 40, marginRight: 200 }}>
                    <IconAntDesign name="star" size={100} color="blue" />
                    <IconAntDesign name="star" size={100} color="purple" />

                </View>
                <View style={{ flex: 2, marginTop: 5 }}>
                    <Text style={style.bigBlue}> 6 Stars</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ backgroundColor: 'black', width: '40%', height: '120%', alignItems: 'center', justifyContent: 'center', marginRight: 0, borderRadius: 30 }}>
                        <TouchableOpacity onPress={() => start()}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'yellow' }}> PLAY </Text>
                        </TouchableOpacity>

                    </View>
                </View>



                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', borderRadius: 40, marginTop: 20 }}>

                    <View style={{ flex: 1, flexDirection: 'row', height: '50%', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ backgroundColor: 'yellow', width: '30%', height: '170%', alignItems: 'center', marginRight: 50, borderRadius: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Counter5')}>
                                <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'black' }}> BACK </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ backgroundColor: 'yellow', width: '30%', height: '170%', alignItems: 'center', marginLeft: 50, borderRadius: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Counter7')}>
                                <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'black' }}> NEXT </Text>
                            </TouchableOpacity>

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

        fontSize: 60,
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
