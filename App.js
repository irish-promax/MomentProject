
//Import Libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Import screens
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/app/Home';
import CalendarV from './src/screens/app/CalendarV';
import LogDiary from './src/screens/app/LogDiary';
import logColDetailed from './src/screens/app/logColDetailed';
import SLogout from './src/screens/app/SLogout';
import logCollection from './src/screens/app/logCollection';
import updateLog from './src/screens/app/updateLog';
import Buddy from './src/screens/app/Buddy';
import LogBuddy from './src/screens/app/LogBuddy'
import LogBuddyDetailed from './src/screens/app/LogBuddyDetailed'
import wooryLogged from './src/screens/app/wooryLogged';
import searchLogColDetailed from '/Users/imanirishdaniel/Desktop/MomentProject/src/screens/app/searchLogColDetailed';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    background: colors.blue,
  }
}

const App = ({ }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />

          <Stack.Screen name="Tabs" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Diary" component={LogDiary} options={{ headerShown: false }} />
          <Stack.Screen name="LO" component={SLogout} options={{ headerShown: false }} />
          <Stack.Screen name="logC" component={logCollection} options={{ headerShown: false }} />
          <Stack.Screen name="LCD" component={logColDetailed} options={{ headerShown: false }} />
          <Stack.Screen name="UPD" component={updateLog} options={{ headerShown: false }}/>
          <Stack.Screen name="SDate" component={searchLogColDetailed} options={{ headerShown: false }}/>

          <Stack.Screen name="Buddy" component={Buddy} options={{ headerShown: false }} />
          <Stack.Screen name="LBuddy" component={LogBuddy} options={{ headerShown: false }} />
          <Stack.Screen name="WD" component={wooryLogged} options={{ headerShown: false }} />
          <Stack.Screen name="LBD" component={LogBuddyDetailed} options={{ headerShown: false }} />

          <Stack.Screen name="Cal" component={CalendarV} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;



/* =========== Reserved Code ===========
 
const Tab = createBottomTabNavigator();
const Tabs = () => (
<Tab.Navigator screenOptions={({ route }) => ({
  
  tabBarActiveTintColor: colors.white,
  tabBarIcon: ({ focused }) => {
    
    let icon;
    if (route.name === 'Home') {
      icon = focused
        ? require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/house.fill.png')
        : require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/house.png');
    } 
    
    else if (route.name === 'Diary') {
      icon = focused 
      ? require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/bookmark.fill.png')
      : require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/bookmark.png');
    }

    else if (route.name === 'V-Buddy') {
      icon = focused 
      ? require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/person.crop.circle.badge.fill.png')
      : require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/person.crop.circle.badge.png');
    }

    else if (route.name === 'Calendar') {
      
      icon = focused 
      ? require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/calendar.png')
      : require ('/Users/imanirishdaniel-dev/Desktop/MomentProject/src/assets/calendar.png');
    }
    return <Image source={icon} />;

  },

})}>
  <Tab.Screen name = "Home" component={Home} options={{headerShown: false}}/>
  <Tab.Screen name = "Calendar" component={CalendarV} options={{headerShown: false}}/>
</Tab.Navigator>
)


const [user, setUser] = useState(null)

useEffect(() =>{
  const unsubscribe = authentication.onAuthStateChanged
  (userAuth => {
    const user = {
      uid: userAuth.uid,
      email:userAuth.email,
    }
    if(userAuth){
      console.log (userAuth)
      setUser(user)
    }else{
      setUser(null)
    }
  })
})
 
 <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
 


                 isSignedIn ? ( 
                <>
                  <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
                  <Stack.Screen name = "Diary" component={LogDiary} options={{headerShown: false}}/>
                  <Stack.Screen name = "V-Buddy" component={VBuddy} options={{headerShown: false}}/>
                </>
              ):(
                <>
                  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                  <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                  <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                </>
              )
*/