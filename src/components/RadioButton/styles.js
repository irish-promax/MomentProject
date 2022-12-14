import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";



export const styles = StyleSheet.create({
    
    container:{
        flexDirection: "row",
    },

    image:{
        width:18,
        height: 28,
    },

    title:{
        fontSize: 30,
        fontWeight:'600',
        color: colors.white,
        textAlign: 'center',
        margin:100
    },
    
    text1:{
        textAlign:"center",
        alignContent:"center",
        color: colors.white,
        marginHorizontal:2,
        fontSize:20,
        fontWeight:"500"
    },

    text2:{
        color: colors.white,
        textAlign:"center",
        alignContent:"center",
        color: colors.white,
        justifyContent:"space-evenly",
        marginHorizontal:40,
    },

    option1: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight:"bold",
        justifyContent:"space-evenly",
        marginHorizontal:5,
        //shadowOpacity: 0.5,
        //shadowColor: 'white',
        //shadowOffset: { width: 1, height: 1 },
      },

      option2: {
        marginHorizontal:5,
        fontSize: 35,
        color:colors.white,
        textAlign: 'center',
        justifyContent:"space-evenly",
      },

      unselected: {
        color: colors.white,
        marginHorizontal:2,
        fontSize:20,  
      },

      selected: {
        backgroundColor:"#EBF5EE",
        borderRadius:50,
        marginHorizontal:2,
        fontSize:30,
      },
    
})