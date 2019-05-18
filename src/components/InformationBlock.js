import React from 'react'
import { View, Text, TouchableOpacity, Image, WebView, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons' //directions-(walk,car,transit) => link gps jusqua l'asso
import Styles from '../config/Styles'

export default class InformationBlock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={Styles.container}>
                <Text>INFORMATIONBLOCK</Text>
            </View>
        )
    }
}
