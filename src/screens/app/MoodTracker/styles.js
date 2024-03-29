import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({

    container: {
        padding: 15,
        marginBottom: 0,
    },

    listcontainer: {
        backgroundColor: colors.greenbox,
        flexDirection: "row",
        height: 80,
        width: 310,
        margin: 10,
        borderRadius: 20,
        alignContent: "center",
        alignItems: "center",
        marginLeft: 30

    },

    Lcontainer1: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        width: 180
    },


    Lcontainer2: {
        height: 45,
        width: 45,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "#93A8AC",
        justifyContent: "center",
        borderRadius: 15,
        margin: 20

    },

    Lcontainer3: {
        marginBottom: 10,

        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",

    },

    Lcontainer4: {
        height: 65,
        flexDirection: "row",
        alignItems: "center",
    },

    container2: {
        backgroundColor: colors.grey,
        borderRadius: 30,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "flex-end",
        margin: 10,
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

    container4: {
        backgroundColor: "#393E41",
        height: 40,
        width: 40,
        borderRadius: 10,

        justifyContent: "center",
    },

    container5: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        left: -50,
        bottom: -650,
    },
    Htitle: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,

        color: colors.white
    },

    SHtitle: {
        fontSize: 20,
        alignSelf: "center",
        color: colors.white,
        justifyContent: "space-evenly",
    },

    SHtitle1: {
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: "bold",
        color: colors.white,
        justifyContent: "flex-end"

    },

    SHtitle2: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white,

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

})