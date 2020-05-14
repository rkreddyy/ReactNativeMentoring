import React from 'react';
import { TextInput, View } from 'react-native';

import { SearchStyles } from './styles';
import { BaseStyles } from '../../../app.styles';
import SearchIcon from '../search-icon/search-icon';

const Search = ({ isSearchVisible }) => {
    const placeHolder = 'Search for product';
    if (isSearchVisible) {
        return (
            <View style={SearchStyles.wrapper}>
                <View style={SearchStyles.inputWrapper}>
                    <SearchIcon needToDisplay={true} />
                    <TextInput
                        style={SearchStyles.input}
                        placeholder={placeHolder}
                        placeholderTextColor={BaseStyles.colors.gray}
                    />
                </View>
            </View>
        );
    } else {
        return null;
    }
};

export default Search;
