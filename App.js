import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/components/AuthContext';
import NavController from './src/components/NavController';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    try{
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn")
      if(!isLoggedIn || isLoggedIn === "false"){
        const token = await AsyncStorage.getItem("jwt");
        console.log(token);
        setIsLoggedIn(false);

      } else {
        setIsLoggedIn(true);
      } 
    } catch(e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return (   
    <AuthProvider isLoggedIn={isLoggedIn}>
      <NavController />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
