import React from 'react';
import {View, Image, Text, ScrollView, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Moment from 'moment';

import {Styles as styles} from './styles';
import {DATE_FORMAT, showToast} from '../../utils';
import {translate} from '../../i18n';
import { color } from '../../theme';

/**
 * DetailsScreen, An app search screen, where user can see full details of the item
 * he / she selected on search screen
 */
const DetailsScreen = (props) => {
  /**
   * Setting header navigation bar
   */
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.selectedItem.trackName,
      headerBackTitle: ' ',
      headerTintColor: color.defaultTextColor
    });
  }, [props.navigation]);
  const selectedItem = props.route.params.selectedItem;

  /**
   * Moving user to default browser to check the collections
   */
  const onCheckCollectionClick = () => {
    Linking.canOpenURL(selectedItem.collectionViewUrl).then((supported) => {
      if (supported) {
        Linking.openURL(selectedItem.collectionViewUrl);
      } else {
        showToast(translate('details.unableToOpen'));
      }
    });
  };

  return (
    <View style={styles.rootContainerStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        >
        <View style={styles.descriptionContainerStyle}>
          <Image
            source={{
              uri: selectedItem.artworkUrl100,
            }}
            style={styles.imageStyle}
          />
          <ItemRow
            label={translate('details.track')}
            value={selectedItem.trackName}
          />
          <ItemRow
            label={translate('details.artist')}
            value={selectedItem.artistName}
          />
          <ItemRow
            label={translate('details.releaseDate')}
            value={Moment(selectedItem.releaseDate).format(DATE_FORMAT)}
          />
          <ItemRow
            label={translate('details.price')}
            value={`${selectedItem.trackPrice} ${selectedItem.currency}`}
          />
          <ItemRow
            label={translate('details.collection')}
            value={selectedItem.collectionName}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.checkCollectionButtonStyle}
        onPress={onCheckCollectionClick}>
        <Text style={styles.checkCollectionStyle}>
          {translate('details.checkCollection')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * UI for label : description component
 */
const ItemRow = (props) => {
  return (
    <View style={styles.descriptionItemContainerStyle}>
      <Text style={styles.descriptionLabelStyle}>{`${props.label} : `}</Text>
      <Text style={styles.descriptionValueStyle}>{props.value}</Text>
    </View>
  );
};

export default DetailsScreen;
