import React, { useState } from 'react';
import Button from '../../../components/Buttons';
import { TextInput, Text, View } from 'react-native';
import { styles } from './styles';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from '../../../../firebase-config/firebase';

const SignIn = ({ navigation }) => {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [validatePassword, setValidatePassword] = useState('');

    const onSignIn = () => {
        if (email == "" || password == "") {
            alert("You left the form empty\nPlease complete the form.");
        }
        
        else{
        signInWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                //const user = userCredentials.user;
                setEmail('');
                setPass('');
                setValidatePassword('')
                navigation.navigate('Tabs');
                console.log("User: ", email)
            })
            .catch((re) => {
                console.log(re);
                setEmail('');
                setPass('');
                setValidatePassword('')

                alert("Invalid Credential!");
            })
        }
    }

    const onSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <Text style={styles.label1}>Sign In</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.inputContainer}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.label}>Password</Text>

                <TextInput
                    isPassword
                    style={styles.inputContainer}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPass(text)}
                />

                <Button onPress={onSignIn} style={styles.button} title='Sign In' />

                <Text style={styles.footerText}>Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>

                </Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(SignIn);

