import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        backgroundColor: colors.orange, 
        padding: 8,
        paddingHorizontal:10,
        paddingVertical: 20,
        borderRadius: 10,
        width:300,
        alignSelf:"center"
 
        
        
    },

    title:
    {
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
        color: 'white',
        

    },

    innerTitle:{
        color:'#FCA34D',
        textDecorationLine:'underline',

    },

})


