import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { styles } from './styles';

export const Checkbox = ({checked, onCheck}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
            
            {checked ? (
                <View style ={styles.innerContainer}>
                    <Image style ={styles.checkIcon}source={require ("/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/Checked.png")}/>
                </View>
            ): null }

        </TouchableOpacity>
    )
}
export default React.memo(Checkbox);