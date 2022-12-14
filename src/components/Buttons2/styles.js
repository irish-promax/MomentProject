import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    
    container1:{
        //borderWidth:2,
        backgroundColor:colors.white,
        padding: 8,
        paddingHorizontal:10,
        paddingVertical: 24,
        borderRadius: 10,
        shadowColor: colors.blue,
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 10 ,
        shadowOffset : { width: -10, height: 5},
        
        
    },
    container2:{
        //borderWidth:2,
        backgroundColor:colors.white,
        padding: 8,
        paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 10,
        height: 120,
        width: 140,
        alignSelf: "center",
        margin:15,
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 10 ,
        shadowOffset : { width: -10, height: 5},
        shadowColor: colors.blue,
        
    },

    title:
    {
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: 18,
        fontWeight:'bold',
        color: colors.blue,


    },

    innerTitle:{
        color:'#FCA34D',
        textDecorationLine:'underline',

    },

})
