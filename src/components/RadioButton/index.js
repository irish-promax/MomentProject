import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';

export default function RadioButton({ data, onSelect }) {
  
    const [userOption, setUserOption] = useState(null);

        const selectHandler = (value) => {
          onSelect(value);
          setUserOption(value);
        };
        return (
          <View style={styles.container}>
            {data.map((item) => {
              return (
                <Pressable
                  style={ item.value === userOption ? styles.selected : styles.unselected }
                  onPress={() => selectHandler(item.value)}>
                  <Text style={item.value === userOption ? styles.option1 : styles.option2}>{item.value}</Text>
                </Pressable>
              );
            })}
          </View>
        );
}





//onPress={() => alert("Your choice: " + item.value)}