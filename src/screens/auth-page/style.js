
import {StyleSheet, Dimensions} from "react-native"
const { width,height } = Dimensions.get('window');
const cls = StyleSheet.create({

    littleBtnContainer: {
      flexDirection:"row", 
      justifyContent:"center",
      alignItems:"center",
  
    },
    littleBtn: {
      width:13, 
      height:13, 
      borderColor:"white", 
      borderWidth:1, 
      borderRadius:16,
      margin:5
    },
    littleBtnActive: {
      width:13, 
      height:13, 
      borderColor:"white", 
      borderWidth:1, 
      borderRadius:16, 
      margin:5,
      backgroundColor:"white"
    },
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
      backgroundColor: '#00a4de', 
      paddingBottom:100
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
  export default cls