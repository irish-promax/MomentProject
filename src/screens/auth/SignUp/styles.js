import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        padding:15,
    },

    title:{
        color:colors.white,
        fontWeight:"bold",
    },

    label1:{
        marginTop:5,
        marginBottom:5,
        alignSelf:"center",
        fontSize: 30,
        fontWeight:"bold",
        color: colors.white,
    },
    agreement:{
        flexDirection:'row',
        alignItems: 'center'
    },

    agreementText:{
        color: colors.white,
        paddingHorizontal: 15
    },

    button:{
        marginVertical:20,
    },

    footer:{
        color: colors.blue,
        marginBottom: 56,
        textAlign:'center'
    },

    link:{
        fontWeight:"bold",
        
    },
    label:{
        marginTop:10,
        marginBottom:10,
        fontSize: 20,
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
        marginBottom:15,
        backgroundColor:colors.white,
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