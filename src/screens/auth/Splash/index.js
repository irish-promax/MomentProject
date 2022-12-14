import React from 'react';
import {Text,Image, View, Pressable} from 'react-native';
import Button from '../../../components/Buttons';

import {styles} from './styles';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from '../../../../firebase-config/firebase';

const Splash = ({navigation}) => {
    if (authentication.currentUser) {
        navigation.navigate('Tabs')
    }
    console.log('This splash screen >> ', navigation);

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    if(authentication.currentUser){
        navigation.navigate('Tabs')
       }

    return(
        <SafeAreaView>
        <View style = {styles.container}>
            
            <Image resizeMode='contain' style = {styles.image} source = {require ('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/Buddy3.png')}/>
               
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Moment</Text>
                <Text style = {styles.subtitle}>Write your day as story.</Text>
            </View>
    
            <Button onPress={onSignIn} title= "Get Started"/>
            
        </View>
        </SafeAreaView>
    )

}

export default React.memo(Splash);

/* =========== Reserved Code ===========
            <Pressable onPress={onSignIn} hitSlop={20} style = {styles.login}>
                <Text style = {styles.footerText}>Sign In</Text>
            </Pressable>
*/