import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';

import { GroupStyles } from './styles';
import { BaseStyles } from '../../../app.styles';

export default class Group extends Component {
    render() {
        return (
            <TouchableHighlight hitSlop={BaseStyles.buttonHitSlop}>
                <View style={GroupStyles.group}>
                    <View style={GroupStyles.groupImageWrapper}>
                        <Image source={this.props.group.source} style={GroupStyles.groupImage} />
                    </View>
                    <Text style={BaseStyles.groupName}>{this.props.group.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
