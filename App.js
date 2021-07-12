import React from "react";
import { ImageBackground, TouchableOpacity, Image, StyleSheet, Text, View, Button } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


const App = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./pics/s10.jpg')}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: "95%", height: "95%", backgroundColor: '', borderRadius: 40 }}>

          <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', borderRadius: 40 }}>

            {/* 1,2 */}
            <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center', marginStart: -20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
                <Image style={{ width: 170, height: 170 }}
                  source={require('./icons/1m.png')}
                />
                <View style={{ backgroundColor: 'purple', alignItems: 'center', marginLeft: 25, marginTop: 0, borderRadius: 15 }}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> Counting </Text>

                </View>
              </TouchableOpacity>
              {/* <Button
      title="Counter"
      onPress={() => 
      navigation.navigate('Counter')
      }
    /> */}


            </View>
            <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center', marginRight: -20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('add1')}>
                <Image style={{ width: 170, height: 170 }}
                  source={require('./icons/2m.png')}
                />
                <View style={{ backgroundColor: 'yellow', alignItems: 'center', marginLeft: 15, marginTop: 0, borderRadius: 15 }}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}> Calculation </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row' }}>
            {/* 3,4 */}

            <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Paractice')}>
                <Image style={{ width: 180, height: 180 }}
                  source={require('./icons/3m.png')}
                />
                <View style={{ backgroundColor: 'purple', alignItems: 'center', marginLeft: 15, marginTop: 0, borderRadius: 15 }}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}> Paractise </Text>
                </View>
              </TouchableOpacity>


              {/* <Button
                color="#FF3D00"
                title="Paractice"
                onPress={() =>
                  navigation.navigate('Paractice')
                }
              /> */}

            </View>
            <View style={{ flex: 1, backgroundColor: '', borderRadius: 40, alignItems: 'center', justifyContent: 'center', marginRight: -20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Image style={{ width: 170, height: 170 }}
                  source={require('./icons/4m.png')}
                />
                <View style={{ backgroundColor: 'yellow', alignItems: 'center', marginLeft: 40, marginRight: 30, marginTop: -10, borderRadius: 15 }}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}> Quiz </Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ImageBackground>

    </View>
  );

};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

  },

});