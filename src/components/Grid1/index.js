import React from "react";
import {  Image, View, Text, Pressable } from "react-native";
import Button2 from "../Buttons2";
import Button3 from "../Buttons3";
import { styles } from "./styles";

const Grid1 = ({title, onBackPress, onLogout, showLogout, showSpace}) => {
    
    
    return(
      <View style = {styles.container}>
        
        
        <View style={styles.grid1}>
          <Button3 title="Diary"/>
        </View>

        <View style={styles.grid}>
          <Button3/>
        </View> 

      </View>  

    )
}

export default Grid1;