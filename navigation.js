import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton, headerShown } from '@react-navigation/stack';
import App from './App';
import Counter from './Screens/Counter';
import Calculator from './Screens/Calculator';
import Counter2 from './Screens/Counter2';
import Counter3 from './Screens/Counter3';
import Counter4 from './Screens/Counter4';
import Counter5 from './Screens/Counter5';
import Paractice from './Screens/Paractice';
import Paractice2 from './Screens/Paractise2';
import Paractice3 from './Screens/Paractice3';
import Paractice4 from './Screens/Paratice4';
import Myhome from './Screens/Paractice5';
import Quiz from './Screens/Quiz';
import Quiz2 from './Screens/Quiz2';
import RightAnswer from './Screens/RightAnswer';
import WrongAnswer from './Screens/WrongAnswer';
import SimpleCalculator from './Screens/SimpleCalculator';
import DarkmodeCalculator from './Screens/DarkmodeCalculator';
import music from './Screens/Paractice6';
import add2 from './Screens/addition2';
import Counter6 from './Screens/Counter6';
import Counter7 from './Screens/Counter7';
import Counter8 from './Screens/Counter8';
import Counter10 from './Screens/Counter10';
import Counter9 from './Screens/Counter9';
import add3 from './Screens/addition3';
import sub1 from './Screens/substraction1';
import sub2 from './Screens/substraction2';
import add1 from './Screens/addition1';
import sub3 from './Screens/substraction3';
import Quiz3 from './Screens/Quiz3';



const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={App}
          options={{ title: 'KIDS CALCULATOR AND COUNTER', headerTintColor: 'darkblue', headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{ title: 'Learn Counting' }}

        />

        <Stack.Screen
          name="Counter2"
          component={Counter2}
          options={{ title: 'Continue Learning' }}
        />

        <Stack.Screen
          name="Counter3"
          component={Counter3}
          options={{ title: 'Continue Learning' }}
        />

        <Stack.Screen
          name="Counter4"
          component={Counter4}
          options={{ title: 'Continue Learning' }}
        />

        <Stack.Screen
          name="Counter5"
          component={Counter5}
          options={{ title: 'Continue Learning' }}
        />

        <Stack.Screen
          name="Counter6"
          component={Counter6}
          options={{ title: 'Continue Learning' }}
        />

        <Stack.Screen
          name="Counter7"
          component={Counter7}
          options={{ title: 'Continue Learning' }}
        />


        <Stack.Screen
          name="Counter8"
          component={Counter8}
          options={{ title: 'Continue Learning' }}
        />


        <Stack.Screen
          name="Counter9"
          component={Counter9}
          options={{ title: 'Continue Learning' }}
        />


        <Stack.Screen
          name="Counter10"
          component={Counter10}
          options={{ title: 'Continue Learning' }}
        />


        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{ title: 'Calculator' }}
        />


        <Stack.Screen
          name="SimpleCalculator"
          component={SimpleCalculator}
          options={{ title: 'SimpleCalculator' }}
        />

        <Stack.Screen
          name="DarkmodeCalculator"
          component={DarkmodeCalculator}
          options={{ title: 'DarkmodeCalculator' }}
        />

        <Stack.Screen
          name="add1"
          component={add1}
          options={{ title: 'LEARN ADDITION CONTINUES (+)', headerTintColor: 'blue' }}
        />


        <Stack.Screen
          name="add2"
          component={add2}
          options={{ title: 'LEARN ADDITION CONTINUES (+)', headerTintColor: 'blue' }}
        />


        <Stack.Screen
          name="add3"
          component={add3}
          options={{ title: 'LEARN ADDITION CONTINUES (+)', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="sub1"
          component={sub1}
          options={{ title: 'SUBSTRACTION CONTINUES (-)', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="sub2"
          component={sub2}
          options={{ title: 'SUBSTRACTION CONTINUES (-)', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="sub3"
          component={sub3}
          options={{ title: 'SUBSTRACTION CONTINUES (-)', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="Paractice"
          component={Paractice}
          options={{ title: 'PARACTICE ', headerTintColor: 'purple', backgroundColor: "yellow" }}
        />

        <Stack.Screen
          name="Paractice2"
          component={Paractice2}
          options={{ title: 'PARACTICE CONTINUE', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="Paractice3"
          component={Paractice3}
          options={{ title: 'PARACTICE CONTINUE', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="Paractice4"
          component={Paractice4}
          options={{ title: 'LEARN DIVISION (/)', headerTintColor: 'blue' }}
        />




        <Stack.Screen
          name="Paractice5"
          component={Myhome}
          options={{ title: 'KidsCalculatorAndCounter', headerTintColor: 'blue' }}
        />

        <Stack.Screen
          name="Paractice6"
          component={music}
          options={{ title: 'KidsCalculatorAndCounter', headerTintColor: 'blue' }}
        />


        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ title: 'Quiz', headerShown: 'false', headerTitleAlign: 'center' }}

        />

        <Stack.Screen
          name="Quiz2"
          component={Quiz2}
          options={{ title: 'Quiz # 2', headerShown: 'false', headerTitleAlign: 'center' }}

        />

        <Stack.Screen
          name="Quiz3"
          component={Quiz3}
          options={{ title: 'Quiz # 3', headerShown: 'false', headerTitleAlign: 'center' }}

        />



        <Stack.Screen
          name="RightAnswer"
          component={RightAnswer}
          options={{ title: 'RESULT', headerShown: 'false', headerTitleAlign: 'center' }}

        />

        <Stack.Screen
          name="WrongAnswer"
          component={WrongAnswer}
          options={{ title: 'RESULT', headerShown: 'false', headerTitleAlign: 'center' }}

        />

        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
