import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';

import { GroupStyles } from './styles';
import { BaseStyles } from '../../app.styles';

const Group = props => {
        return (
            <TouchableHighlight hitSlop={BaseStyles.buttonHitSlop}>
                <View style={GroupStyles.group}>
                    <View style={GroupStyles.groupImageWrapper}>
                        <Image source={props.group.source} style={GroupStyles.groupImage} />
                    </View>
                    <Text style={BaseStyles.groupName}>{props.group.name}</Text>
                </View>
            </TouchableHighlight>
        );
}

export default Group;
