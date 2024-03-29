import React, { useState } from 'react';

import { Text, TextInput, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Buttons';
import { colors } from '../../../utils/colors';
import { styles } from './styles';

const SLogout = ({ navigation }) => {
    const onBack = () => {
        navigation.navigate('SignIn')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: colors.white,
                    textAlign: 'center',
                    margin: 70,
                }}>You are now logged out.</Text>

            </View>

            <Image
                style={styles.image}
                source={require('../../../../../MomentProject/src/assets/p5.png')}
            />


            <View >
                <Button onPress={onBack} title="Back to Log In" />
            </View>


        </SafeAreaView>

    )
}

export default React.memo(SLogout);

/* =========== Reserved Code ===========
*/