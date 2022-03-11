import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingScreen from '~screens/LoadingScreen';
import HomeScreen from '~screens/HomeScreen';
import LoginScreen from '~screens/LoginScreen';
import LottoScreen from '~screens/LottoScreen';
import MatchScreen from '~screens/MatchScreen';
import NewsScreen from '~screens/NewsScreen';
import NotMatchScreen from '~screens/NotMatchScreen';
import ProfileScreen from '~screens/ProfileScreen';
import ScanScreen from '~screens/ScanScreen';
import {useAppDispatch} from '~/hooks/useAppDispatch';
import {initLanguage} from '~/redux/actions/LanguageActions';
import {initTheme} from '~/redux/actions/ThemeActions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    initApp();
  }, []);

  const initApp = () => {
    Promise.all([dispatch(initLanguage()), dispatch(initTheme())]).then(() =>
      setInitialized(true),
    );
  };

  const auth = false; // TODO impl Login

  const LottoStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LottoScreen" component={LottoScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    );
  }
  const MatchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MatchScreen" component={MatchScreen} />
        <Stack.Screen name="NotMatchScreen" component={NotMatchScreen} />
      </Stack.Navigator>
    );
  }
  const NewsStack = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      
      {!initialized ? (
        <Stack.Navigator>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
        </Stack.Navigator>
        ) : (initialized && !auth) ?(
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown:false}}/>
        </Stack.Navigator>
        ) 
        : (
          <Tab.Navigator initialRouteName="Lotto"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
    >
            <Tab.Screen name="Lotto" component={LottoStack} 
            options={{
              tabBarLabel: 'Lotto',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="barcode" color={color} size={size} />
              ),
            }}/>
            <Tab.Screen name="Match" component={MatchStack} 
            options={{
              tabBarLabel: 'Match',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="menu" color={color} size={size} />
              ),
            }}/>
            <Tab.Screen name="News" component={NewsStack} 
            options={{
              tabBarLabel: 'News',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="filmstrip-box-multiple" color={color} size={size} />
              ),
            }}/>
          </Tab.Navigator>
        )}
    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       {!initialized ? (
  //         <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{headerShown:false}}/>
  //       ) : (
  //         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
  //       )}
  //       <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
  //       <Stack.Screen name="LottoScreen" component={LottoScreen}/>
  //       <Stack.Screen name="MatchScreen" component={MatchScreen} />
  //       <Stack.Screen name="NewsScreen" component={NewsScreen} />
  //       <Stack.Screen name="NotMatchScreen" component={NotMatchScreen} />
  //       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  //       <Stack.Screen name="ScanScreen" component={ScanScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default AppNavigator;
