import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        padding:15, 
        marginBottom:0,
    },

    image:{
    
    },

    Htitle:{
        fontSize: 35,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom: 20,
        
        color:colors.white
    },

    SHtitle:{
        fontSize: 20,
        alignSelf:"center",
        color:colors.white,
        justifyContent:"space-evenly",
    },

    SHtitle1:{
      fontSize: 14,
      paddingHorizontal:20,
      fontWeight:"bold",
      marginBottom: 5,
      color:colors.white,
      justifyContent:"space-evenly",
      paddingTop:10
    },

   
    SHtitle2:{
      fontSize: 14,
      color:colors.white,
      
      padding:6,
      fontWeight:"bold"
  },

  SHtitle3:{
      fontSize: 14,
      color:colors.white,
     padding:6
     
  },

    
    button:{
        marginVertical:20,
    },

    container1:{
      backgroundColor:"#B36177",
      height:640,
      borderRadius: 20,
      marginTop:20
    },

    container2:{
      backgroundColor:"#324A5F",
      borderRadius: 30,
      marginBottom: 15,
      height:50,
      width:"98%",
      justifyContent:"center",
      alignSelf:"center"
    },

    container3:{
        backgroundColor:colors.grey,
        borderRadius: 30,
        justifyContent:"center",
        flexDirection:"row",
        height:36,
        width:140,
       
        alignItems:"center",    
        alignContent:"center",
        alignSelf:"flex-end",
        margin:10,
    },
   
    title:{
      padding:15,
      color: colors.white,
      width: 370,
      borderRadius: 10,
      //padding:15,
      paddingTop:15,
      marginBottom:5,
      fontWeight:"bold",
      backgroundColor:"#B36177",
      alignSelf:"center",
      marginTop:10,
      fontSize:20
    },

    Log:{
      color: colors.white,
      height:460,
      width: 370,
      alignSelf:"center",
      backgroundColor:"#C47F91",
      padding:15,
      borderRadius: 20,
      //padding:15,
      paddingTop:18,
      paddingBottom:20,
      justifyContent:"space-evenly",
      textAlign:"justify"
      
    },

    dateText1:{
        fontSize: 19,
        color:colors.white,
        fontWeight:"500",
        
    },

    dateText2:{
        fontSize: 16,
        color:colors.white,
        paddingBottom: 20
    },
     
    titleDP:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },

    datePickerStyle:{
        width: 300,
        marginTop: 20,
        fontSize: 20,
        color:colors.black,
        marginBottom:20,
    },

    SHtitle1:{
      fontSize: 14,
      paddingHorizontal:10,
      fontWeight:"bold",
      color:colors.white,
      justifyContent:"flex-end",
      marginTop:15,
      marginHorizontal:9
      
  },

})