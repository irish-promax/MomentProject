import React, { useState } from 'react';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { Text, Image, View, Pressable, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SFSymbol } from 'react-native-sfsymbols';
import { authentication, db } from '../../../../firebase-config/firebase';
import Header2 from '../../../components/Header2';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

const logColDetailed = ({ navigation, route }) => {

    let [isLoading, setIsLoading] = React.useState(true);

    const [logTitle, setlogTitle] = useState('');
    const [logDay, setlogDay] = useState('');

    const [logMood, setlogMood] = useState('');
    const [logContent, setlogContent] = useState('');
    const [date, setlogDate] = useState('');

    const onBack = () => {
        navigation.navigate('logC')
    };

    const toLogCal = () => {
        navigation.navigate('Diary')
    };

    React.useEffect(() => {
        if (isLoading) {
            getDoc(doc(db, "User", authentication.currentUser.uid, "Diary", route.params.paramKey)).then(docData => {
                if (docData.exists()) {
                    //console.log("Document data:", docData.data());
                    setlogDay(docData.data().createdAt);
                    setlogMood(docData.data().moodLog);
                    setlogContent(docData.data().logContent);
                    setlogDate(docData.data().dateString)
                    setIsLoading(false);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        };
    }, []);


    const deleteLog = () => {
        return Alert.alert(
            "Delete Entry",
            "Are you sure?",
            [
                {
                    text: "Delete Forever",
                    onPress: () => {
                        console.log("Delete")
                        deleteDoc(doc(db, "User", authentication.currentUser.uid, "Diary", route.params.paramKey));
                        navigation.navigate('logC')
                    },
                },

                {
                    text: "Cancel", style: "cancel"
                }


            ]
        )

    };

    const updateLog = () => {
        navigation.navigate('UPD', { paramKey: route.params.paramKey })
    };

    return (
        <SafeAreaView>

            <View >
                <Header2 onBackPress={onBack} title="Back" />
            </View>


            <View>
                {
                    isLoading ?
                        <View style={{ marginTop: 140, justifyContent: "center", alignItems: "center", }}>

                            <Image
                                style={{ marginTop: 30, width: 180, height: 180, resizeMode: 'contain', }}
                                source={require('../../../../../MomentProject/src/assets/people3.png')}
                            />
                            <ActivityIndicator size="large" color={colors.white} />
                            <Text style={{ color: colors.white, marginTop: 10 }}>Loading content...</Text>
                            <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                        </View>
                        :
                        <View>

                            <View style={{
                                flexDirection: "row",
                                alignSelf: "flex-end",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                backgroundColor: colors.grey,
                                borderRadius: 40,
                                marginBottom: 20,
                                marginTop: 20,
                                marginRight: 6,
                                width: 190
                            }}>

                                <View style={{ justifyContent: "space-evenly", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end" }}>

                                    <Pressable hitSlop={20} style={styles.container6} onPress={updateLog}>
                                        <SFSymbol
                                            name="pencil"
                                            weight="semibold"
                                            scale="large"
                                            color="white"
                                            size={16}
                                            resizeMode="center"
                                            multicolor={false}
                                            style={{ width: 20, height: 42 }}
                                        />
                                    </Pressable>



                                    <Pressable hitSlop={20} onPress={toLogCal} style={styles.container2}>
                                        <SFSymbol
                                            name="plus"
                                            weight="semibold"
                                            scale="large"
                                            color="white"
                                            size={16}
                                            resizeMode="center"
                                            multicolor={false}
                                            style={{ width: 20, height: 42 }}
                                        />
                                    </Pressable>
                                    <Pressable hitSlop={20} onPress={deleteLog} style={styles.container2}>
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
                                </View>
                            </View>

                            <View style={{
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: "row"
                            }}>
                                <Text style={{ color: colors.white, fontSize: 16 }}>Loggged on:</Text>
                                <Text style={{ color: colors.white, fontSize: 14, fontWeight: "500" }}>{date}</Text>
                                <Text style={styles.SHtitle3}>{logMood}</Text>
                            </View>

                            <View style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end", marginBottom: 10 }}>

                            </View>

                            <View style={styles.container}>
                                <View style={styles.container1}>
                                    <ScrollView>
                                        <Text style={styles.SHtitle1}>{logContent}</Text>
                                    </ScrollView>
                                </View>
                            </View>

                        </View>

                }
            </View>

        </SafeAreaView>


    )

}

export default React.memo(logColDetailed);



