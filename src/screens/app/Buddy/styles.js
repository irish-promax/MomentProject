import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({

    container: {
    },

    container1: {
    },

    container2: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        left:-50,
        bottom: -690,
        
    },


    container: {
        padding: 15,
        marginBottom: 0,
    },

    listcontainer: {
        backgroundColor: "#40546E",
        flexDirection: "row",
        height: 160,
        width: 350,
        margin: 10,
        
        borderRadius: 20,
        

    },

    container3: {
        backgroundColor: "#324A5F",
        borderRadius: 30,
        marginBottom: 20,
        height: 50,
        width: 300,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 15,
        color: colors.white,
        marginRight: 10
    },

   

    

    SHtitle: {
        fontSize: 20,
        alignSelf: "center",
        color: colors.white,
        justifyContent: "space-evenly",
    },

    SHtitle1: {
        fontSize: 10,
        paddingHorizontal: 10,
        
        color: colors.white,
        justifyContent: "flex-end"

    },

    SHtitle2: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
        marginLeft: 8,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",

    },

    SHtitle3: {
        fontSize: 18,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",

    },

    SHtitle4: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",
    },

    gambar: {

        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    }

})