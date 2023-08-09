
import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview'

const App=()=>{
  return (
    <WebView source={{uri:"https://www.npmjs.com/package/react-native-webview"}}/>
  );
};


export default App;
