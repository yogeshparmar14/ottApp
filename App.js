// In App.js in a new project
// import "./pages/ignoreWarnings";
import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Profile from './pages/Profile';
import Search from './pages/Search';
import HomeScreen from './pages/HomeScreen';
import Video from "./pages/Video";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const colors = {
  primary: '#E80C46',
  grey: '#919191',
  blueLink: '#4C8DD9',
  txtColor: '#212121',
  grayTxtColor: '#919191',
  bgColor: "#FFFFFF",
  inputBorderColor: '#E7E9EC',
  inputTxtColor: '#919191',
  inputTxtColorDark: '#515151',
  blueTxt: "#090F47",
  lightGrey: "#F5F7FA",
  green: "#4CD964",
  greyBackground: "#E9E9E9"
}

function renderTabIcon(route, focused) {
  if (route == 'Home') {
    return <Image source={require('./assets/icons/video-play.png')} style={styles.icon}></Image>
  }
  if (route == 'Search') {
    return <Image source={require('./assets/icons/search-normal.png')} style={styles.icon}></Image>
  }


  if (route == 'Profile') {
    return <Image source={require('./assets/icons/user1.png')} style={styles.icon}></Image>
  }

}

function MyTabBar({ state, descriptors, navigation }) {


  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {

              navigation.navigate({ name: route.name, merge: true });
            }
          };



          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              activeOpacity={1}

              style={styles.tabItem}
            >
              <View style={isFocused ? styles.selTabCtr : styles.tabCtr}>
                <View style={isFocused ? styles.circle : null}>
                  {renderTabIcon(label, isFocused)}
                </View>

              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

function HomeTab() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>

  );
}
function App() {
  const { user } = useAuth()

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="Video Player" component={Video} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }

}

const styles = StyleSheet.create({

  tabItem: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 2,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
  selText: {
    color: 'white',
    fontSize: 10
  },
  txt: {
    color: colors.grayTxtColor,
    fontSize: 10
  },
  selTabCtr: {
    alignItems: 'center'
    , paddingVertical: 15
  },
  tabCtr: {
    alignItems: 'center'
  },
  circle: {
    backgroundColor: "#E33939",
    padding: 15,
    borderRadius: 100
  }
});

export default App;