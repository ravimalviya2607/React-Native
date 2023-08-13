import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUserList } from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer)

useEffect(() => {
  if(getUserList){
  dispatch(getUserList())
  }
},[])
  console.warn("In Component", userList)

  return (
    <View style={styles.container}>
      {
        userList.length ?
        userList.map((item)=>(<Text style={{fontStyle:18}}>{item.firstName}</Text>))
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default UserList;