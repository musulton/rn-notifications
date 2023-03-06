import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

/*
Mengambil token registrasi, token ini akan digunakan untuk mengirim pesan ke perangkat
 */
export const getDeviceToken = () => {
  messaging()
    .getToken(firebase.app().options.messagingSenderId)
    .then(r => console.log(r))
    .catch(e => console.log(e));
};
