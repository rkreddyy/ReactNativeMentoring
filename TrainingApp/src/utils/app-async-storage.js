import AsyncStorage from '@react-native-community/async-storage';

const ASYNC_STORAGE_KEYS = {
    USER_NAME: 'e-store-user-name',
    EMAIL: 'e-store-user-email',
    PASSWORD: 'e-store-user-password',
    TOKEN: 'e-store-user-token',
};

const EMPTY_VALUE = 'Empty';

class AppAsyncStorage {
    getStoredUserData() {
        return Promise.all([
            AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_NAME),
            AsyncStorage.getItem(ASYNC_STORAGE_KEYS.EMAIL),
            AsyncStorage.getItem(ASYNC_STORAGE_KEYS.PASSWORD),
            AsyncStorage.getItem(ASYNC_STORAGE_KEYS.TOKEN),
        ]);
    }

    setUserDataToAsyncStorage({ userName, email, password, token }) {
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.USER_NAME, userName || EMPTY_VALUE);
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.EMAIL, email || EMPTY_VALUE);
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.PASSWORD, password || EMPTY_VALUE);
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.TOKEN, token || EMPTY_VALUE);
    }
}

export const AppStorage = new AppAsyncStorage();
