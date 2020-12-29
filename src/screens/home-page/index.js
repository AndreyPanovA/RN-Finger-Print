import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  AppState, 
  Modal, 
  Button, 
  StyleSheet,
  Dimensions,
  ImageBackground,
  Alert
} from 'react-native';

const { width,height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';

// 
import * as LocalAuthentication from 'expo-local-authentication';


// 


class HomePage extends Component {

  constructor(props) {
 
    super(props);
    this.state = {

    }
  }




  render() {
    const { errorMessage, biometric, popupShowed } = this.state;
    return (
 
      <View style={cls.container}>
        <ImageBackground  blurRadius={0}  source={require("../../../assets/back.jpg")} style={{position:"absolute", width:width, height:height}}/>
        <Animatable.Text style={cls.title} animation="slideInDown">
            Добро пожаловать
        </Animatable.Text>
      </View>
    );
  }
}
const cls = StyleSheet.create({

    container: {
        height:"100%", 
        paddingTop:50
    },
  title: {
      fontSize:35, 
      color:"white", 
      textAlign:"center"
  }

})
export default HomePage;
