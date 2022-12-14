import {StyleSheet} from "react-native";
import { colors } from "../../utils/colors";


export const styles = StyleSheet.create ({
    container:{
        borderColor:colors.greenbox,
        borderWidth: 2,
        borderRadius: 4,
        width: 20,
        height: 20,
    },

    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },

    checkIcon:{
        width: 20,
        height: 20,
    }
})