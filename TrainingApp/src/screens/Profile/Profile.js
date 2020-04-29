import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../common/header/header';

import styles from './styles';

const Profile = ({ navigation, route }) => {
    const { title } = route.params;
    const goBack = () => navigation.goBack();
    return (
        <ScrollView style={styles.wrapper}>
            <Header title={title} goBack={goBack} />
        </ScrollView>
    );
};

export default Profile;