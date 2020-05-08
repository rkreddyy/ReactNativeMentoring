import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { Card } from 'src/components';
import styles from './styles';

const renderOrderRow = ({ label, value }) => (
  <View key={value} style={styles.row}>
    <Text numberOfLines={1} style={styles.rowLabel}>
      {label}:
    </Text>
    <Text numberOfLines={1} style={styles.rowValue}>
      {value}
    </Text>
  </View>
);

export const OrderCard = memo(({ id, date, status, productAmount, total, ...props }) => {
  const rows = [
    {
      label: 'Order Id',
      value: `OD ${id}`
    },
    {
      label: 'Order Date',
      value: date
    },
    {
      label: 'Status',
      value: status
    },
    {
      label: 'Product amount',
      value: productAmount
    },
    {
      label: 'Total Amount',
      value: total
    }
  ];

  return (
    <Card {...props} style={styles.container}>
      {rows.map(renderOrderRow)}
    </Card>
  );
});

OrderCard.displayName = 'OrderCard';
