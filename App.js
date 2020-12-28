// import React, { Component } from 'react';
// import {
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   AppState, 
//   Modal, 
//   Button, 
//   StyleSheet,
//   Dimensions,
//   ImageBackground
// } from 'react-native';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
// const { width,height } = Dimensions.get('window');
// import styles from './src/Application.container.styles';
// import FingerprintPopup from './src/FingerprintPopup.component';
// import {FingerPrintModal} from "./src/components"
// // 
// import * as LocalAuthentication from 'expo-local-authentication';


// // 


// class App extends Component {

//   constructor(props) {
 
//     super(props);
//     this.state = {
//       errorMessage: undefined,
//       biometric: undefined,
//       popupShowed: false, 
//       fingerprint:false,
//       modalVisible: true,
//       authenticated: false,
//       failedCount: 0
//     };
//   }

//   handleFingerprintShowed = ()=> {
//     this.setState((prev)=>({...prev, fingerprint: true}))
//   }
//   setModalVisible(visible) {
//     this.setState({ modalVisible: visible, failedCount: 0 });
// }

// closeModal() {
//     this.setModalVisible(false);
// }

// scanFingerPrint = async () => {
//     console.log("scan fingerprint");
//     this.setState({ failedCount: 0 });
//     try {
//         console.log("before results");
//         const results = await LocalAuthentication.authenticateAsync();
//         console.log("after results");
//         if (results.success) {
//             // this.props.onSuccess(true);
//             this.setState((prev)=> {
//               return {
//                 ...prev,
//                 modalVisible: false,
//                 authenticated: true,
//                 failedCount: 0,
//             }
//             });
//         } else {
//             this.setState({ failedCount: this.state.failedCount + 1 });
//         }
//     } catch (e) {
//         console.log(e);
//     }
// };


//   render() {
//     const { errorMessage, biometric, popupShowed } = this.state;
//   // 
//     return (
 
//       <View style={cls.container}>
//           <ImageBackground  blurRadius={30}  source={require("./assets/back.jpg")} style={{position:"absolute", width:width, height:height}}/>
//         <Text style={styles.heading}>
//           React Native Fingerprint Scanner
//         </Text>
//         <Text style={styles.subheading}>
         
//         </Text>
//         <View style={cls.btnsContainer}>
//           {Array(9).fill("").map((el,idx)=> {
//             return (
//               <TouchableOpacity style={cls.numberBtn}>
//                 <Text>{idx +1}</Text>
//             </TouchableOpacity>
//             )
//           })}
//           <View style={{flexDirection:"row", alignItems:"center"}}>
//           <TouchableOpacity style={{...cls.numberBtn, backgroundColor:"transparent"}}>
//                 <Text>Back</Text>
//             </TouchableOpacity>
//           <TouchableOpacity style={cls.numberBtn}>
//                 <Text>{0}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//             style={{...cls.numberBtn, backgroundColor:"transparent"}}
//             onPress={this.scanFingerPrint}
//             disabled={!!errorMessage}
//           >
//             <Image source={require('./src/assets/finger_print.png')}  style={{width:35, height:35}}/>
//           </TouchableOpacity>
//           </View>
//           {<Text>Super {JSON.stringify(this.state.authenticated)}</Text>}
           
//         </View>

      
      
//       </View>
//     );
//   }
// }
// const cls = StyleSheet.create({



//   btnsContainer: {
//     width:314, 
//     height:370,
//     flexDirection:"row", 
//     flexWrap:'wrap', 
//     alignItems:"center", 
//     justifyContent:"center",

//   },
//   numberBtn: {
//     width:75,
//     height:75,
//     borderRadius:75,
//     backgroundColor: "rgba(255,255,255,0.3)",
//     alignItems:"center", 
//     justifyContent:"center", 
//     margin:8
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#00a4de'
//   },
//   heading: {
//     color: '#ffffff',
//     fontSize: 22,
//     marginTop: 30,
//     marginBottom: 5,
//   },
//   subheading: {
//     color: '#ffffff',
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 5,
//     marginBottom: 30,
//   },
//   fingerprint: {
//     padding: 20,
//     marginVertical: 30,
//   },
//   errorMessage: {
//     color: '#ea3d13',
//     fontSize: 16,
//     textAlign: 'center',
//     marginHorizontal: 10,
//     marginTop: 30,
//   },
//   popup: {
//     width: width * 0.8,
//   }

// })
// export default App;




import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import * as Font from 'expo-font';
import Navigation from "./src/components/navigation"
// import store, { persistor } from "./src/redux";
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';



// setGetTokenFunction(() => store.getState().auth);
// setGetDispatch((action) => store.dispatch(action));
// reducersFunction(() => ({ checkIsAuth, resetTokens }));


class App extends React.Component {
  state = {
    fontLoaded: true,
  };

  // componentDidMount() {
  //   this.loadAssetsAsync();
  // }

  // async loadAssetsAsync() {
  //   await Font.loadAsync({
  //           Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  //           semi:require('./assets/fonts/NormalidadText-SemiCondensed.otf'),
  //           regular:require('./assets/fonts/NormalidadText-TextRegular.otf'),
  //           bold:require('./assets/fonts/NormalidadText-TextBold.otf'),
  //           medium:require('./assets/fonts/NormalidadText-TextMedium.otf'),
  //           light:require('./assets/fonts/NormalidadText-TextLight.otf'),
  //           // 
  //           sfBold: require('./assets/fonts/SFProDisplay-Bold.otf'),
  //           sfSemi:require('./assets/fonts/SFProText-Semibold.otf'),
  //           sfRegular:require('./assets/fonts/SFProDisplay-Regular.otf'),
  //           // bold:require('./assets/fonts/NormalidadText-TextBold.otf'),
  //           sfMedium:require('./assets/fonts/SFProText-Medium.otf'),
  //           // light:require('./assets/fonts/NormalidadText-TextLight.otf'),
  //   // 
	// 	// <string>SFProDisplay-Bold.otf</string>
	// 	// <string>SFProDisplay-Regular.otf</string>
	// 	// <string>SFProText-Regular.otf</string>
	// 	// <string>SFProText-Semibold.otf</string>
	// 	// <string>SFProDisplay-Semibold.otf</string>
	// 	// <string>SFProText-Medium.otf</string>
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // if (!this.state.fontLoaded) {
    //   return null; // render some progress indicator
    // }
    return (
      // <Provider store={store}>
      //   <PersistGate loading={null} persistor={persistor}>
      //     <NavigationContainer>
      //       <Navigation />
      //     </NavigationContainer>
      //   </PersistGate>
      // </Provider>
      <NavigationContainer>
      <Navigation />
    </NavigationContainer>
 
      
    );
  }
}
export default App




