import React, { useState } from 'react';

import { Text, TextInput, View } from 'react-native';
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
                    fontSize: 30,
                    fontWeight: '600',
                    color: colors.white,
                    textAlign: 'center',
                    margin: 50
                }}>Successfuly Log</Text>

            </View>

            <View >
                <Button onPress={onBack} title="Back to Log In" />
            </View>


        </SafeAreaView>

    )
}

export default React.memo(SLogout);

/* =========== Reserved Code ===========
*/