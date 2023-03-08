/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {requestPushNotifications} from './utils/PermissionUtils';
import {
  getDeviceToken,
  subscribeBackground,
  subscribeForeground,
} from './utils/FirebaseUtils';
import {
  onCancelDisplayNotification,
  onForegroundEvent,
  onMockDisplayNotification,
} from './utils/NotificationUtils';

function App(): JSX.Element {
  React.useEffect(() => {
    requestPushNotifications();
    getDeviceToken();

    subscribeBackground();
    const foregroundMessage = subscribeForeground();
    const foregroundEventListener = onForegroundEvent();

    return () => {
      foregroundMessage();
      foregroundEventListener();
    };
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title={'Display Notification'}
        onPress={onMockDisplayNotification}
      />
      <Button
        title={'Cancel Notification'}
        onPress={onCancelDisplayNotification}
      />
    </SafeAreaView>
  );
}

export default App;
