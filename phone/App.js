import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './screens/search/ui/search-ui'
import { Provider} from '@ant-design/react-native';
export default function App() {
  
  return (
    <Provider>
      <View style={styles.container}>
        <Search styles={styles}  />
      </View>
    </Provider>
  );
}

const styles =  StyleSheet.create({
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
    paddingTop: '0.6em'
  },

  button : {
    width : '50%',
    marginRight: 'auto'
  }
  
});
