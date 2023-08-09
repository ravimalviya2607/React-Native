
// React Native in Components

import React from 'react';
import { Text, View } from 'react-native';
import CompanyData from './components/CompanyData';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Components </Text>
      <CompanyData />
      <UserData />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Name : Ravi </Text>
      <Text style={{ fontSize: 30 }} >Age : 22 </Text>
      <Text style={{ fontSize: 30 }} >Email : Ravi@Test.com </Text>
    </View>
  );
};


export default App;
