import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchStyles } from './styles';
import { BaseStyles } from '../../app.styles';

const Search = () => {
    searchPlaceholder = 'Search for product'
    onSearch = (text) => {
        console.log(text);
    }
    return (
        <View style={SearchStyles.wrapper}>
            <FontAwesomeIcon
                style={SearchStyles.searchIcon}
                icon={faSearch}
                size={BaseStyles.fontSize.l}
                color={BaseStyles.colors.grey}
            />
            <TextInput
                onChangeText={text => onSearch(text)}
                style={SearchStyles.input}
                placeholder={'Search for product'}
                placeholderTextColor={BaseStyles.colors.gray}
            />
        </View>
    );
}

export default Search;
