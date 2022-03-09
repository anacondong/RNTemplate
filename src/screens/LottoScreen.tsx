import React from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import {BOTTOM_SAFE_AREA_HEIGHT} from '~utils/Constants';

import styles from '~styles/';

import {useAppSelector} from '~/hooks/useAppSelector';
import {useAppDispatch} from '~/hooks/useAppDispatch';
import {AppDispatch} from '~/redux/stores';

const LottoScreen = ({ navigation: { navigate } }) => {
  // Redux
  const dispatch: AppDispatch = useAppDispatch();
  const reduxState = useAppSelector(state => ({
    theme: state.themeData,
    language: state.language,
  }));

  const {colors} = reduxState.theme;

  return (
    <SafeAreaView style={[styles.flex, {backgroundColor: colors.primary}]}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: BOTTOM_SAFE_AREA_HEIGHT,
        }}>

        <View
          style={[
            styles.flex,
            styles.container,
            {backgroundColor: colors.primary},
          ]}>
          <Text style={[styles.typography.h2, {color: colors.text}]}>
            Lotto Screen
          </Text>
          
        </View>

        <View>
        <Text onPress={() =>
                  navigate('LottoScreen', { params: ['LottoScreen'] })}>Lotto</Text>
              <Text onPress={() =>
                  navigate('MatchScreen', { params: ['MatchScreen'] })}>Match</Text>
              <Text onPress={() =>
                  navigate('NewsScreen', { params: ['NewsScreen'] })}>News</Text>
              <Text onPress={() =>
                  navigate('NotMatchScreen', { params: ['NotMatchScreen'] })}>NotMatch</Text>
              <Text onPress={() =>
                  navigate('ProfileScreen', { params: ['ProfileScreen'] })}>Profile</Text>
              <Text onPress={() =>
                  navigate('ScanScreen', { params: ['ScanScreen'] })}>Scan</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LottoScreen;
