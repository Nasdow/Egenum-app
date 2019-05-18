import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../config/Styles'

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'egenum',
      headerStyle: {
        backgroundColor: '#cccccc',
      },
      headerTintColor: '#000',
      headerTitleStyle: Styles.textHomeHeader,
      headerRight: (
        <Ionicons style={Styles.iconHeaderDrawer} onPress={() => navigation.toggleDrawer()} name="md-menu" size={30} />
      )
    }
  };

  accessMap(perspectiveValue) {
    this.props.navigation.navigate('Map', { perspective: perspectiveValue });
  }

  openWebView(uri, doc) {
    this.props.navigation.navigate('WebView', {url: uri, linkName: doc});
  }

  render() {
    return(
      <View style={Styles.container}>
          <View style={Styles.perspectiveView}>
              <TouchableOpacity onPress={() => this.accessMap("donneur")} style={[Styles.perspectiveButton, {backgroundColor: "#fff"}]}>
                  <Text style={[Styles.textPerspectiveButton, {color: "black"}]}>DONNER</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.accessMap("receveur")} style={[Styles.perspectiveButton, {backgroundColor: "#000"}]}>
                  <Text style={[Styles.textPerspectiveButton, {color: "white"}]}>RECEVOIR</Text>
              </TouchableOpacity>
          </View>
          <View style={Styles.perspectiveCredit}>
            <TouchableOpacity onPress={() => this.openWebView("https://google.fr", "Conditions d'utilisation")} >
              <Text style={Styles.textCredit}>Conditions générales d'utilisation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openWebView("https://yahoo.fr", "Politique de confidentialité")} >
              <Text style={Styles.textCredit}>Politique de confidentialité</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}