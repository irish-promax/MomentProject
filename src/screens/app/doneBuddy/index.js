import React, { useState } from 'react';

import { Text, TextInput, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Buttons';
import { colors } from '../../../utils/colors';
import { styles } from './styles';

const doneBuddy = ({ navigation }) => {
    const onBack = () => {
        navigation.navigate('Buddy')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: colors.white,
                    textAlign: 'center',
                    margin: 70,
                }}>Your are done with this worry, We will continue to worry for you and keep it safe.</Text>

            </View>

            <Image
                style={styles.image}
                source={require('../../../../../MomentProject/src/assets/people2.png')}
            />


            <View >
                <Button onPress={onBack} title="Back to Buddy List" />
            </View>


        </SafeAreaView>

    )
}

export default React.memo(doneBuddy);

/* =========== Reserved Code ===========
*/