import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';


export default function RadioButton2({ data, onSelect }) {

  const [userOption, setUserOption] = useState(null);

  const selectHandler = (label, value) => {
    onSelect(label);
    setUserOption(label);
  };
  
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            style={item.value === userOption ? styles.selected : styles.unselected}
            onPress={() => selectHandler(item.value)}>
            <Text style={item.label === userOption ? styles.option1 : styles.option2}>{item.label}</Text>
          </Pressable>
         
        );
      })}
      
    </View>
  );
}





//onPress={() => alert("Your choice: " + item.value)}