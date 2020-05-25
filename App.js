import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Screen from './client/screens/Screen';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}

const styles = StyleSheet.create({});


