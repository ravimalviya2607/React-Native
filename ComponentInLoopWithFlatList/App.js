
import React from 'react';
import { Text, View, FlatList} from 'react-native';
import UserData from './components/UserData';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Ravi",
      email: "ravi@gmail.com"
    },
    {
      id: 2,
      name: "Sonu",
      email: "sonu@gmail.com"
    },
    {
      id: 3,
      name: "Hitesh",
      email: "hitesh@gmail.com"
    }

  ]

  return (
    <View>
      <Text style={{ fontSize: 27 }}>Component in Loop with FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
};

export default App;
