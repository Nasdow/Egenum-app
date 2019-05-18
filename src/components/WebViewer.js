import React from 'react';
import { View, Button, StyleSheet, WebView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../config/Styles';

export default class WebViewer extends React.Component {

    constructor(props) {
        super(props)
    }
    
    static navigationOptions = ({navigation}) => {
        return {
          title: navigation.getParam('linkName'),
          headerStyle: {
            backgroundColor: '#cccccc',
          },
          headerTintColor: '#000',
          headerTitleStyle: Styles.textHeaderCredit,
          headerLeft: (
            <Ionicons style={Styles.iconHeaderBack} onPress={() => navigation.pop()} name="md-arrow-round-back" size={30} />
          ),
          headerRight: (
            <Ionicons style={Styles.iconHeaderDrawer} onPress={() => navigation.toggleDrawer()} name="md-menu" size={30} />
          )
        }
    };

    render() {
        const url = this.props.navigation.getParam('url');
        return (
        <View style={Styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ uri: url }}
                onError={(e) => { return alert('An error occured: '+e) }}
                style={{marginTop: 20}}
            />
        </View>
        );
    }
}