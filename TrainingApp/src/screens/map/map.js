import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapView from 'react-native-maps';

import styles from './styles';
import Header from '../components/header/header';
import { MAIN_ROUTES } from '../../navigation/routes';
import LoadingIndicator from '../components/loading-indicator/loading-indicator';
import FormWarning from '../auth/form-warning/form-warning';
import { BaseStyles } from '../../app.styles';
import { fetchGetCurrentPosition } from './map.slice';

const Map = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, error, currentPosition } = useSelector(store => store.map);

    const title = 'Map View';

    useEffect(() => {
        dispatch(fetchGetCurrentPosition());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goBack = () => navigation.goBack();
    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });

    return (
        <>
            <Header title={title} goBack={goBack} goToCart={goToCart} />
            {!error ? <MapView initialRegion={currentPosition} style={styles.map} showsUserLocation={true} /> : null}
            {isLoading ? (
                <LoadingIndicator color={BaseStyles.colors.lightBlue} />
            ) : error ? (
                <FormWarning error={error} />
            ) : null}
        </>
    );
};

export default Map;