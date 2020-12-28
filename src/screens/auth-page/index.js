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
  ImageBackground
} from 'react-native';

const { width,height } = Dimensions.get('window');


// 
import * as LocalAuthentication from 'expo-local-authentication';


// 


class AuthPage extends Component {

  constructor(props) {
 
    super(props);
    this.state = {
      errorMessage: undefined,
      biometric: undefined,
      popupShowed: false, 
      fingerprint:false,
      modalVisible: true,
      authenticated: false,
      failedCount: 0
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
          <ImageBackground  blurRadius={30}  source={require("../../../assets/back.jpg")} style={{position:"absolute", width:width, height:height}}/>
        <Text style={cls.heading}>
          React Native Fingerprint Scanner
        </Text>
        <Text style={cls.subheading}>
         
        </Text>
        <View style={cls.btnsContainer}>
          {Array(9).fill("").map((el,idx)=> {
            return (
              <TouchableOpacity style={cls.numberBtn}>
                <Text>{idx +1}</Text>
            </TouchableOpacity>
            )
          })}
          <View style={{flexDirection:"row", alignItems:"center"}}>
          <TouchableOpacity style={{...cls.numberBtn, backgroundColor:"transparent"}}>
                <Text>Back</Text>
            </TouchableOpacity>
          <TouchableOpacity style={cls.numberBtn}>
                <Text>{0}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{...cls.numberBtn, backgroundColor:"transparent"}}
            onPress={this.scanFingerPrint}
            disabled={!!errorMessage}
          >
            <Image source={require('../../assets/finger_print.png')}  style={{width:35, height:35}}/>
          </TouchableOpacity>
          </View>
          {<Text>Super {JSON.stringify(this.state.authenticated)}</Text>}
           
        </View>

      
      
      </View>
    );
  }
}
const cls = StyleSheet.create({



  btnsContainer: {
    width:314, 
    height:370,
    flexDirection:"row", 
    flexWrap:'wrap', 
    alignItems:"center", 
    justifyContent:"center",

  },
  numberBtn: {
    width:75,
    height:75,
    borderRadius:75,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems:"center", 
    justifyContent:"center", 
    margin:8
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a4de'
  },
  heading: {
    color: '#ffffff',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 5,
  },
  subheading: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  fingerprint: {
    padding: 20,
    marginVertical: 30,
  },
  errorMessage: {
    color: '#ea3d13',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 30,
  },
  popup: {
    width: width * 0.8,
  }

})
export default AuthPage;
