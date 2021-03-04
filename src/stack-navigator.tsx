import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchItunes from './view/search-itunes';
import DetailsScreen from './view/details';
import {ROUTE_NAMES, isAndroid} from './utils';
import SplashScreen from './view/splash';
import {color} from './theme';
import {translate} from './i18n';
import {TextStyle, ViewStyle, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

/**
 * Stack navigator for the screen navigation in app
 */
export const SearchItunesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE_NAMES.SPLASH_SCREEN} component={SplashScreen} />

      <Stack.Screen
        name={ROUTE_NAMES.SEARCH_ITUNES_SCREEN}
        component={SearchItunes}
        options={{
          title: translate('searchItunes.title'),
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
      <Stack.Screen
        name={ROUTE_NAMES.DETAILS_SCREEN}
        component={DetailsScreen}
        options={{
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create<{
  headerTitleStyle: TextStyle;
  headerStyle: ViewStyle;
}>({
  headerTitleStyle: {
    color: color.defaultTextColor,
    textAlign: 'center',
    flex: isAndroid ? 1 : 0,
    justifyContent: 'center',
  },

  headerStyle: {
    backgroundColor: color.defaultStatusBarColor,
  },
});
