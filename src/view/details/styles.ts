import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {color, spacing, FontSize, FontWeight} from '../../theme';

export const Styles = StyleSheet.create<{
  rootContainerStyle: ViewStyle;
  scrollViewStyle: ViewStyle;
  descriptionContainerStyle: ViewStyle;
  imageStyle: ImageStyle;
  checkCollectionButtonStyle: ViewStyle;
  checkCollectionStyle: TextStyle;
  descriptionItemContainerStyle: ViewStyle;
  descriptionLabelStyle: TextStyle;
  descriptionValueStyle: TextStyle;
}>({
  rootContainerStyle: {
    backgroundColor: color.appBackground,
    flex: 1,
    alignItems: 'center',
    padding: spacing[4],
  },

  scrollViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },

  descriptionContainerStyle: {
    backgroundColor: color.appBackground,
    flex: 1,
    alignItems: 'center',
    padding: spacing[4],
    width: '100%',
  },

  imageStyle: {
    height: 150,
    width: 150,
  },

  checkCollectionButtonStyle: {
    marginBottom: spacing[7],
    borderRadius: 10,
    backgroundColor: color.defaultButtonBackgroundColor,
  },

  checkCollectionStyle: {
    color: color.defaultTextColor,
    fontWeight: FontWeight.fwBold,
    fontSize: FontSize.large,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },

  descriptionItemContainerStyle: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: spacing[3],
  },

  descriptionLabelStyle: {
    color: color.defaultLabelTextColor,
    width: 120,
    fontWeight: FontWeight.fwBold,
  },

  descriptionValueStyle: {
    color: color.defaultTextColor,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: FontWeight.fwBold,
  },
});
