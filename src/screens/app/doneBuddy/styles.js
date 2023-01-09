import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";


export const styles = StyleSheet.create({
    
    container:{
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 50,
    },

    image:{
        width: 120,
        height: 180,
        resizeMode: 'contain',
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        marginTop:20,
        marginBottom:30
    },

    title:{
        fontSize: 30,
        fontWeight:'600',
        color: colors.white,
        textAlign: 'center',
        margin:100
    },

})
