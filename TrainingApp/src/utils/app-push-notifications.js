import ReactNativePushNotification from 'react-native-push-notification';

class PushNotificationService {
  show(options) {
    console.log(options);
    ReactNativePushNotification.localNotification(options);
  }

  cancel() {
    ReactNativePushNotification.cancelAllLocalNotifications();
  }
}

export default PushNotification = new PushNotificationService();