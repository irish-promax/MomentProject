import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"red", 
        padding: 8,
        paddingHorizontal:10,
        paddingVertical: 20,
        borderRadius: 10, 
        width:'30%',
        
        alignSelf:"center",
        margin: 20,
    },

    title:
    {
        textAlign:'center',
        fontSize: 14,
        fontWeight:'bold',
        color: 'white',
  
        

    },

    innerTitle:{
        color:colors.orange,
        textDecorationLine:'underline',

    },

})