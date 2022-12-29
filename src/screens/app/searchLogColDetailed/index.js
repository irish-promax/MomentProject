
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './style.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication, db } from '../../../../firebase-config/firebase';
import { SFSymbol } from "react-native-sfsymbols";
import Header2 from '../../../components/Header2';
import { collection, query, orderBy, doc, onSnapshot, where } from "firebase/firestore";
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../utils/colors';
import DatePicker from 'react-native-date-picker';


const logCollection = ({ route }) => {
    const navigation = useNavigation();

    let [isLoading, setIsLoading] = React.useState(true);
    let [isRefresh, setIsRefresh] = React.useState(false);
    let [loggedEntry, setloggedEntry] = React.useState([]);


    console.log(route.params.paramKey);

    let loadList = async () => {
        const docRef = doc(db, "User", authentication.currentUser.uid,)
        const colRef = collection(docRef, "Diary")
        const sorted = await query(colRef, where("dateonly", "==", route.params.paramKey))

        const unsubscribe = onSnapshot(sorted, (querySnapshot) => {
            let loggedEntry = [];
            querySnapshot.forEach((doc) => {
                let entry = doc.data();
                entry.id = doc.id;
                loggedEntry.push(entry);
            });

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
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('LCD', { paramKey: item.id })
                                }}>
                                <View style={styles.listcontainer}>
                                    <View style={styles.Lcontainer2}>
                                        <Text style={styles.SHtitle3}>{item.moodLog}</Text>
                                    </View>

                                    <View style={styles.Lcontainer1}>
                                        <Text style={styles.SHtitle2}>{item.log_Title}</Text>
                                    </View>

                                    <View style={styles.Lcontainer3}>
                                        <Text style={styles.SHtitle2}>{item.dateString}</Text>
                                    </View>

                                    <View style={styles.Lcontainer3}>
                                        <SFSymbol name="arrow.right.square.fill" weight="semibold" color="white" size={18} style={{ width: 42, height: 42 }} />
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                }
            </View>

        </SafeAreaView>
    )
}

export default React.memo(logCollection);