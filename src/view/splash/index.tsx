import React, {useEffect} from 'react';
import {View, Image, Text, ImageBackground, StatusBar} from 'react-native';
import {color} from '../../theme';
import {ROUTE_NAMES, SPLASH_WAIT_TIME, Images} from '../../utils';
import {Styles as styles} from './styles';
import {translate} from '../../i18n';

/**
 * SplashScreen, An app initial screen, which render whenever user will start the app
 */
const SplashScreen = (props) => {
  /**
   * Hiding the navigation bar, as we have to show Splash as full screen
   */
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: styles.headerStyle,
    });
  }, [props.navigation]);

  /**
   * Moving user to next screen after specified time
   */
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace(ROUTE_NAMES.SEARCH_ITUNES_SCREEN);
    }, SPLASH_WAIT_TIME);
  }, []);

  return (
    <View style={styles.rootContainerStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={color.palette.transparent}
        hidden
      />
      <ImageBackground
        style={styles.topImageContainerStyle}
        source={Images.SPLASH_HEADER}>
        <Text style={styles.headerTextStyle}>{translate('splash.header')}</Text>
        <Text style={styles.descriptionTextStyle}>
          {translate('splash.description')}
        </Text>
      </ImageBackground>
      <Image style={styles.headphoneImageStyle} source={Images.HEAD_PHONE} />

      <View style={styles.bottomDescriptionContainerStyle}>
        <Text style={styles.developerDetailsTextStyle}>
          {translate('splash.developerInfo')}
        </Text>
        <Text style={styles.termsTextStyle}>
          {translate('splash.disclaimer')}
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
