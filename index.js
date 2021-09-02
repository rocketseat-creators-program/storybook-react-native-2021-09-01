import {AppRegistry} from 'react-native';
import './src/config/reactotron';
import ThemedApp from './src/themedApp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ThemedApp);
