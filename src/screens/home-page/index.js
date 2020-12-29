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


// 
import * as LocalAuthentication from 'expo-local-authentication';


// 


class HomePage extends Component {

  constructor(props) {
 
    super(props);
    this.state = {
      errorMessage: undefined,
      biometric: undefined,
      popupShowed: false, 
      fingerprint:false,
      modalVisible: true,
      authenticated: false,
      failedCount: 0,
      enterCode: ["","","",""], 
      code:["","","",""],
      numbers: [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9},
        {id:0}
      ]
    };
  }

  handleFingerprintShowed = ()=> {
    this.setState((prev)=>({...prev, fingerprint: true}))
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible, failedCount: 0 });
}

closeModal() {
    this.setModalVisible(false);
}
onPressNumber = async (val)=> {
  const {enterCode:code} = this.state
  for (let i=0;i<code.length;i++) {
    if(code[i]=="") {
      code[i]=val
      break
    }
  }

  this.setState((prev)=> ({
    ...prev,
    enterCode:code
  }))

}
onDeleteNumber = async ()=> {
  const {enterCode:code} = this.state
  for (let i=code.length-1;i>=0;i--) {
    if(code[i]!=="") {
      code[i]=""
      break
    }
  }

  this.setState((prev)=> ({
    ...prev,
    enterCode:code
  }))

}

scanFingerPrint = async () => {
    console.log("scan fingerprint");
    this.setState({ failedCount: 0 });
    try {
        console.log("before results");
        const results = await LocalAuthentication.authenticateAsync();
        console.log("after results");
        if (results.success) {
            // this.props.onSuccess(true);
            this.setState((prev)=> {
              return {
                ...prev,
                modalVisible: false,
                authenticated: true,
                failedCount: 0,
            }
            });
        } else {
            this.setState({ failedCount: this.state.failedCount + 1 });
        }
    } catch (e) {
        console.log(e);
    }
};


  render() {
    const { errorMessage, biometric, popupShowed } = this.state;
  // 
    return (
 
      <View style={cls.container}>
          <ImageBackground  blurRadius={0}  source={require("../../../assets/back.jpg")} style={{position:"absolute", width:width, height:height}}/>
 
    
        <Text style={cls.title}>
            Добро пожаловать
        </Text>
  
     

      
      
      </View>
    );
  }
}
const cls = StyleSheet.create({

  littleBtnContainer: {
    flexDirection:"row", 
    justifyContent:"center",
    alignItems:"center",

  },
  title: {
      fontSize:45, 
      color:"white"
  }

})
export default HomePage;
