import React, { memo, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import isEqual from 'lodash/isEqual';

import { DEFAULT_LOCATION } from '../../constants/default-coordinates';
import styles from './styles';

const Maps = memo(
  ({
    route: {
      params: { data: { location } = { location: DEFAULT_LOCATION } }
    },
    style,
    ...props
  }) => {
    const [coordinate, setCoordinate] = useState(location);

    useEffect(() => {
      const hasCoordinateToDisplay = !isEqual(location, DEFAULT_LOCATION);

      if (hasCoordinateToDisplay) {
        return;
      }

      Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
        setCoordinate({
          ...coordinate,
          latitude,
          longitude
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <MapView {...props} region={coordinate} style={StyleSheet.flatten([styles.container, style])}>
        <Marker coordinate={coordinate} />
      </MapView>
    );
  }
);

export default Maps;