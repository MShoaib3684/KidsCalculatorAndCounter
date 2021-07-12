 import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const RightAnswer = ({ navigation }) => {
    return (


        <View style={{ flex: 1, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../pics/66.jpg')}
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                
                <View style={{ backgroundColor: 'black', width: '30%', height: '9%', alignItems: 'center', justifyContent: 'center', marginLeft: -280,marginTop:20, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> Home </Text>
                    </TouchableOpacity>
                </View>



                <View style={{ width: "90%", height: "95%", backgroundColor: '', borderRadius: 40 }}>

                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{ backgroundColor: 'yellow', width: '70%', height: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: 30, marginLeft: 20, marginRight: 20 }}>
                            <Text style={{ fontSize: 65, fontWeight: 'bold', color: 'black' }}> RESULT </Text>
                        </View>


                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '', marginLeft: 20 }}>
                            <View style={{ flex: 2, backgroundColor: '', marginRight: 20, marginTop: 25, justifyContent: 'center' }}>
                                <IconMaterialCommunityIcons name="fruit-watermelon" size={160} color="darkgreen" />

                                <View style={{ flex: 1, backgroundColor: '', marginLeft: 180, marginTop: -155, alignItems: 'center', justifyContent: 'center' }}>
                                    <IconMaterialCommunityIcons name="airballoon" size={160} color="purple" />

                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '', width: '105%', height: '70%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, }}>
                            <Text style={{ fontSize: 46, fontWeight: 'bold', color: 'blue' }}> HURRAH!   YOUR ANSWER IS RIGHT </Text>

                        </View>


                    </View>


                </View>

            </ImageBackground>

        </View>
    );

};
export default RightAnswer;

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