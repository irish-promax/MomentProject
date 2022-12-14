import React, {useState} from 'react';

import {Text, TextInput, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Buttons';
import { styles } from './styles';

const SLogout = ({navigation}) => {
    const onBack = () => {
        navigation.navigate('SignIn')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.title}>Successfuly Log out lol</Text>
                
            </View>
            
            <View >
                <Button onPress={onBack} title="Back to splash"/>
            </View>
            

        </SafeAreaView>
      
    )
}

export default React.memo(SLogout);

/* =========== Reserved Code ===========
*/