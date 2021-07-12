import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const WrongAnswer = ({ navigation }) => {
    return (


        <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../pics/13.jpg')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: "90%", height: "95%", backgroundColor: '', borderRadius: 40 }}>

                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{ backgroundColor: '', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 30, marginLeft: 20, marginRight: 20 }}>
                            <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}>SAD! YOUR ANSWER IS WRONG</Text>
                        </View>


                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '', marginLeft: 20 }}>
                            <View style={{ flex: 2, backgroundColor: '', marginRight: 20, marginTop: 10, justifyContent: 'center' }}>
                                <IconMaterialCommunityIcons name="fruit-watermelon" size={160} color="darkgreen" />

                                <View style={{ flex: 1, backgroundColor: '', marginLeft: 180, marginTop: -200, alignItems: 'center', justifyContent: 'center' }}>
                                    <IconMaterialCommunityIcons name="airballoon" size={160} color="purple" />

                                </View>
                            </View>
                        </View>
                    </View>

              
            <View style={{ backgroundColor: 'black', width: '80%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 35 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>TRY AGAIN</Text>
              </TouchableOpacity>
            </View>


                    </View>


   
            </ImageBackground>

        </View>
    );

};
export default WrongAnswer;

const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 50,
    },

});