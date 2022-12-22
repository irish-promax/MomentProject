import React, { useState } from 'react';
import Button from '../../../components/Buttons';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication, db } from '../../../../firebase-config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [username, setusername] = useState('');
    const [fullname, setfullname] = useState('');

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    const regUser = () => {

        if (email == "" || password == "" || username == "" || fullname == "") {
            alert("You left the form empty\nPlease complete the form.");
        }
        
        else {

            createUserWithEmailAndPassword(authentication, email, password)
                .then(async (userCredentials) => {
                    const user = userCredentials.user;
                    const docRef = await setDoc(doc(db, "User", userCredentials.user.uid), {
                        Email: email,
                        Username: username,
                        FullName: fullname,
                    });
                    console.log(docRef);
                    navigation.navigate('Tabs')
                })

                .catch((re) => {
                    console.log("Ini emal: ", email);
                    console.log(re);
                })
        }
    }

    return (

        <SafeAreaView>

            <View style={styles.container}>

                <Text style={styles.label1}>Sign Up</Text>

                <ScrollView>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.inputContainer}
                        value={fullname}
                        onChangeText={text => setfullname(text)} />

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.inputContainer}
                        value={email}
                        onChangeText={text => setEmail(text)} />

                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.inputContainer}
                        value={username}
                        onChangeText={text => setusername(text)} />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        isPassword
                        style={styles.inputContainer}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPass(text)} />

                    <Button onPress={regUser} style={styles.button} title='Sign Up' />

                    <Text style={styles.footerText}>Already have an account?
                        <Text onPress={onSignIn} style={styles.link}> Sign In</Text>
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(SignUp);