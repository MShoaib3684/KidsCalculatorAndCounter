import React from "react";
import { ImageBackground,TouchableOpacity, Image,StyleSheet, Text, View,Button } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';



const Myhome = ({navigation}) => {
  return(
    

  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
 <ImageBackground source={require('../pics/s5.jpg')}
 style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                   <View style={{width:"90%",height:"65%",backgroundColor:'',borderRadius:40}}>
         
                    <View style={{flex:6,backgroundColor:'',flexDirection:'row',borderRadius:40}}>
                    
          {/* 1,2 */}
      
                      <View style={{flex:1,backgroundColor:'',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity onPress={()=>navigation.navigate('Paractice6')}>
                     <Image style={{width:180,height:180}}
        source={require('../icons/1menu.png')}
      />
  </TouchableOpacity>
    

                     </View>
                      <View style={{flex:1,backgroundColor:'',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity onPress={()=>navigation.navigate('Paractice2')}>
                      <Image style={{width:180,height:180}}
        source={require('../icons/2menu.png')}
      />
      </TouchableOpacity>
                     </View>    
                    
                    </View>
                    <View style={{flex:1,backgroundColor:'',flexDirection:'row',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                    </View>
                    <View style={{flex:6,backgroundColor:'',flexDirection:'row'}}>
          {/* 3,4 */}

                    <View style={{flex:1,backgroundColor:'',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Paractice2')}>
                    <Image style={{width:180,height:180}}
        source={require('../icons/3menu.png')}
      />
      </TouchableOpacity>
                    </View>
                      <View style={{flex:1,backgroundColor:'',borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity onPress={()=>navigation.navigate('Paractice2')}>
                     
                      <Image style={{width:180,height:180}}
        source={require('../icons/4menu.png')}
      />
      </TouchableOpacity>
                    </View> 
</View>
                   </View>
                   </ImageBackground>
 
  </View>
  );
 
  };
export default Myhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

  },

});

  
  