import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CButton = ({title, onPress, style}) => {
    
    
    return(
        <TouchableOpacity  onPress={onPress} style = {[styles.container, style]}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>

    )
}

export default CButton;