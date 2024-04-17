/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
export default function Main() {
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
  }
