
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Image, Dimensions } from 'react-native';
import { styles } from './styles';
import { authentication, db, storage } from '../../../../firebase-config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import SButton from '../../../components/SButton';
import Header2 from '../../../components/Header2';
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import RadioButton from '../../../components/RadioButton';
import DatePicker from 'react-native-date-picker'
import { SFSymbol } from 'react-native-sfsymbols';
import * as ImagePicker from "react-native-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { colors } from '../../../utils/colors';


const LogDiary = ({ navigation }) => {

    const [logVal, setLogVal] = useState('');
    const [option, setOption] = useState('');
    const [logTitle, setlogTitle] = useState('');
    const [sdate, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [imageGal, setImageGal] = useState('');
    const [imageCam, setImageCam] = useState('');
    const [journalPromp, setjournalPromp] = useState('Do not know what to write?');

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

    //Get Current Time Seconds
    var sec = new Date().getSeconds();

    //Get Current Date
    var fullDate = new Date();

    const mood = [
        { value: '🥳' },
        { value: '🙁' },
        { value: '🥱' },
        { value: '😡' },
        { value: '😰' },
        { value: '😲' },
    ];

    words = [
        { text: 'What prayers did God answer?', key: 1 },
        { text: 'What is an attribute of God you came to know more clearly?', key: 2 },
        { text: 'What do you appreciate about today?', key: 3 },
        { text: 'A time you dont want to forget', key: 5 },
        { text: 'What did you rush or do in a hurry?', key: 6 },
        { text: 'Best thing about this week so far?', key: 7 },
        { text: 'What made you feel sick?', key: 8 },
        { text: 'Tell a story about a summer memory.Tell a story about a summer memory.', key: 9 },
        { text: 'What was more trouble than it should have been?', key: 10 },
        { text: 'What will change eventually?', key: 11 },
        { text: 'Who brings good energy into your life and how?', key: 12 },
        { text: "What's something from your past that whenever you think of it, you laugh?", key: 13 },
        { text: "What scares you? Make a list and then go on a walk.", key: 14 },
        { text: "What brings you joy?", key: 15 },
        { text: "What was a highlight from last year?", key: 16 },
        { text: "How can you do more?", key: 17 },
        { text: "What happened at 10am today?", key: 18 },
        { text: "Your longest road trip.", key: 19 },
        { text: "A concert you have been to.", key: 20 },
        { text: "What is your greatest strength?", key: 21 },
        { text: "What do you love about your body right now?", key: 21 },
        { text: "What are you sure of?", key: 22 },
        { text: "Funniest thing that happened this week.", key: 23 },
        { text: "What caught you off guard?", key: 24 },
        { text: "What are you are proud of this month?", key: 25 },
        { text: "What are you holding onto that you need to let go of?", key: 26 },
        { text: "Three things you do well.", key: 27 },
        { text: "Advice you'd give to someone else your age.", key: 28 },
        { text: "Three of your greatest talents/abilities.", key: 29 },
        { text: "List movies that make you cry.", key: 30 },
    ];

    const toCollection = (props) => {
        navigation.navigate("logC");
    }

    const sendToDB = async () => {

        if ( option == "" || logVal == "") {
            alert("You left the form empty\nPlease complete the form.");
        }
        else {
            try {
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

                const docRef = doc(db, "User", authentication.currentUser.uid,)
                const colRef = collection(docRef, "Diary")
                addDoc(colRef, {
                    userID: authentication.currentUser.uid,
                    prevDate: sdate,
                    log_Title: logTitle,
                    logContent: logVal,
                    moodLog: option,
                    fDate: fullDate,
                    dateLog: date,
                    monthLog: month,
                    yearLog: year,
                    timeLog_hour: hours,
                    timeLog_min: min,
                    whoLog: authentication.currentUser.email,
                    createdAt: serverTimestamp(),
                    dateString: stringDate,
                    dateonly: stringDateOnly

                });

                const docRef1 = doc(db, "User", authentication.currentUser.uid,)
                const colRef1 = collection(docRef1, "Mood")
                addDoc(colRef1, {
                    userID: authentication.currentUser.uid,
                    moodLog: option,
                    fDate: fullDate,
                    createdAt: serverTimestamp(),
                    dateLog: date,
                    monthLog: month,
                    yearLog: year,
                    dateString: stringDate,
                    dateonly: stringDateOnly

                });

                console.log("Document written with ID: ", docRef.id);
                console.log("Log Sucessful: ", hours, ":", min);
                navigation.navigate("logC");
            }
            catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    const onBack = () => {
        navigation.navigate('Tabs')
    }

    const toLogCol = () => {
        navigation.navigate('logC')
    };

    const openCam = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }

        ImagePicker.launchCamera(option, (res) => {
            if (res.didCancel) {
                console.log("User cancel")
            }

            else if (res.errorCode) {
                console.log(res.e)
            }
            else {

                const data = res.assets[0];
                setImageCam(data);
                console.log(data);


            }
        })
    }

    const openGal = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }

        ImagePicker.launchImageLibrary(option, (res) => {
            if (res.didCancel) {
                console.log("User cancel")
            }

            else if (res.errorCode) {
                console.log(res.e)
            }
            else {

                const data = res.assets[0];
                setImageGal(data);
                console.log(data);

                const metadata = {
                    contentType: 'image/jpeg'
                };

                // Upload file and metadata to the object 'images/mountains.jpg'
                const storageRef = ref(storage, 'images/' + data.fileName);
                const uploadTask = uploadBytesResumable(storageRef, imageGal, metadata);

                console.log(storage, 'images/' + data.fileName);
                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect error.serverResponse
                                break;
                        }
                    },
                    () => {
                        // Upload completed successfully, now we can get the download URL
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                        });
                    }
                );

            }
        })
    }

    const changeTextValue = () => {
        const len = words.length;
        setjournalPromp(words[Math.floor(Math.random() * len)].text)
    }


    return (
        <SafeAreaView >
            <View >
                <Header2 onBackPress={onBack} title="Back" />
            </View>

            <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingTop: 15 }}>
                <Text style={styles.dateText1}> {date} / {month} / {year} </Text>
                <Text style={styles.dateText1}> | </Text>
                <Text style={styles.dateText1}> {hours}:{min}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Pressable title="Open" onPress={() => setOpen(true)}>
                    <Text style={styles.SHtitle1}>🗓 Select date</Text>
                </Pressable>

                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={fullDate}
                    maximumDate={sdate}
                    onConfirm={(sdate) => {
                        setOpen(false)
                        setDate(sdate)
                    }}
                    onCancel={() => { setOpen(false) }} />
            </View>

            <View style={{ marginBottom: 8, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.SHtitle2}>How are you feeling today? </Text>
                <Pressable hitSlop={20} onPress={toLogCol} style={styles.container3}>
                    <Text style={styles.SHtitle3}>Collection</Text>
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
            <ScrollView >
                <View>

                    <View style={{ paddingHorizontal: 15 }} >
                        <View style={styles.container2}>
                            <View style={styles.SHtitle}>
                                <RadioButton data={mood} onSelect={(value) => setOption(value)} onChangeText={option => setOption(option)} />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: '#324A5F',
                        flexDirection: 'row',
                        marginBottom: 20,
                        marginTop:20,
                        borderRadius: 20,
                        height: 70,
                        
                        width: Dimensions.get('window').width,
                        alignSelf: "center", alignContent: "center", alignItems: "center",

                    }}>
                        <Text style={styles.SHtitle4}>{journalPromp}</Text>
                        <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", justifyContent: "space-between", position: 'absolute', right: 12, marginLeft: 10, top: 18, backgroundColor: colors.blue, borderRadius: 10, height: 35, width: 40, paddingTop: 7 }}>
                            <Pressable onPress={changeTextValue}><SFSymbol
                                name="arrow.triangle.2.circlepath"
                                weight="bold"
                                scale="large"
                                color="white"
                                size={16}
                                resizeMode="center"
                                multicolor={false}
                                style={{ width: 20, height: 20 }}
                            /></Pressable>
                        </View>
                    </View>




                </View>

                <View style={styles.container1}>


                    <View>
                        <TextInput
                        returnKeyType='done'
                            placeholder="Dear journal..."
                            placeholderTextColor={"#1E2D2F"}
                            numberOfLines={10}
                            multiline={true}
                            style={styles.Log}
                            value={logVal}
                            onChangeText={logVal => setLogVal(logVal)}
                        />
                    </View>


                    <View style={{ alignSelf: "center", flexDirection: "row" }}>
                        <SButton title='Save to collection' onPress={sendToDB} />
                    </View>

                </View>
                <View style={{ height: 100 }} />
            </ScrollView>

        </SafeAreaView>
    )
}
export default React.memo(LogDiary);


/*  
                    <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", alignSelf: "center", marginBottom: 15 }}>
                        <View>
                            {

                                imageGal ?
                                    <Image
                                        source={{ uri: imageGal.uri }}
                                        style={{ borderRadius: 10, width: Dimensions.get('window').width, height: Dimensions.get('window').height, }}
                                    />
                                    :
                                    <View>
                                        <Pressable style={styles.container3} onPress={openGal}>
                                            <Text style={styles.SHtitle3}>Select Image</Text>
                                        </Pressable>
                                    </View>
                            }
                        </View>
                    </View>
                    */