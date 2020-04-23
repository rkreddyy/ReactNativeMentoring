import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
class Group extends Component {
    render() {
        return (
            <TouchableHighlight hitSlop={BaseStyles.buttonHitSlop}>
                <View style={styles.group}>
                    <View style={styles.groupImageWrapper}>
                        <Image source={this.props.group.source} style={styles.groupImage} />
                    </View>
                    <Text style={BaseStyles.groupName}>{this.props.group.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default Group;
