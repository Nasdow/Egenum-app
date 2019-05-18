import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Styles from '../config/Styles'

export default class SignUp extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Creez un compte',
      headerStyle: {
        backgroundColor: '#cccccc',
      },
      headerTintColor: '#000',
      headerTitleStyle: Styles.textHeader,
      headerRight: (
        <Ionicons style={Styles.iconHeaderDrawer} onPress={() => navigation.toggleDrawer()} name="md-menu" size={30} />
      )
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
