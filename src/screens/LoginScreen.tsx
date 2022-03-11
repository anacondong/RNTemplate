import React from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

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
      source={require("~/assets/local-asserts/apple.png")}
      style={[styles.logoImageStyle]}
    />
  );

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer]}>
      <TextInput placeholder="username"/>
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          placeholder="password"
          secureTextEntry
        />
      </View>
    </View>
  );


  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle]}
      onPress={() => {navigate('NewsScreen', { params: ['NewsScreen'] })}}
    >
      <Text style={[styles.loginTextStyle]}>Login</Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle]} />;

  return (
    <SafeAreaView style={[styles.container,]}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <TextInputContainer />
      <LoginButton />
    </SafeAreaView>
  );
};

export default LoginScreen;
