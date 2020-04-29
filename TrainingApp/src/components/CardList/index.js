import React, { memo, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { Card, ListRefreshControl } from 'src/components';

export const CardList = memo(
  ({
    listItemComponent: CardComponent = Card,
    listItemComponentProps = {},
    refreshing,
    containerStyle,
    listItemStyle,
    onCardPress,
    onRefresh,
    ...props
  }) => {
    const refreshControl = onRefresh ? (
      <ListRefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    ) : null;

    const keyExtractor = useCallback(({ id }) => id, []);

    const renderItem = useCallback(
      ({ item: { id, ...itemProps } }) => {
        const handleCardPress = () => onCardPress?.(id);

        return (
          <CardComponent
            key={id}
            id={id}
            {...itemProps}
            {...listItemComponentProps}
            style={listItemStyle}
            onPress={handleCardPress}
          />
        );
      },
      [listItemComponentProps, listItemStyle, onCardPress]
    );

    return (
      <View style={containerStyle}>
        <FlatList
          {...props}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={refreshControl}
        />
      </View>
    );
  }
);

CardList.displayName = 'CardList';
