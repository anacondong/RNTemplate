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

const MatchScreen = ({ navigation: { navigate } }) => {
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
            Match Screen
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchScreen;
