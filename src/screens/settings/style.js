// inputContainer

import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        height:"100%", 
        paddingTop:50
    },
    innerContainer: {
        justifyContent:"space-between",
        height:"90%"
    },
    inputContainer: {
        backgroundColor:"white",
        height:44,
        paddingHorizontal:20,
        alignItems:"center",
        flexDirection:"row"
    },
    input: {
      
    },
    red: {
        color: "tomato"
    },
    title: {
        marginVertical:20,
        paddingHorizontal:20,
        fontWeight:"700",
        fontSize:15, 
        lineHeight:16

    },
    out: {
        color: "tomato", 
        textAlign:"center",  
    },
    btn: {
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:10,
        width:"90%",
        alignItems:"center",
        borderRadius:14, 
        minHeight:56,
        marginVertical:5,
        justifyContent:"center"
    }

})

