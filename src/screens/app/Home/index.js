import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import { authentication, db } from '../../../../firebase-config/firebase';
import { signOut } from "firebase/auth";
import { SFSymbol } from "react-native-sfsymbols";
import { LineChart } from "react-native-chart-kit";
import { colors } from '../../../utils/colors';
import { addDoc, serverTimestamp, collection, query, doc, onSnapshot, where } from "firebase/firestore";
import RadioButton from '../../../components/RadioButton';
import { LinkPreview } from '@flyerhq/react-native-link-preview';


const Home = ({ navigation }) => {

    const [option, setOption] = useState('');

    const mood = [
        { value: '🥳' },
        { value: '🙁' },
        { value: '🥱' },
        { value: '😡' },
        { value: '😰' },
        { value: '😲' },
    ];

    const toDiary = () => {
        navigation.navigate('Diary')
    }

    const toCal = () => {
        navigation.navigate('Cal')
    }

    const toBuddy = () => {
        navigation.navigate('Buddy')
    }

    const toMT = () => {
        navigation.navigate('MT')
    }

    const toCollection = () => {
        navigation.navigate('logC')
    }

    const onSignOut = () => {
        signOut(authentication)
        navigation.navigate('LO')
        console.log("UDAH KELUAR");

    }

    const Out = () => {
        signOut(authentication)
            .then((re) => {
                setIsSignedIn(false);
                navigation.navigate('Splash')
            })
    }

    const sendToDB = async () => {
        try {

            if (option == "") {
                alert("No mood where chosen.");
            }
            else{

            //Get Current Date
            var fullDate = new Date();
            var stringDate = fullDate.toLocaleString('en-GB');
            var stringDateOnly = fullDate.toLocaleDateString('en-GB');

            //Get Current Date
            var date = new Date().getDate();

            //Get Current Month
            var month = new Date().getMonth() + 1;

            //Get Current Year
            var year = new Date().getFullYear();

            //Get Current Time Hours
            var hours = new Date().getHours();

            //Get Current Time Minutes
            var min = new Date().getMinutes();


            const docRef1 = doc(db, "User", authentication.currentUser.uid,)
            const colRef1 = collection(docRef1, "Mood")
            addDoc(colRef1, {
                userID: authentication.currentUser.uid,
                dateString: stringDate,
                moodLog: option,
                fDate: fullDate,
                createdAt: serverTimestamp(),
                dateLog: date,
                monthLog: month,
                yearLog: year,
                dateonly: stringDateOnly
            });

            console.log("Document written with ID: ", docRef1.id);
            console.log("Log Sucessful: ", hours, ":", min);
            Alert.alert("Mood Saved.");

        }
    }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //Get Current Month
    var month = new Date().getMonth() + 1;

    //Get Data from DB
    const docRef = doc(db, "User", authentication.currentUser.uid,)
    const colRef = collection(docRef, "Mood")
    const sorted = query(colRef, where("monthLog", "==", month))

    let [isHappy, setIsHappy] = React.useState();
    let [isSad, setIsSad] = React.useState();
    let [isBoring, setIsBoring] = React.useState();
    let [isMad, setIsMad] = React.useState();
    let [isWorry, setIsWorry] = React.useState();
    let [isShock, setIsShock] = React.useState();
    let [isLoading, setIsLoading] = React.useState(true);

    const unsubscribe = onSnapshot(sorted, (querySnapshot) => {

        let countHappy = 0;
        let countSad = 0;
        let countBoring = 0;
        let countMad = 0;
        let countWorry = 0;
        let countShock = 0;

        querySnapshot.forEach((doc) => {
            let entry = doc.data();
            entry.id = doc.id;


            if (entry.moodLog == '🥳') {
                countHappy = countHappy + 1;
            }

            if (entry.moodLog == '🙁') {
                countSad++;
            }

            if (entry.moodLog == '🥱') {
                countBoring++;
            }

            if (entry.moodLog == '😡') {
                countMad++;
            }

            if (entry.moodLog == '😰') {
                countWorry++;
            }

            if (entry.moodLog == '😲') {
                countShock++;
            }

        });
        setIsHappy(countHappy);
        setIsSad(countSad);
        setIsBoring(countBoring);
        setIsMad(countMad);
        setIsWorry(countWorry);
        setIsShock(countShock);
        setIsLoading(false);
    });

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", marginTop: 50 }}>
                    <Text style={styles.Htitle1}>Moment</Text>
                    <View style={{ width: 185 }}></View>
                    <Pressable onPress={onSignOut} hitSlop={20}>
                        <SFSymbol
                            name="rectangle.portrait.and.arrow.right"
                            weight="bold"
                            scale="large"
                            color="white"
                            size={16}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={styles.container1}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontSize: 16,
                        paddingHorizontal: 8,
                        fontWeight: "bold",
                        color: colors.white,
                        justifyContent: "space-evenly",
                        marginBottom: 15
                    }}>How are you feeling today? </Text>

                    <View style={{
                        backgroundColor: "#324A5F",
                        borderRadius: 30,
                        marginBottom: 10,
                        height: 70,
                        width: 350,
                        justifyContent: "center",
                        alignSelf: "center"
                    }}>

                        <View style={{
                            fontSize: 20,
                            alignSelf: "center",
                            color: colors.white,
                            justifyContent: "space-evenly",
                        }}>
                            <RadioButton data={mood} onSelect={(value) => setOption(value)} onChangeText={option => setOption(option)} />
                        </View>
                    </View>

                    <Pressable onPress={sendToDB} hitSlop={20} style={{
                        backgroundColor: "#121619",
                        borderRadius: 30,
                        justifyContent: "center",
                        flexDirection: "row",
                        height: 40,
                        width: 150,
                        marginTop: 0,
                        alignItems: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        marginRight: 10,
                        marginBottom: 15,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: colors.white,
                            justifyContent: "space-evenly",
                            paddingLeft: 15

                        }}>Save mood</Text>
                        <SFSymbol
                            name="arrow.forward"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={14}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                    {/* Diary button @ Home */}
                    <Pressable onPress={toDiary} style={styles.container3} hitSlop={20}>
                        <SFSymbol
                            name="bookmark.fill"
                            weight="semibold"
                            scale="large"
                            color="#C20805"
                            size={28}
                            resizeMode="center"
                            multicolor={false}
                            style={{
                                width: 42, height: 42}}
                        />
                        <Text style={styles.SHtitle}>Diary</Text>
                    </Pressable>

                    {/* Collection button @ Home */}
                    <Pressable onPress={toCollection} style={styles.container3} hitSlop={20}>
                        <SFSymbol
                            name="book.closed.fill"
                            weight="semibold"
                            scale="large"
                            color="#3F88C5"
                            size={28}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Collection</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    {/* VBuddy button @ Home */}
                    <Pressable style={styles.container5} hitSlop={20} onPress={toBuddy}>
                        <SFSymbol
                            name="person.crop.square.fill"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={28}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Buddy</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    {/* VBuddy button @ Home */}
                    <Pressable style={styles.container5} hitSlop={20} onPress={toMT} >
                        <SFSymbol
                            name="face.smiling.inverse"
                            weight="semibold"
                            scale="large"
                            color="#E6AF2E"
                            size={28}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Mood</Text>
                    </Pressable>
                </View>

                {isLoading ?

                    <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center", }}>
                        <ActivityIndicator size="large" color={colors.white} />
                        <Text style={{ color: colors.white, marginTop: 10 }}>Fetching mood...</Text>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: colors.white, marginTop: 5, marginBottom: 35 }}>It will take a few seconds</Text>
                    </View>

                    :

                    <View style={{ width: Dimensions.get('screen').width, backgroundColor: "#FBAF00", borderRadius: 40, marginTop: 20, paddingTop: 20 }}>
                        <Text style={styles.SHtitle}>Mood Tracker</Text>

                        <View style={{ borderRadius: 30, paddingBottom: 50, alignSelf: "center", alignItems: "center", alignContent: "center", backgroundColor: "#243E36", marginTop: 20 }}>
                            <Text style={{ marginTop: 35, fontSize: 16, color: colors.white, }}>As of:</Text>
                            <View style={{ marginTop: 5 }}>

                                {(() => {
                                    if (month == 1) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>January</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 2) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>February</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 3) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>March</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 4) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>April</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 5) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>May</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 6) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>June</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 7) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>July</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 8) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>August</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 9) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>September</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 10) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>Ocotber</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 11) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>November</Text>
                                            </View>
                                        )
                                    }

                                    if (month == 12) {
                                        return (
                                            <View>
                                                <Text style={styles.SHtitle3}>December</Text>
                                            </View>
                                        )
                                    }
                                })()}
                            </View>


                            <LineChart
                                data={{
                                    labels: ["🥳", "🙁", "🥱", "😡", "😰", "😲"],
                                    datasets: [
                                        {
                                            data: [
                                                isHappy,
                                                isSad,
                                                isBoring,
                                                isMad,
                                                isWorry,
                                                isShock
                                            ]
                                        }
                                    ],
                                }}
                                width={340} // from react-native
                                height={250}
                                yAxisInterval={1} // optional, defaults to 1

                                chartConfig={{
                                    backgroundColor: colors.white,
                                    backgroundGradientFrom: colors.blue,
                                    backgroundGradientTo: colors.blue,
                                    decimalPlaces: 1, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    propsForDots: {
                                        r: "4",
                                        strokeWidth: "4",
                                        stroke: "white"
                                    }
                                }}
                                bezier
                                style={{


                                    borderRadius: 10,
                                    padding: 5, alignSelf: "center",
                                    alignContent: "center",
                                    alignItems: "center",

                                }}
                            />
                        </View>

                        <View style={{ marginTop: 10, marginBottom: 5 }}>
                            {(() => {

                                if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == 0) {
                                    return (
                                        <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                            <Text style={styles.title}>Your mood tracker is empty.</Text>

                                        </View>
                                    )
                                }
                                else {
                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isHappy) {
                                        return (


                                            <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>We're glad to see you happy this month!</Text>
                                                <Text style={styles.title}>You may want to continue the progress by:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.lifehack.org/articles/money/30-absolutely-free-activities-that-can-make-you-happy-today.html' />
                                            </View>

                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isSad) {
                                        return (
                                            <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>You went through a lot of sadness this month. You should find something fun!</Text>
                                                <Text style={styles.title}>OR</Text>
                                                <Text style={styles.title}>You may use this test for further help:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.ramlimusa.com/questionnaires/depression-anxiety-stress-scale-dass-21-bahasa-malaysia/' />
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isBoring) {
                                        return (
                                            <View style={{ bbackgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>You went through a lot of boringness this month. You should find something fun!</Text>
                                                <Text style={styles.title}>OR</Text>
                                                <Text style={styles.title}>For further help:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.lifehack.org/articles/money/30-absolutely-free-activities-that-can-make-you-happy-today.html' />
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isMad) {
                                        return (
                                            <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>You went through a lot this month. You should find something fun to overcome!</Text>
                                                <Text style={styles.title}>OR</Text>
                                                <Text style={styles.title}>For further help:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434' />
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isWorry) {
                                        return (
                                            <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>What makes you worry? Go dump all you worries with your V-Buddy!!</Text>
                                                <Text style={styles.title}>OR</Text>
                                                <Text style={styles.title}>You may use this test for further help:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.ramlimusa.com/questionnaires/depression-anxiety-stress-scale-dass-21-bahasa-malaysia/' />
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isShock) {
                                        return (
                                            <View style={{ backgroundColor: "#FFFDFD", marginBottom: 25, borderRadius: 30, marginTop: 20, paddingBottom: 40, marginHorizontal: 10 }}>
                                                <Text style={styles.title}>What makes you shocked a lot? Go dump all you shockness with your V-Buddy!</Text>
                                                <Text style={styles.title}>OR</Text>
                                                <Text style={styles.title}>You may use this test for further help:</Text>
                                                <LinkPreview style={{ color: colors.blue }} text='https://www.ramlimusa.com/questionnaires/depression-anxiety-stress-scale-dass-21-bahasa-malaysia/' />
                                            </View>
                                        )
                                    }

                                }

                            })()}
                        </View>
                    </View>
                }
            </View>
        </ScrollView>
    )
}

export default React.memo(Home);