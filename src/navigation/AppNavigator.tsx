import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

  const auth = true; // TODO impl Login
  //https://reactnavigation.org/docs/hiding-tabbar-in-screens/


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
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="LottoScreen" component={LottoScreen} />
          <Tab.Screen name="MatchScreen" component={MatchScreen} />
          <Tab.Screen name="NotMatchScreen" component={NotMatchScreen} />
          <Tab.Screen name="NewsScreen" component={NewsScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
          <Tab.Screen name="ScanScreen" component={ScanScreen} />
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
