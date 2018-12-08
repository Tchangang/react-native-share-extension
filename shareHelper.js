import { NativeModules, BackHandler, Platform } from 'react-native';

const close = () => {
  if (Platform.OS === 'ios') {
    NativeModules.ActionExtension.done();
    return;
  }
  BackHandler.exitApp();
};

const getData = (props) => new Promise((resolve) => {
  if (!props || typeof props !== 'object' || typeof props.url === 'string') {
    resolve(props.url);
    return;
  }
  if (Platform.OS === 'android' || !NativeModules.ActionExtension) {
    resolve(props.url);
    return;
  }
  NativeModules.ActionExtension.getData()
    .then((result) => {
      resolve(result ? result.url : null);
    })
    .catch((e) => {
      resolve(null);
    })
});

export default {
  close,
  getData,
};
