import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Text, Image, View, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SFSymbol } from 'react-native-sfsymbols';
import { authentication, db } from '../../../../firebase-config/firebase';
import { styles } from './styles';
import { colors } from '../../../utils/colors';
import SButton from '../../../components/SButton';

const updateLog = ({ navigation, route }) => {

    const [logTitle, setlogTitle] = useState('');
    const [logContent, setlogContent] = useState('');
    const [logDay, setlogDay] = useState('');
    let [isLoading, setIsLoading] = React.useState(true);
    const [logMood, setlogMood] = useState('');
    
    
    React.useEffect(() => {
        if (isLoading) {
            getDoc(doc(db, "User", authentication.currentUser.uid, "Diary", route.params.paramKey)).then(docData => {
                if (docData.exists()) {
                    //console.log("Document data:", docData.data());
                    setlogTitle(docData.data().log_Title);
                    setlogContent(docData.data().logContent);
                    setlogDay(docData.data().createdAt);
                    setlogMood(docData.data().moodLog);
                
                    setIsLoading(false);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        };
    }, []);

    const toUpdate = () => {

        docRef = doc(db, "User", authentication.currentUser.uid, "Diary", route.params.paramKey);
        const data = {
            log_Title: logTitle,
            logContent: logContent
        };

        updateDoc(docRef, data)
            .then(docRef => {
                console.log("Value of an Existing Document Field has been updated");
                navigation.navigate("logC")
            })
            .catch(error => {
                console.log(error);
            })
    }

    const toCollection = () => {
        navigation.navigate("logC");
    }

    const onBack = () => {
        navigation.navigate('Tabs')
    }

    const mood = [
        { value: '🥳' },
        { value: '🙁' },
        { value: '🥱' },
        { value: '😡' },
        { value: '😰' },
        { value: '😲' },

    ];

    const toLogCol = () => {
        navigation.navigate('logC')
    };

    return (
        <SafeAreaView >

            <View>

                {isLoading ?

                    <View style={{ marginTop: 200, justifyContent: "center", alignItems: "center", }}>

                        <Image
                            style={{ marginTop: 30, width: 180, height: 180, resizeMode: 'contain', }}
                            source={require('../../../../../MomentProject/src/assets/people2.png')}
                        />
                        <ActivityIndicator size="large" color={colors.white} />
                        <Text style={{ color: colors.white, marginTop: 10 }}>Loading content...</Text>
                        <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                    </View>

                    :

                    <View>


                        <View style={{ marginBottom: 8, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-between", alignSelf: "flex-end" }}>
                            <Pressable hitSlop={20} onPress={toLogCol} style={styles.container3}>
                                <Text style={styles.SHtitle2}>Collection</Text>
                                <SFSymbol
                                    name="book.closed.fill"
                                    weight="semibold"
                                    scale="large"
                                    color="white"
                                    size={16}
                                    resizeMode="center"
                                    multicolor={false}
                                    style={{ width: 20, height: 20 }}
                                />
                            </Pressable>
                        </View>
                        <Text style={styles.SHtitle3}>Loggged on:</Text>
                        <View style={{ justifyContent: "space-evenly", flexDirection: "row", alignItems: "flex-end", alignContent: "flex-end", marginBottom: 10 }}>
                            <Text style={styles.SHtitle2}>{logDay.toDate().toLocaleDateString()}</Text>
                            <Text style={styles.SHtitle2}>{logDay.toDate().toLocaleTimeString()}</Text>
                            <Text style={styles.SHtitle2}>{logMood}</Text>
                        </View>

                        <View style={styles.container1}>
                            <View>
                                <TextInput
                                    style={styles.title}
                                    value={logTitle}
                                    onChangeText={logTitle => setlogTitle(logTitle)}
                                    placeholder="Summarize you day in one word here..."
                                    placeholderTextColor={"#1E2D2F"}
                                />
                            </View>

                            <View>
                                <TextInput
                                    placeholder="Dear journal..."
                                    placeholderTextColor={"#1E2D2F"}
                                    numberOfLines={10}
                                    multiline={true}
                                    style={styles.Log}
                                    value={logContent}
                                    onChangeText={logContent => setlogContent(logContent)}
                                />
                            </View>

                            <View style={{ alignSelf: "center", flexDirection: "row" }}>
                                <SButton onPress={toUpdate} style={styles.button} title='Update to collection →' />
                            </View>
                        </View>
                    </View>
                }

            </View>
        </SafeAreaView>
    )

}

export default React.memo(updateLog);

/*

let [isLoading, setIsLoading] = React.useState(true);
    
    const [logTitle,setlogTitle] = useState('');
    const [logDay,setlogDay] = useState('');
    const [logMonth,setlogMonth] = useState('');
    const [logYear,setlogYear] = useState('');
    const [logMood,setlogMood] = useState('');
    const [logContent,setlogContent] = useState('');

    const onBack = () => {
        navigation.navigate('logC')
    };

    const toLogCal = () => {
        navigation.navigate('Diary')
    };

    React.useEffect(() => {
        if(isLoading){
            getDoc(doc(db,"User", authentication.currentUser.uid, "Diary",route.params.paramKey)).then(docData =>{
                if (docData.exists()) {
                    //console.log("Document data:", docData.data());
                    setlogTitle(docData.data().log_Title);
                    setlogDay(docData.data().dateLog);
                    setlogMonth(docData.data().monthLog);
                    setlogYear(docData.data().yearLog);
                    setlogMood(docData.data().moodLog);
                    setlogContent(docData.data().logContent);
                    setIsLoading(false);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        };
    },[]);


    const deleteLog = () => {
        return Alert.alert(
            "Delete Entry",
            "Are you sure?",
            [
                {
                    text:"Delete Forever",
                    onPress:()=>{
                        console.log("Delete")
                        deleteDoc(doc(db,"User", authentication.currentUser.uid, "Diary",route.params.paramKey));
                        navigation.navigate('logC')
                    },
                },
                {
                    text:"Delete in 30 days",
                },

                {
                    text: "Cancel", style: "cancel"
                }


            ]
        )
        
    };

    const updateLog = () => {
        navigation.navigate('logC',{paramKey:route.params.paramKey}) 
    };

    return(
        <SafeAreaView>

            <View >
                <Header2 onBackPress={onBack} title = "Back"/>
            </View>
            
                <Text>{route.params.paramKey}</Text>
 

        </SafeAreaView>

        
    )








                  <View style={{paddingHorizontal:15}} >
                        <View style={styles.container2}>
                            <View style={styles.SHtitle}>                            
                                <RadioButton data={mood} onSelect={(value) => setOption(value)} onChangeText={option=>setOption(option)} />
                            </View>
                        </View>
                    </View>


               
               

        
                
*/