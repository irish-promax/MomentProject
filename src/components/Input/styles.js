import {StyleSheet} from "react-native";
import { colors } from "../../utils/colors";

 export const styles = StyleSheet.create({
    
    container:{
        marginBottom: 20,
    },

    label:{
        marginBottom: 5,
        fontSize: 20,
        fontWeight: '500',
    },

    input:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color:colors.white,
    },

    inputContainer:{
        borderWidth: 1.5,
        borderColor: colors.orange,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        color:colors.white,
    },

    eye:{
        height: 30,
        width: 30,
        marginHorizontal: 20,
    }


 })