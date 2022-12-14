import React from "react";
import {  Image, Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button3 = ({title, onPress, style}) => {
    
    
    return(
        <Pressable  onPress={onPress} style = {[styles.container, style]}>
            <Text style = {styles.title}>{title}</Text>
        </Pressable>

    )
}

export default Button3;