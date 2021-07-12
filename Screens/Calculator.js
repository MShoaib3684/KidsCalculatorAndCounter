import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Calculator = ({ navigation }) => {
  return (


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../pics/s10.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <View style={{ flex: 1, backgroundColor: '', width: 400, borderRadius: 40, alignItems: 'center', }}>
            <View style={{ backgroundColor: 'yellow', width: '70%', height: "50%", alignItems: 'center', marginTop: 10, marginBottom: 10, borderRadius: 40 }}>
              <TouchableOpacity onPress={() => navigation.navigate('SimpleCalculator')}>
                <IconMaterialCommunityIcons name="calculator-variant" size={250} color="purple" style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', alignSelf: 'center' }}> Simple Calculator</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: '', width: 300, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: 'green', width: '90%', height: "100%", alignItems: 'center', justifyContent: 'center', marginLeft: 20, marginBottom: 20, marginTop: 15, borderRadius: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate('DarkmodeCalculator')}>
                  <IconFontAwesome name="calculator" size={200} color="#800" style={{ alignSelf: 'center' }} />
                  <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}> Switchable Calculator</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>

        </View>
      </ImageBackground>

    </View>
  );

};
export default Calculator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

  },

});