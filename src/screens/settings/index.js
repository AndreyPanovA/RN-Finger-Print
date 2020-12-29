import React, {useState} from 'react';
import cls from "./style"
import {Text, View, TouchableOpacity } from 'react-native';
import {connect} from "react-redux"
import {logout} from "../../redux/reducers/auth"
import * as Animatable from 'react-native-animatable';
 const Settings =({navigation:{navigate, push},logout})=>{
     const [out, setOut] =useState(false)
     const callbacks = {
         onPress:(func)=> {
             setOut((prev)=>!prev)
         },
          onLogOut: ()=>{
            logout()
          }
         
     }
     return (
        <View style={cls.container}>
            <Text style={cls.title}>Учетная запись</Text>
            <View style={cls.innerContainer}>
                <TouchableOpacity style={cls.inputContainer}>
                   <Text>Настройки</Text>
                </TouchableOpacity>
                {!out && 
                 <TouchableOpacity onPress={callbacks.onPress}>
                 <Text style={cls.out}>Выйти из учетной записи</Text>
                </TouchableOpacity>
                }
               
            </View>
                {out &&  
                <Animatable.View animation={out ? "fadeInUp" : "fadeOutDown"} style={{position:"absolute", bottom:0, width:"100%", alignItems:"center" }}>
                    <TouchableOpacity style={cls.btn} onPress={callbacks.onLogOut}>
                        <Text style={cls.red}>Выйти из учетной записи</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={cls.btn} onPress={callbacks.onPress}>
                        <Text>Отмена</Text>
                    </TouchableOpacity>
           
                </Animatable.View>
                }
      
        </View>
     )
 }
 export default connect(
    (state)=> ({
        isAuth:state.auth.isAuth
    }),{logout}
  )(Settings)