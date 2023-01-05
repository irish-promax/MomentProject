
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication, db } from '../../../../firebase-config/firebase';
import { SFSymbol } from "react-native-sfsymbols";
import Header2 from '../../../components/Header2';
import { collection, query, orderBy, doc, onSnapshot } from "firebase/firestore";
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../utils/colors';



const MoodTracker = () => {
    const navigation = useNavigation();

    let [isLoading, setIsLoading] = React.useState(true);
    let [isRefresh, setIsRefresh] = React.useState(false);
    let [loggedEntry, setloggedEntry] = React.useState([]);
    const [open, setOpen] = useState(false);
    const [sdate, setDate] = useState('');

    //Get Current Date
    var fullDate = new Date();

    let loadList = async () => {
        const docRef = doc(db, "User", authentication.currentUser.uid,)
        const colRef = collection(docRef, "Mood")
        const sorted = await query(colRef, orderBy("createdAt", "desc"))

        const unsubscribe = onSnapshot(sorted, (querySnapshot) => {
            let loggedEntry = [];
            querySnapshot.forEach((doc) => {
                let entry = doc.data();
                entry.id = doc.id;
                loggedEntry.push(entry);
            });

            //console.log(loggedEntry);
            setloggedEntry(loggedEntry);
            setIsLoading(false);
            setIsRefresh(false);
        });
    }

    if (isLoading) {
        loadList();
    }

    const onBack = () => {
        navigation.navigate('Tabs')
    };

    return (
        <SafeAreaView>

            <View >
                <Header2 onBackPress={onBack} title="Back" />
            </View>

            <View style={{ marginTop: 20, marginBottom: 10, flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.SHtitle4}>Drag down to refresh</Text>
                <SFSymbol name="arrow.clockwise.circle.fill" color="white" size={14} style={{ width: 42, height: 42 }} />
            </View>

            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold", color: colors.white }}>Mood History</Text>

            </View>

            <View style={{}}>
                {isLoading ?

                    <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", }}>

                        <Image
                            style={{ marginTop: 20, width: 180, height: 180, resizeMode: 'contain', }}
                            source={require('../../../../../MomentProject/src/assets/collection2.png')}
                        />
                        <ActivityIndicator size="large" color={colors.white} />
                        <Text style={{ color: colors.white, marginTop: 10 }}>Fetching collection...</Text>
                        <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                    </View>

                    :

                    <FlatList
                        ListFooterComponent={<View style={{ height: 350 }} />}
                        data={loggedEntry}
                        refreshing={isRefresh}
                        onRefresh={() => {
                            loadList();
                            setIsRefresh(true);
                        }}
                        renderItem={({ item }) => (
                            <View>

                                <View style={styles.listcontainer}>
                                    <View style={styles.Lcontainer2}>
                                        <Text style={styles.SHtitle3}>{item.moodLog}</Text>
                                    </View>
                                    <View>
                                        <View style={styles.Lcontainer3}>
                                            <Text style={{ color: colors.white }}>{item.dateString}</Text>
                                        </View>

                                        {(() => {
                                            switch (item.moodLog) {
                                                case '🥳':
                                                    return <View>
                                                        <Text style={styles.SHtitle2}>Feeling Happy</Text>
                                                    </View>

                                                case '🙁':
                                                    return <View>
                                                        <Text style={styles.SHtitle2}>Feeling Sad</Text>
                                                    </View>
                                                case '🥱':
                                                    return <View>
                                                        <Text style={styles.SHtitle2}>Feeling Bored</Text>
                                                    </View>
                                                case '😡':
                                                    return <View>
                                                        <Text style={styles.SHtitle2}>Feeling Mad</Text>
                                                    </View>
                                                case '😰':
                                                    return<View>
                                                        <Text style={styles.SHtitle2}>Felling Anxious</Text>
                                                    </View>

                                                case '😲':
                                                    return <View>
                                                        <Text style={styles.SHtitle2}>Feeling Shock</Text>
                                                    </View>
                                                default:
                                                    return null
                                            }
                                        })()}
                                    </View>
                                </View>
                                <Text style={{ color: colors.white, marginLeft: 70, fontSize: 18 }}>|</Text>
                                <Text style={{ color: colors.white, marginLeft: 70, fontSize: 18 }}>|</Text>


                            </View>

                        )}
                    />

                }

            </View>


        </SafeAreaView>
    )
}

export default React.memo(MoodTracker);