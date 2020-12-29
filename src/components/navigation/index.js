import React from 'react';
// import cls from "./style"
import {Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CarInfoPage from "../../pages/car-info-page"
import {AuthPage, HomePage,Settings} from "../../screens"
import { connect } from 'react-redux';
import {car,settings} from "../../icons"




const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator()


const TabNavigator =()=> {
  return (
    <Tab.Navigator    initialRouteName="HomePage"
      tabBarOptions={{
        style:{
          backgroundColor: '#333',
          height:78
        }
      }} >
         <Tab.Screen name="HomePage" component={HomePage} options={{   tabBarIcon: ()=> <View style={{color:"white"}}>{car}</View> }} />
        <Tab.Screen name="Settings" component={Settings}  options={{tabBarIcon: ()=> <View style={{color:"white"}}>{settings}</View>}}/>
   </Tab.Navigator>
  )
}  

const HomePages = ()=><Text>Coool</Text>
const AppNavigator = (props) => {
  const {isAuth=true, auth} = props
  return (
    <RootStack.Navigator initialRouteName="AuthPage">
        <>
      
       { 

        !isAuth ?
       <RootStack.Screen
            name="AuthPage"
            component={AuthPage}
            options={{ headerShown: false }}/>
    :
        <RootStack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}/>
    
        }
        </>
    </RootStack.Navigator>
  );
};



export default connect((state)=> ({
  isAuth: state.auth.isAuth
}))(AppNavigator);