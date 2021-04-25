import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavController from './src/components/NavController';

export default function App() {
  return (   
    <NavController />
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
