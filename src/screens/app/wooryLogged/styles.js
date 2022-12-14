
import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({

    gambar: {
        width: 120,
        height: 180,
        resizeMode: 'contain',
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        marginTop: 150
    },

    SHtitle1: {
        fontSize: 16,
        fontWeight:"bold",
        color: colors.white,
        
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent:"center",
        textAlign:"center",


    },

    SHtitle2: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
        marginLeft: 8,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",

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
        alignSelf:"center",
        margin:10,
        
    },

})