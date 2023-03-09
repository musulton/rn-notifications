/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {onBackgroundEvent} from './utils/NotificationUtils';
import {subscribeBackground} from './utils/FirebaseUtils';

subscribeBackground();
onBackgroundEvent();

AppRegistry.registerComponent(appName, () => App);
