import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View, 
  ImageBackground,
} from 'react-native';
import {width, height} from "../../constants"

import * as LocalAuthentication from 'expo-local-authentication';
import { connect } from 'react-redux';
import {authCheck} from "../../redux/reducers/auth"
import cls from "./style"


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
      failedCount: 0,
      enterCode: ["","","",""], 
      code:[1,2,3,4],
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
  const {enterCode:code, code:enter} = this.state
  for (let i=0;i<code.length;i++) {
    if(code[i]=="") {
      code[i]=val
      if (code.join("")==enter.join("")) {
        this.props.authCheck()
      }else {

      }
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
    this.setState({ failedCount: 0 });
    try {
        const results = await LocalAuthentication.authenticateAsync();
        if (results.success) {
            this.setState((prev)=> {
              return {
                ...prev,
                modalVisible: false,
                authenticated: true,
                failedCount: 0,
            }
            });
            this.props.authCheck()
        } else {
            this.setState({ failedCount: this.state.failedCount + 1 });
        }
    } catch (e) {
        console.log(e);
    }
};


  render() {
    const { errorMessage, biometric, popupShowed } = this.state;
    return (
      <View style={cls.container}>
          <ImageBackground  blurRadius={30}  source={require("../../../assets/back.jpg")} style={{position:"absolute", width:width, height:height}}/>
        <Text style={cls.heading}>
          Приложение {this.state.enterCode.map((el)=>el)}
        </Text>
        <View style={cls.littleBtnContainer}>
          {Array(4).fill("").map((el,idx)=> {
            return <View key={idx} style={this.state.enterCode[idx]=="" ? cls.littleBtn: cls.littleBtnActive } key={idx}></View>
          })}
         
       
        </View>
        <Text style={cls.subheading}>
         
        </Text>
        <View style={cls.btnsContainer}>
          {Array(9).fill("").map((el,idx)=> {
            return (
              
              <TouchableOpacity style={cls.numberBtn} onPress={()=>this.onPressNumber(idx+1)}>
                <Text>{idx +1}</Text>
            </TouchableOpacity>
            )
          })}
          <View style={{flexDirection:"row", alignItems:"center"}}>
          <TouchableOpacity style={{...cls.numberBtn, backgroundColor:"transparent"}} onPress={this.onDeleteNumber}>
                <Text style={{color:"white"}}>Back</Text>
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

        </View>
     

      
      
      </View>
    );
  }
}

export default connect((state)=> ({
  isAuth: state.auth.isAuth
}),{authCheck})(AuthPage);
