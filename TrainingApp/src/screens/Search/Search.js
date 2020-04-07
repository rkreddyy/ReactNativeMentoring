import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchStyles } from './styles';
import { BaseStyles } from '../../app.styles';

export default class Search extends Component {
    constructor() {
        super();
        this.searchPlaceholder = 'Search for product';
    }
    onSearch(text) {
        console.log(text);
    }
    render() {
        return (
            <View style={SearchStyles.wrapper}>
                <FontAwesomeIcon
                    style={SearchStyles.searchIcon}
                    icon={faSearch}
                    size={BaseStyles.fontSize.l}
                    color={BaseStyles.colors.grey}
                />
                <TextInput
                    onChangeText={text => this.onSearch(text)}
                    style={SearchStyles.input}
                    placeholder={this.searchPlaceholder}
                    placeholderTextColor={BaseStyles.colors.gray}
                />
            </View>
        );
    }
}
