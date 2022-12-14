import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendario';
import { colors } from '../../../utils/colors';
import Header2 from '../../../components/Header2';

const CalendarV = ({navigation}) => {

    const onBack = () => {
        navigation.navigate('Tabs')
    }

    return(
        <SafeAreaView>

            <View style={styles.container1}>
                <Header2 onBackPress={onBack} title = "Back"/>
            </View>
            
            
            <Text style={styles.Htitle}>Calendar</Text>

                <Calendar
                    onChange={(range) => console.log(range)}

                    theme={{
                        
                        container:{
                        padding: 20,
                        background: colors.grey,
                        },
                        activeDayColor: {
                            color: colors.orange,
                        },

                        monthTitleTextStyle: {
                        color: colors.orange,
                        fontWeight: '400',
                        fontSize: 25,
                        },

                        emptyMonthTextStyle: {
                        fontWeight: '200',
                        },

                        weekColumnsContainerStyle: {},
                        weekColumnStyle: {
                        paddingVertical: 10,
                        },

                        weekColumnTextStyle: {
                        color: colors.white,
                        fontWeight: '500',
                        fontSize: 13,
                        },
       
                        startDateContainerStyle: {
                            color:colors.white
                        },
                        endDateContainerStyle: {
                            color:colors.white
                        },
                        dayContainerStyle: {},
                        
                        dayTextStyle: {
                        color: colors.white,
                        fontWeight: '300',
                        fontSize: 15,
                        },

                        dayOutOfRangeContainerStyle: {},
                        dayOutOfRangeTextStyle: {},
                        todayContainerStyle: {color: colors.grey},
                        todayTextStyle: {
                            color: colors.orange,
                            fontWeight:"bold",
                        },
                        activeDayContainerStyle: {
                            color: colors.orange,
                        },
                        activeDayTextStyle: {
                            color: colors.orange,
                            fontWeight:"bold",
                        },
                        nonTouchableLastMonthDayTextStyle: {},
                    }}
                    />
        </SafeAreaView>
    )
}

export default React.memo(CalendarV);