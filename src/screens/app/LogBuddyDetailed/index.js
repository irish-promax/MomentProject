

import { collection, deleteDoc, doc, getDoc, query, updateDoc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Text, Image, View, Pressable, TextInput, ActivityIndicator, ScrollView, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SFSymbol } from 'react-native-sfsymbols';
import { authentication, db } from '../../../../firebase-config/firebase';
import Header2 from '../../../components/Header2';
import { styles } from './styles';
import { colors } from '../../../utils/colors';
const logBuddyDetailed = ({ navigation, route }) => {

    let [isLoading, setIsLoading] = React.useState(true);

    const [buddy, setBuddy] = useState('');
    const [logDay, setlogDay] = useState('');
    const [worryOf, setworryOf] = useState('');

    const onBack = () => {
        navigation.navigate('Buddy')
    };

    const deleteLog = () => {
        return Alert.alert(
            "Delete Entry",
            "Are you sure?",
            [
                {
                    text: "Delete Forever",
                    onPress: () => {
                        console.log("Delete")
                        deleteDoc(doc(db, "User", authentication.currentUser.uid, "Buddy", route.params.paramKey));
                        navigation.navigate('Buddy')
                    },
                },
                
                {
                    text: "Cancel", style: "cancel"
                }


            ]
        )

    };

    const toUpdate = () => {

        docRef = doc(db, "User", authentication.currentUser.uid, "Buddy", route.params.paramKey);
        const data = {
            doneWorry: "Done",
            
        };

        updateDoc(docRef, data)
            .then(docRef => {
                console.log("Value of an Existing Document Field has been updated");
                navigation.navigate("Buddy")
            })
            .catch(error => {
                console.log(error);
            })
    }

    React.useEffect(() => {
        if (isLoading) {
            getDoc(doc(db, "User", authentication.currentUser.uid, "Buddy", route.params.paramKey)).then(docData => {
                if (docData.exists()) {
                    //console.log("Document data:", docData.data());
                    setBuddy(docData.data().buddyChar);
                    setlogDay(docData.data().createdAt);
                    setworryOf(docData.data().userWorryOf);
                    setIsLoading(false);
                    console.log("Document found!");
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        };
    }, []);

    return (
        <SafeAreaView>
            <View>
                <Header2 onBackPress={onBack} title="Back" />
            </View>



            {
                isLoading ?
                    <View style={{ marginTop: 140, justifyContent: "center", alignItems: "center", }}>

                        <Image
                            style={{ marginTop: 30, width: 180, height: 180, resizeMode: 'contain', }}
                            source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/people3.png')}
                        />
                        <ActivityIndicator size="large" color={colors.white} />
                        <Text style={{ color: colors.white, marginTop: 10 }}>Loading content...</Text>
                        <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                    </View>
                    :
                    <View>
                        {(() => {
                            switch (buddy) {
                                case 'Alex':
                                    return <Image
                                        style={styles.gambar}
                                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/p5.png')}
                                    />

                                case 'Meredith':
                                    return <Image
                                        style={styles.gambar}
                                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/p1.png')}
                                    />
                                case 'Cristina':
                                    return <Image
                                        style={styles.gambar}
                                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/p4.png')}
                                    />
                                case 'Izzie':
                                    return <Image
                                        style={styles.gambar}
                                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/p2.png')}
                                    />
                                case 'George':
                                    return <Image
                                        style={styles.gambar}
                                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/p3.png')}
                                    />
                                default:
                                    return null
                            }
                        })()}
                        <Text style={styles.SHtitle2}>{buddy}</Text>

                        <View style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end", marginBottom: 10, alignSelf: "center" }}>

                        </View>
                        <View style={{ height: 300 }}>
                            <ScrollView>
                                <Text style={styles.SHtitle1}>{worryOf}</Text>
                            </ScrollView>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignSelf: "center",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            backgroundColor: colors.grey,
                            borderRadius: 40,
                            marginBottom: 20,
                            marginTop: 50,
                            marginRight: 6,
                            width: 190
                        }}>
                            <Pressable onPress={deleteLog} hitSlop={20} style={styles.container2}>
                                
                                <SFSymbol
                                    name="trash"
                                    weight="semibold"
                                    scale="large"
                                    color="white"
                                    size={16}
                                    resizeMode="center"
                                    multicolor={false}
                                    style={{ width: 20, height: 42 }}
                                />
                            </Pressable>

                            <Pressable  hitSlop={20} style={styles.container2}>
                                <SFSymbol
                                    name="person.crop.circle.fill.badge.checkmark"
                                    weight="semibold"
                                    scale="large"
                                    color="white"
                                    size={16}
                                    resizeMode="center"
                                    multicolor={false}
                                    style={{ width: 20, height: 42 }}
                                />
                            </Pressable>
                        </View>
                    </View>
            }
        </SafeAreaView>
    )

}

export default React.memo(logBuddyDetailed);



