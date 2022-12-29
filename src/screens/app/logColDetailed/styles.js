import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{ 
    },

    container1:{
        backgroundColor:"#586F7C",
        height:700,
        borderRadius: 20,
    },

    container2:{
        //backgroundColor:colors.orange,
        borderRadius: 30,
        height:25,
        width:40,
        justifyContent:"center",
        marginLeft:5,
        alignItems:"center",    
        flexDirection:"row",
        alignContent:"center",
        alignSelf:"flex-end",
        margin:10,
        
    },

    container3:{
        backgroundColor:"#6E9882",
        borderRadius: 20,
        marginBottom: 20,
        height:90,
        color:colors.white,
        justifyContent:"space-around",
        alignContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },

    container4:{
        backgroundColor:"#393E41",
        height:40,
        width:40,
        borderRadius: 10,
        justifyContent:"center",
    },

    container5:{
        
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
            alignSelf: "center",
            left:-50,
            bottom: -740,
        
    },

    container6:{
        //backgroundColor:"green",
        margin:10,
        height:25,
        width:40,
        justifyContent:"center",
        marginLeft:5,
        alignItems:"center",    
        flexDirection:"row",
        alignContent:"center",
        alignSelf:"flex-end",
       
    },

    listcontainer:{
        backgroundColor:"#40546E",
        flexDirection:"row",
        height:60,
        margin: 10,
        justifyContent:"space-evenly",
        borderRadius:20

    },
    
    Lcontainer1:{
    height:60,
    flexDirection:"row",
    alignItems:"center",
    width:180
    },
      
    Lcontainer2:{
        height:45,
        width:45,
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        textAlign:"center",
        backgroundColor:"#93A8AC",
        justifyContent:"center",
        borderRadius:15,
        marginLeft:8,


    },

    Lcontainer3:{
        height:65,
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
    },

    Lcontainer4:{
        height:65,
        flexDirection:"row",
        alignItems:"center",
    },
  
    Htitle:{
        fontSize: 30,
        fontWeight:"bold",
        color:colors.white,
        paddingLeft:15
    },

    SHtitle:{
        fontSize: 20,
        color:colors.white,
    },

    SHtitle1:{
        color:colors.white,
        height:500,
        width: 370,
        alignSelf:"center",
        padding:15,
        paddingTop:18,
        paddingBottom:20,
        justifyContent:"space-evenly",
        textAlign:"justify"
    
        
    },

   
    SHtitle2:{
        fontSize: 14,
        color:colors.white,
        
        padding:6,
        fontWeight:"bold"
    },

    SHtitle3:{
        fontSize: 30,
        color:colors.white,

       
    },

    SHtitle4:{
      fontSize: 14,
      fontWeight:"bold",
      color:colors.white,
      alignItems:"center",
      alignContent:"center",
      alignSelf:"center",
      textAlign:"center",
    },

    SHtitle5:{
        fontSize: 18,
        fontWeight:"bold",
        color:colors.white,
        justifyContent:"flex-end",
        marginRight:8,
        marginRight:8,
        paddingLeft:12
        
    },


})