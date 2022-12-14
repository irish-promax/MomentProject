import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between'
    },

    icon:{
        width:20,
        height: 23,

    },

    title:{
        fontSize: 20,
        fontWeight:'700',
        color: colors.white,
        paddingHorizontal: 18,
    },

    space:{
        width:18,
        height: 28,
    },

})
