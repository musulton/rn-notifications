import {PermissionsAndroid} from 'react-native';
import {requestNotifications} from 'react-native-permissions';

/*
Untuk android api level 32 ke bawah tidak perlu meminta izin karena rekues akan selalu sukses.
Sedangkan untuk android level 33 ke atas memerlukan izin untuk menerima notifikasi secara manual
 */
export const requestNotificationPermission = () => {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  ).then(r => console.log(r));
};

export const requestPushNotifications = () => {
  requestNotifications(['alert', 'sound']).then(({status, settings}) =>
    console.log(status),
  );
};
