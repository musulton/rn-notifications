/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {onBackgroundEvent} from './utils/NotificationUtils';

onBackgroundEvent();
AppRegistry.registerComponent(appName, () => App);
