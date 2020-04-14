import { faBars, faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Search from '../search/search';
import SearchIcon from '../search-icon/search-icon';
import HeaderActions from './header.actions';

class Header extends Component {
    constructor() {
        super();
        this.isSearchInputDisplayed = false;
    }
    openMenu() {}
    goBack() {
        this.props.goToMain();
    }

    openWishList() {}

    toggleSearch() {
        this.props.toggleSearch();
    }

    closeSearchInput() {
        if (this.props.isSearchVisible) {
            this.toggleSearch();
        }
    }

    getToggleMenuButtonGSX() {
        return (
            <TouchableHighlight
                style={styles.menuButton}
                underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                hitSlop={BaseStyles.buttonHitSlop}
                onPress={() => this.openMenu()}>
                <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
            </TouchableHighlight>
        );
    }

    getBackButtonGSX() {
        return (
            <TouchableHighlight
                style={styles.menuButton}
                underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                hitSlop={BaseStyles.buttonHitSlop}
                onPress={() => this.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
            </TouchableHighlight>
        );
    }

    getLeftControl() {
        return this.props.menuButton ? this.getToggleMenuButtonGSX() : this.getBackButtonGSX();
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    {this.getLeftControl()}
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.rightIconGroup}>
                        <TouchableHighlight
                            style={styles.menuButton}
                            underlayColor={BaseStyles.colors.transparent}
                            hitSlop={BaseStyles.buttonHitSlop}
                            onPress={() => this.toggleSearch()}>
                            <SearchIcon needToDisplay={!this.props.isSearchVisible} color={BaseStyles.colors.white} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.menuButton}
                            hitSlop={BaseStyles.buttonHitSlop}
                            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                            onPress={() => this.openWishList()}>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                size={BaseStyles.fontSize.l}
                                color={BaseStyles.colors.white}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <Search isSearchVisible={this.props.isSearchVisible} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { header } = state;
    return header;
};

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(HeaderActions.toggleSearch()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
