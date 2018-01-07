import DebugSettings from './DebugSettings'
import AppConfig from '../AppConfig'

export default () => {
  if (AppConfig.isDevelopment) {
    console.disableYellowBox = !DebugSettings.yellowBox
  }
}
