import React from "react";
import {  Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button2 = ({title, onPress, style}) => {
    
    
    return(
        <Pressable  onPress={onPress} style = {[styles.container1, style]}>
            <Text style = {styles.title}>{title}</Text>
        </Pressable>

    )
}

export default Button2;