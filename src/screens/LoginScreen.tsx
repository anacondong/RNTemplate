import React from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import stylesMain from '~styles/';
import styles from "./LoginScreen.style";

import {useAppSelector} from '~/hooks/useAppSelector';
import {useAppDispatch} from '~/hooks/useAppDispatch';
import {AppDispatch} from '~/redux/stores';

const LoginScreen = ({ navigation: { navigate } }) => {
  // Redux
  const dispatch: AppDispatch = useAppDispatch();
  const reduxState = useAppSelector(state => ({
    theme: state.themeData,
    language: state.language,
  }));

  const {colors} = reduxState.theme;

  const Logo = () => (
    <Image
      resizeMode="contain"
      source={require("~/assets/local-assets/apple.png")}
      style={[styles.logoImageStyle]}
    />
  );

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer]}>
      <TextInput placeholder="username" onChangeText={() =>{}}/>
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          onChangeText={() =>{}}
          placeholder="password"
          secureTextEntry
        />
      </View>
    </View>
  );


  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle]}
      onPress={() => {console.log("set Auth == true")}}
    >
      <Text style={[styles.loginTextStyle]}>Login</Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle]} />;

  return (
    <SafeAreaView style={[stylesMain.flex, {backgroundColor: colors.primary}]}>
      
      <Logo />
      <Divider />
      <TextInputContainer />
      <Divider />
      <LoginButton />
    </SafeAreaView>
  );
};

export default LoginScreen;
