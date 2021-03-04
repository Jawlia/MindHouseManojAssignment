import React, {useEffect, useState, createRef} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import SearchBar from 'react-native-search-bar';
import {
  DefaultLoader,
  ROUTE_NAMES,
  DEFAULT_SEARCH_TEXT,
  Images,
  defaultSearchText,
} from '../../utils';
import {color} from '../../theme';
import {Styles as styles} from './styles';
import {ITunesCloudApi} from '../../network/iTunes-cloud-api';
import {translate} from '../../i18n';

/**
 * SearchItunes, An app search screen, where user can make search for iTunes
 */
const SearchItunes = (props) => {
  /**
   * A state variable, which keeping the updated data, after search
   */
  const [DATA, updateData] = useState([]);

  /**
   * A state variable, which keep user searched text
   */
  const [searchText, setSearchText] = useState(defaultSearchText);

  /**
   * A state variable, which is responsible to show / hide the loader
   */
  const [shouldShowLoading, setShouldShowLoading] = useState(false);

  /**
   * A state variable, which is responsible to show / hide no data UI
   */
  const [shouldShowNoData, setShouldNoData] = useState(false);

  /**
   * A reference variable, which holding search component,
   * Later we used this to un-focus and hide keyboard on search click
   */
  const searchInput = createRef<SearchBar>();

  /**
   * Making api  call for searched text by user
   */
  const searchOnItunes = async (searchString: string = DEFAULT_SEARCH_TEXT) => {
    setShouldShowLoading(true);
    const response: any = await new ITunesCloudApi().getSearchResults(
      searchString,
    );
    setShouldShowLoading(false);
    if (response.kind === 'ok' && response.results && response.results.length) {
      setShouldNoData(false);
      updateData(response.results);
    } else {
      setShouldNoData(true);
    }
  };

  /**
   * Here use effect will work like componentDidMount, we are making an api call
   * here with some default text
   */
  useEffect(() => {
    searchOnItunes(defaultSearchText);
  }, []);

  /**
   * Navigating user to Details screen on Item click on grid item, with selected item data
   */
  const onItemClick = (item) => {
    props.navigation.navigate(ROUTE_NAMES.DETAILS_SCREEN, {
      selectedItem: item,
    });
  };

  /**
   * Grid list item UI
   */
  const renderListItem = ({item}: any) => {
    let Image_Http_URL = {
      uri: item.artworkUrl100,
    };
    return (
      <TouchableOpacity
        style={styles.listItemContainerStyle}
        onPress={() => onItemClick(item)}>
        <Image source={Image_Http_URL} style={styles.listImageStyle} />
        <Text numberOfLines={1} style={styles.listTextStyle}>
          {item.trackName}
        </Text>
      </TouchableOpacity>
    );
  };

  /**
   * Updating state on search text change
   */
  const onSearchChangeText = (text) => {
    setSearchText(text);
  };

  /**
   * Making api call on Search click
   */
  const onSearchButtonPress = () => {
    searchInput.current?.unFocus();
    searchOnItunes(searchText);
  };

  /**
   * Making api call on cancel click with default search text click
   */
  const onCancelButtonPress = () => {
    setSearchText('');
    searchOnItunes();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainerStyle}>
        <SearchBar
          text={searchText}
          ref={searchInput}
          placeholder={translate('searchItunes.search')}
          onChangeText={onSearchChangeText}
          onSearchButtonPress={onSearchButtonPress}
          onCancelButtonPress={onCancelButtonPress}
          textColor={color.secondaryTextColor}
          textFieldBackgroundColor={color.defaultTextColor}
          barTintColor={color.appBackground}
          style={styles.searchBarStyle}
        />
        {shouldShowNoData ? (
          <View style={styles.noDataImageContainerStyle}>
            <Image source={Images.NO_DATA} style={styles.noDataImageStyle} />
          </View>
        ) : (
          <FlatGrid
            itemDimension={130}
            data={DATA}
            renderItem={renderListItem}
          />
        )}
        {shouldShowLoading && <DefaultLoader />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchItunes;
