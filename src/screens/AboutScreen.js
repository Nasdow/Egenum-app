import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../config/Styles'

export default class AboutScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'À propos de nous',
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
      <View style={Styles.container}>
        <View style={{paddingLeft: 5}}>
          <Text style={{textAlign: "left", fontSize: 20, fontWeight: "bold", color: "black"}}>egenum{`\n`}</Text>
        </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Text>egenum vous met en relation avec des associations humanitaires pour :</Text>
          <Text style={{textAlign: "justify", fontWeight: "bold", color: "gray"}}>
          {`- INFORMER\n- DONNER\n- RECEVOIR
          `}</Text>
          <Text>L'accès aux besoins blablabla...</Text>
        </View>
      </View>
    );
  }
}