
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './screens/search/ui/search-ui'


export default function App() {
  return (
    <View style={styles.container}>
    <Search styles={styles}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    margin: '2em'
  },
  center : {
    width : '90%',
    marginLeft:'auto',
    marginRight: 'auto',
  }
});
