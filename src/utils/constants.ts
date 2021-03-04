import {Dimensions, Platform} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const SPLASH_WAIT_TIME = 2000; // milli seconds
export const API_WAIT_TIME = 30000; // milli seconds

export const loaderJson = require('../assets/lottie/loader.json');
export const DEFAULT_SEARCH_TEXT = 'jack johnson';
export const BASE_URL = 'https://itunes.apple.com';
export const SEARCH_URL = '/search?term=';
export const DATE_FORMAT = 'd MMM, YYYY';

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const defaultSearchText = "Michael jackson";

//screen constants
export const ROUTE_NAMES = {
  SPLASH_SCREEN: 'splashScreen',
  SEARCH_ITUNES_SCREEN: 'searchItunesScreen',
  DETAILS_SCREEN: 'detailsScreen',
};
