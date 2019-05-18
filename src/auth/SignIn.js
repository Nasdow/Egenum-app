import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Styles from '../config/Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class SignIn extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Connectez-vous',
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

  constructor(props) {
    super(props);
  }

  CheckCredentialsAsync = async () => {
    {/** 
      - vérifer les infos de connexions [REST CALL] 
      - créer le token de connexion
      - asyncStorage userToken
    */}
  }

  render() {
    return (
      <View style={[Styles.container, {alignItems: "center", justifyContent: "center"}]}>
        <Text>Sign In here!</Text>
      </View>
    );
  }
}