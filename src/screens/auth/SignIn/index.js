import React, { useState } from 'react';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Buttons';
import { TextInput, Text, View } from 'react-native';
import { styles } from './styles';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication, currentUser } from '../../../../firebase-config/firebase';

const SignIn = ({ navigation }) => {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [validatePassword, setValidatePassword] = useState('');

    const onSignIn = () => {


        signInWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                //const user = userCredentials.user;
                setEmail('');
                setPass('');
                setValidatePassword('')
                navigation.navigate('Tabs');
                console.log("User: ",email)
            })
            .catch((re) => {
                console.log(re);
                setValidatePassword('Invalid Credential')
            })
    }


    const onSignOut = () => {
        signOut(authentication, email)
        navigation.navigate('Splash')
    }

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const onSignUp = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.navigate('Splash')
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

                <Text style={{ alignContent: "center", alignItems: "center", alignSelf: "center", color: "red" }}>{validatePassword}</Text>
                <Button onPress={onSignIn} style={styles.button} title='Sign In' />

                <Text style={styles.footerText}>Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>

                </Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(SignIn);

/* =========== Reserved Code ===========
        const [email, setEmail] = useState('');
        const [password, setPass] = useState('');
        
        const handleSignUp = () => {
            authentication
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);

            })
            .catch(error => alert(error.message))
        }
    ======
        {isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image style = {styles.eye} source ={isPasswordVisible ? require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/eye.png') : require('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/eyeclose.png')} />
                </Pressable>
            ): 
        null
        }
===
const [isSignedin, setIsSignedIn] = useState(false);

    const [email,setEmail] = useState('');
    
    const [password,setPass] = useState('');

    const regUser = () => {
        createUserWithEmailAndPassword(authentication,email,password)
        .then((re) => {
            console.log ("Emal sukses: ", email);
            console.log(re);
            setIsSignedIn(true); 
        })
        .catch((re) => {
            console.log ("Ini emal: ", email);
            console.log(re);
        })

    }

    const onSignIn = () => {
            signInWithEmailAndPassword(authentication, email, password)
            .then((re) => {
            setIsSignedIn(true);
            navigation.navigate('Tabs')
            })

            .catch((re) => {
                console.log ("Ini emal: ", email);
                console.log(re);
            })
        } 
    
    const onSignOut = () => {
            signOut(authentication)
            .then((re)=>{
                setIsSignedIn(false)
                navigation.navigate('Tabs')
            })
            .catch((re) => {
                console.log ("Ini emal: ", email);
                console.log(re);
            })
            
        }
    */