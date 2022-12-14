import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    image:{
        width:18,
        height: 28,
    },

    title:{
        fontSize: 20,
        fontWeight:'600',
        color: colors.white,
        paddingHorizontal: 18,
    },

})
