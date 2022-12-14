import * as React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication, db } from '../../../../firebase-config/firebase';
import { SFSymbol } from "react-native-sfsymbols";
import Header2 from '../../../components/Header2';
import { collection, query, orderBy, doc, onSnapshot } from "firebase/firestore";
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../utils/colors';


const Buddy = ({ }) => {

    const navigation = useNavigation();
    let [isLoading, setIsLoading] = React.useState(true);
    let [isRefresh, setIsRefresh] = React.useState(false);
    let [loggedEntry, setloggedEntry] = React.useState([]);

    let loadList = async () => {


        const docRef = doc(db, "User", authentication.currentUser.uid,)
        const colRef = collection(docRef, "Buddy")
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

    const toLogCal = () => {
        navigation.navigate('Diary')
    };

    const onBack = () => {
        navigation.navigate('Tabs')
    };

    const toLogB = () => {
        navigation.navigate('LBuddy')
    };

    return (
        <SafeAreaView>

            <View >
                <Header2 onBackPress={onBack} title="Back" />
            </View>

            <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.SHtitle4}>Drag down to refresh</Text>
                <SFSymbol name="arrow.clockwise.circle.fill" color="white" size={14} style={{ width: 42, height: 42 }} />
            </View>

            {isLoading ?
                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", }}>

                    <Image
                        style={{ marginTop: 20, width: 180, height: 180, resizeMode: 'contain', }}
                        source={require('/Users/imanirishdaniel/Desktop/MomentProject/src/assets/collection2.png')}
                    />
                    <ActivityIndicator size="large" color={colors.white} />
                    <Text style={{ color: colors.white, marginTop: 10 }}>Fetching collection...</Text>
                    <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                </View>

                :

                <View >
                    <View style={{ flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end", alignSelf: "flex-end" }}>
                        <View style={{
                            flexDirection: "row",
                            alignSelf: "flex-end",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            backgroundColor: colors.orange,
                            borderRadius: 40,
                            marginBottom: 20,
                            marginTop: 20,
                            margin: 10,
                            width: 45,

                        }}>
                            <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end" }}>
                                <Pressable hitSlop={20} style={styles.container6} onPress={onBack} >
                                    <SFSymbol
                                        name="house.fill"
                                        weight="semibold"
                                        scale="large"
                                        color="white"
                                        size={16}
                                        resizeMode="center"
                                        multicolor={false}
                                        style={{ width: 20, height: 42, marginLeft: 20, marginRight: 20 }}
                                    />
                                </Pressable>


                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignSelf: "flex-end",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            backgroundColor: colors.orange,
                            borderRadius: 40,
                            marginBottom: 20,
                            marginTop: 20,
                            margin: 10,
                            width: 45
                        }}>
                            <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end" }}>
                                <Pressable hitSlop={20} style={styles.container6} onPress={toLogB}>
                                    <SFSymbol
                                        name="plus"
                                        weight="bold"
                                        scale="large"
                                        color="white"
                                        size={16}
                                        resizeMode="center"
                                        multicolor={false}
                                        style={{ width: 20, height: 42, marginLeft: 20, marginRight: 20 }}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", }}>
                        <FlatList
                            ListFooterComponent={<View style={{ height: 400 }} />}
                            style={{ flex: 1 }}
                            data={loggedEntry}
                            refreshing={isRefresh}
                            onRefresh={() => {
                                loadList();
                                setIsRefresh(true);
                            }}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('LBD', { paramKey: item.id })
                                    }}>
                                    <View style={styles.listcontainer}>
                                        <View style={{
                                            flexDirection: "column", alignContent: "center",
                                            alignSelf: "center", justifyContent: "center", alignItems: "center",
                                        }}>

                                            {(() => {
                                                switch (item.buddyChar) {
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
                                            <Text style={styles.SHtitle2}>{item.buddyChar}</Text>
                                          
                                        </View>

                                        <View style={{
                                            flexDirection: "column", alignSelf: "center"
                                        }}>

                                        </View>
                                    </View>
                                </Pressable>
                            )}

                        />
                    </View>
                </View>
            }

        </SafeAreaView>
    )
}

export default React.memo(Buddy);


/* =========== Reserved Code ===========   
          
*/