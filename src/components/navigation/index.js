import React from 'react';
// import cls from "./style"
import {Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CarInfoPage from "../../pages/car-info-page"
import {AuthPage, HomePage} from "../../screens"
import { connect } from 'react-redux';




const RootStack = createStackNavigator();

// HistoryItem



const HomePages = ()=><Text>Coool</Text>
const AppNavigator = (props) => {
  const {isAuth=true, auth} = props
  console.log(props.isAuth, "isAuth")

  return (
    <RootStack.Navigator initialRouteName="AuthPage">
        <>
        {/* {
        !auth ? ( 
          <>
         <RootStack.Screen
            name="Авторизация"
            component={Auth}
            options={{ headerShown: false }}
              /> 
              <RootStack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: true, title:"Регистрация" }}
                /></>)
          
          :(   
        <RootStack.Screen
          name="MainStackNavigator"
          component={MainStackNavigator}
          options={{ headerShown: false }}
                />)}   */}
              
       { 

        !isAuth ?
       <RootStack.Screen
            name="AuthPage"
            component={AuthPage}
            options={{ headerShown: false }}/>
    :
        <RootStack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}/>
    
        }
        </>
    </RootStack.Navigator>
  );
};



export default connect((state)=> ({
  isAuth: state.auth.isAuth
}))(AppNavigator);