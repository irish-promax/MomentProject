import React from "react";
import {  Image, View, Text, Pressable } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    
    
    return(
      <View style = {styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style = {styles.image} source = {require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/BackButton.png') } />
            </Pressable>
            <Text style = {styles.title}>{title}</Text>
      </View>  

    )
}

export default AuthHeader;