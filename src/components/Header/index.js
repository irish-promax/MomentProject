import React from "react";
import {  Image, View, Text, Pressable } from "react-native";
import { styles } from "./styles";

const Header = ({title, onBackPress, onLogout, showLogout, showSpace}) => {
    
    
    return(
      <View style = {styles.container}>
        {
          onBackPress ? (
            <Pressable hitSlop={20} onPress={onLogout}>
                <Image style = {styles.icon} source = {require('../../../../MomentProject/src/assets/bookmark.png') } />
            </Pressable>
          )
          : 
          
          <View style={styles.space}/>
        
        }
        <Text style={styles.title}>{title}</Text>

        {
          showLogout ? (
            <Pressable hitSlop={20} onPress={onLogout}>
                <Image style = {styles.icon} source = {require('../../../../MomentProject/src/assets/house.png') } />
            </Pressable>
          )
          : 
          
          <View style={styles.space}/>
        
        }
      </View>  

    )
}

export default Header;