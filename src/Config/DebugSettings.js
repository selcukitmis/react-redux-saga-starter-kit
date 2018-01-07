import AppConfig from '../AppConfig';

const SETTINGS = {
  useFixtures    : false,
  ezLogin        : false,
  yellowBox      : false,
  reduxLogging   : AppConfig.isDevelopment,
  includeExamples: AppConfig.isDevelopment
};

export default SETTINGS
