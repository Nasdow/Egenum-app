import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../config/Styles'

export default class DonationScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Don financier',
      headerStyle: {
        backgroundColor: '#cccccc',
      },
      headerTintColor: '#000',
      headerTitleStyle: Styles.textHeader,
      headerLeft: (
        <Ionicons style={Styles.iconHeaderBack} onPress={() => navigation.pop()} name="md-arrow-round-back" size={30} />
      ),
      headerRight: (
        <Ionicons style={Styles.iconHeaderDrawer} onPress={() => navigation.toggleDrawer()} name="md-menu" size={30} />
      )
    }
  };
  
  render() {
    return (
      <View style={Styles.container}>
        <Text>DonationScreen goes here!</Text>
        {/**Liste des associations triées par catégories [Famine, Maladie, Scolarité, Infrastructure] */}
      </View>
    );
  }
}