import React from 'react';
import { View, Text, Pressable, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { authentication, db } from '../../../../firebase-config/firebase';
import { signOut } from "firebase/auth";
import { SFSymbol } from "react-native-sfsymbols";
import { LineChart } from "react-native-chart-kit";
import { colors } from '../../../utils/colors';
import { collection, query, doc, onSnapshot, where } from "firebase/firestore";

const Home = ({ navigation }) => {

    const toDiary = () => {
        navigation.navigate('Diary')
    }

    const toCal = () => {
        navigation.navigate('Cal')
    }

    const toBuddy = () => {
        navigation.navigate('Buddy')
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


    //labels: ["🥳", "🙁", "🥱", "😡", "😰", "😲"]

    //Get Current Month
    var month = new Date().getMonth() + 1;

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
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    {/* Diary button @ Home */}
                    <Pressable onPress={toDiary} style={styles.container3} hitSlop={20}>
                        <SFSymbol
                            name="bookmark.fill"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={22}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Diary</Text>
                    </Pressable>

                    {/* Collection button @ Home */}
                    <Pressable onPress={toCollection} style={styles.container3} hitSlop={20}>
                        <SFSymbol
                            name="book.closed.fill"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={22}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Collection</Text>
                    </Pressable>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                    {/* VBuddy button @ Home */}
                    <Pressable style={styles.container3} hitSlop={20} onPress={toBuddy}>
                        <SFSymbol
                            name="person.crop.square.fill"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={25}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Buddy</Text>
                    </Pressable>

                    {/* Calendar button @ Home */}
                    <Pressable onPress={toCal} style={styles.container3} hitSlop={20}>
                        <SFSymbol
                            name="calendar.circle.fill"
                            weight="semibold"
                            scale="large"
                            color="white"
                            size={27}
                            resizeMode="center"
                            multicolor={false}
                            style={{ width: 42, height: 42 }}
                        />
                        <Text style={styles.SHtitle}>Calendar</Text>
                    </Pressable>
                </View>

                {isLoading ?

                    <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center", }}>
                        <ActivityIndicator size="large" color={colors.white} />
                        <Text style={{ color: colors.white, marginTop: 10 }}>Fetching mood...</Text>
                        <Text style={{ color: colors.white, marginTop: 5 }}>It will take a few seconds</Text>
                    </View>

                    :

                    <View style={{width: Dimensions.get('screen').width, backgroundColor: "#FBAF00", borderRadius: 40, marginTop: 20, paddingTop: 20 }}>

                        <Text style={styles.SHtitle}>Mood Tracker</Text>

                        <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: colors.white }}>As of:</Text>
                            {(() => {
                                if (month == 1) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>January</Text>
                                        </View>
                                    )
                                }

                                if (month == 2) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>February</Text>
                                        </View>
                                    )
                                }

                                if (month == 3) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>March</Text>
                                        </View>
                                    )
                                }

                                if (month == 4) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>April</Text>
                                        </View>
                                    )
                                }

                                if (month == 5) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>May</Text>
                                        </View>
                                    )
                                }

                                if (month == 6) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>June</Text>
                                        </View>
                                    )
                                }

                                if (month == 7) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>July</Text>
                                        </View>
                                    )
                                }

                                if (month == 8) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>August</Text>
                                        </View>
                                    )
                                }

                                if (month == 9) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>September</Text>
                                        </View>
                                    )
                                }

                                if (month == 10) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>Ocotber</Text>
                                        </View>
                                    )
                                }

                                if (month == 11) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>November</Text>
                                        </View>
                                    )
                                }

                                if (month == 12) {
                                    return (
                                        <View>
                                            <Text style={styles.SHtitle}>December</Text>
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

                        <View style={{ marginTop: 10, marginBottom: 5 }}>
                            {(() => {

                                if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == 0) {
                                    return (
                                        <View>
                                            <Text style={styles.title}>Your mood tracker is empty</Text>
                                        </View>
                                    )
                                }
                                else {
                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isHappy) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>You have been happy this month</Text>
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isSad) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>You went through a lot of sadness this month. You should find something fun!</Text>

                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isBoring) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>You went through a lot of boringness this month. You should find something fun!</Text>
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isMad) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>You went through a lot of boringness this month. You should find something fun!</Text>
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isWorry) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>What makes you worry? Go dump all you worries with your V-Buddy!!</Text>
                                            </View>
                                        )
                                    }

                                    if (Math.max(isHappy, isSad, isBoring, isMad, isWorry, isShock) == isShock) {
                                        return (
                                            <View>
                                                <Text style={styles.title}>What makes you shocked a lot? Go dump all you shockness with your V-Buddy!</Text>
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


/* =========== Reserved Code ===========


                        <View style={{marginTop:"5%", flexDirection:"row", alignSelf:"center" }}>
                            <Button3 onPress={toDiary} title="Diary"/>
                            <Button3 onPress={toCal} title="Calendar" />
                        </View>
                        
                        <View style={{marginTop:"5%", flexDirection:"row", alignSelf:"center"}}>
                            <Button3  onPress={toVB} title="Virtual Buddy"/>
                            <Button3  title="Log Idea"/>
                        </View>

                        <Button2 onPress={toCollection} title="Collection" style={{ marginTop: 30, height:70, width:310, alignSelf:"center", fontSize:20, fontWeight:'bold',color: colors.blue,}} />
                    

                        <Image style = {{width:20,height:30}} source = {require('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/bookmark.fill.png') } />
                        <Image style = {{width:27,height:36}} source = {require('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/magazine.png') } />



                           let [isLoading, setIsLoading] = React.useState(true);
    
    const [name,setName] = useState('');
    if(isLoading){
        getDoc(doc(db,"User", authentication.currentUser.uid)).then(docData =>{
            if (docData.exists()) {
                //console.log("Document data:", docData.data());

                setName(docData.data().FullName);
                
                setIsLoading(false);
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
        })



            <View style={{flexDirection:"row", alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                {
                        isLoading? <ActivityIndicator  color={colors.white}/> : 
                        <Text style={styles.Htitle}>Hello, {name}</Text>
                }
            </View>




            
*/