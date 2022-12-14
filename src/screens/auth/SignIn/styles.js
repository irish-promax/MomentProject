import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        padding:20,
    },

    button:{
        marginVertical:20,
    },

    label:{
        marginTop:10,
        marginBottom:15,
        fontSize: 22,
        fontWeight:"bold",
        color: colors.white,
    },

    label1:{
        marginTop:5,
        marginBottom:15,
        alignSelf:"center",
        fontSize: 30,
        fontWeight:"bold",
        color: colors.white,
    },
   
    input:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.blue,
    },
   
    inputContainer:{
        borderWidth: 2,
        borderColor: colors.orange,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 15,
        color: colors.blue,
        marginBottom:20,
        backgroundColor:colors.white,
    },
   
    eye:{
        height: 30,
        width: 30,
        marginHorizontal: 20,
           
    },

    footerText: {
        color: colors.white,
        marginBottom: 56,
        textAlign: 'center'
    },
    
    footerLink: {
        fontWeight: 'bold',
    }
   
})