import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

const logBuddyDetailed = ({ navigation, route }) => {

    const onBack = () => {
        navigation.navigate('Buddy')
    };


    return (
        <SafeAreaView>


            <View>
                {(() => {
                    switch (route.params.paramKey) {
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
                <View style={{ marginTop: 80 }}>


                    <Text style={styles.SHtitle1}>Now this worry is with me.</Text>
                    <Text style={styles.SHtitle1}>If you need to tell me anything or want me to stop worrying, just tell me.</Text>
                </View>
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
                width: 300,

            }}>
                <Pressable onPress={onBack} hitSlop={80} style={styles.container2}>
                    <Text style={styles.SHtitle1}>OK</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )

}

export default React.memo(logBuddyDetailed);



