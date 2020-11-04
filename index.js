/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { RootContainer } from './App/Containers'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => RootContainer)
