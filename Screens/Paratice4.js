import React from "react";
import { ImageBackground, StyleSheet, Text, View,Button, TouchableOpacity } from "react-native";
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Paractice4 = ({navigation}) => {
    return(
    

        <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
       <ImageBackground source={require('../pics/s5.jpg')}
       style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                         <View style={{width:"90%",height:"80%",backgroundColor:'',borderRadius:40}}>
               
                          <View style={{flex:1,backgroundColor:'',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          
                {/* 1 */}
                <IconMaterialCommunityIcons name="fruit-watermelon" size={120} color="#007944" /> 
                <Text style={style.text}>/</Text>
                <IconMaterialCommunityIcons name="fruit-watermelon" size={120}  color="#007944" />
                <Text style={style.text}>=</Text>
                <Text style={style.text}>1</Text>                             
                          </View>
                          
                          <View style={{flex:1,backgroundColor:'',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                {/* 2 */}
                <IconMaterialCommunityIcons name="fruit-watermelon" size={105} color="#007944" /> 
                
                <IconMaterialCommunityIcons name="fruit-watermelon" size={105}  color="#007944" /> 
                <Text style={style.text}>/</Text>
                <IconMaterialCommunityIcons name="fruit-watermelon" size={105}  color="#007944" />
                <Text style={style.text}>=</Text>
                <Text style={style.text}>2</Text>                             
               

      </View>
     
                {/* 3 */}
      <View style={{flexDirection:'row',justifyContent:'center',}}>
     
    <View style={{backgroundColor:'purple',width:'30%',alignItems:'center',borderRadius:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Paractice2')}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}> BACK </Text>
    </TouchableOpacity>
    
      </View>
      <View style={{backgroundColor:'purple',width:'30%',alignItems:'center',marginLeft:50,borderRadius:10}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Paractice5')}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}> NEXT </Text>
    </TouchableOpacity>
    
      </View>
      </View>
                         </View>
                         </ImageBackground>
       
        </View>
        );
       
        };
  export default Paractice4;
  
const style = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    text: {
        color: '#004857',
        fontWeight: 'bold',
        fontSize: 50,
      },
      
    
    });