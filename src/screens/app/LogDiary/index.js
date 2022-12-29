
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


const LogDiary = ({ navigation }) => {

    const [logVal, setLogVal] = useState('');
    const [option, setOption] = useState('');
    const [logTitle, setlogTitle] = useState('');
    const [sdate, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [imageGal, setImageGal] = useState('');
    const [imageCam, setImageCam] = useState('');

    //test to push and pull
    //hellollll

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

    const toCollection = (props) => {
        navigation.navigate("logC");
    }

    const sendToDB = async () => {

        if (logTitle == "" || option == "" || logVal == "") {
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
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                <View>

                    <View style={{ paddingHorizontal: 15 }} >
                        <View style={styles.container2}>
                            <View style={styles.SHtitle}>
                                <RadioButton data={mood} onSelect={(value) => setOption(value)} onChangeText={option => setOption(option)} />
                            </View>
                        </View>
                    </View>


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
