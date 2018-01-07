import apisauce from 'apisauce';
import AppConfig from '../AppConfig';

const create = (baseURL = AppConfig.serverUrl) => {
  const api = apisauce.create({baseURL, timeout: 10000});

  api.addRequestTransform((request) => {
    request.params['AppId']   = AppConfig.appId;
    request.params['AppName'] = AppConfig.appName;
  });

  const SendMessage = () => {
    return api.get('posts/1', {})
  };

  return {
    SendMessage,
  }
};

export default {
  create
}