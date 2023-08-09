
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';


const App = () => {

  const [data, setData] = useState([]);

  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getAPIData();
  }, [])

  return (
    <ScrollView>
      <Text style={{ fontSize: 30 }}>List With API Call</Text>
      {
        data.length ?
        data.map((item)=>
            <View style={{padding:10,borderBottomColor:"#ccc",borderBottomWidth:1}}>
                <Text style={{ fontSize: 20 }}>User Id : {item.userId}</Text>
                <Text style={{ fontSize: 20, backgroundColor:"#ddd"}}>Id : {item.id}</Text>
                <Text style={{ fontSize: 20 }}>Title : {item.title}</Text>
                <Text style={{ fontSize: 20 }}>Body : {item.body}</Text>
            </View>
        )
        :
        null
      }
 
    </ScrollView>

  );
};

export default App;
