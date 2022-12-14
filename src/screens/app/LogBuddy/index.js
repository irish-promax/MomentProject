import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header2 from '../../../components/Header2';
import RadioButton2 from '../../../components/RadioButton2';
import SButton from '../../../components/SButton';
import { styles } from './styles';
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { authentication, db } from '../../../../firebase-config/firebase';

const LogBuddy = ({ navigation }) => {
    const [option, setOption] = useState('');
    const [logtoBuddy, setLogtoBuddy] = useState('');

    const onBack = () => {
        navigation.navigate('Buddy')
    };

    const person = [
        {
            label: 'Alex',
            value: 'Alex',
            image: '../../../../../MomentProject/src/assets/p2.png'
        },
        {
            label: 'Meredith',
            value: 'Meredith',
            image: '../../../../../MomentProject/src/assets/p2.png'
        },
        {
            label: 'Cristina',
            value: 'Cristina',
            image: '../../../../../MomentProject/src/assets/p2.png'
        },
        {
            label: 'Izzie',
            value: 'Izzie',
            image: '../../../../../MomentProject/src/assets/p2.png'
        },
        {
            label: 'George',
            value: 'George',
            image: '../../../../../MomentProject/src/assets/p2.png'
        },
    ];


    const sendToDB = async () => {
        try {
            const docRef = doc(db, "User", authentication.currentUser.uid,)
            const colRef = collection(docRef, "Buddy")
            addDoc(colRef, {
                userID: authentication.currentUser.uid,
                userWorryOf: logtoBuddy,
                buddyChar: option,
                whoLog: authentication.currentUser.email,
                createdAt: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate("WD", { paramKey: option });
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <SafeAreaView>
            <View>
                <Header2 onBackPress={onBack} title="Back" />
            </View>

            <View style={styles.SHtitle}>
                <Text style={styles.SHtitle1}>Choose Your Buddy</Text>
                {(() => {
                    switch (option) {
                        case 'Alex':
                            return <Image
                                style={styles.gambar}
                                source={require('../../../../../MomentProject/src/assets/p5.png')}
                            />
                        case 'Meredith':
                            return <Image
                                style={styles.gambar}
                                source={require('../../../../../MomentProject/src/assets/p1.png')}
                            />
                        case 'Cristina':
                            return <Image
                                style={styles.gambar}
                                source={require('../../../../../MomentProject/src/assets/p4.png')}
                            />
                        case 'Izzie':
                            return <Image
                                style={styles.gambar}
                                source={require('../../../../../MomentProject/src/assets/p2.png')}
                            />
                        case 'George':
                            return <Image
                                style={styles.gambar}
                                source={require('../../../../../MomentProject/src/assets/p3.png')}
                            />
                        default:
                            return null
                    }
                })()}
                <RadioButton2 data={person} onSelect={(option) => setOption(option)} onChangeText={option => setOption(option)} />
                <Text style={styles.SHtitle1}>I will worry for you</Text>
                <Text style={styles.SHtitle1}>Tell me what to worry about.</Text>
            </View>

            <View style={styles.container3}>
                <View>
                    <TextInput
                        require
                        style={styles.Log}
                        value={logtoBuddy}
                        onChangeText={logtoBuddy => setLogtoBuddy(logtoBuddy)}
                        placeholder="I'm worried because..."
                        placeholderTextColor="white"
                        numberOfLines={5}
                        multiline={true}
                    />
                </View>
            </View>

            <View>
                <SButton style={{ bottom: 3, alignSelf: "center", alignContent: "center", alignItems: "center", }} title='Save to collection' onPress={sendToDB} />
            </View>

        </SafeAreaView>
    )
}
export default React.memo(LogBuddy);

/* =========== Reserved Code ===========               
*/