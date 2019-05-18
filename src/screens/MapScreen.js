import React from 'react';
import { View, Text, ActivityIndicator ,StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Location, Permissions,} from 'expo';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { Egemap } from '../components';
import Styles from '../config/Styles'

const data = require('../config/extrait.json')
const infoReceveur = "Bénéficiez d'une aide";
const infoDonneur = "Faites un don"

export default class MapScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        permission: false,
        perspective: this.props.navigation.getParam('perspective'),
        focus: "all",
        showInfoModalOne: false,
        showInfoModalTwo: false,
        initialPosition: null,
        errorPosition: null,
        markers: data.markers
    }
    this._mounted=false
  }

  async requestLocationPermission() {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (this._mounted && status === 'granted') {
        console.log("Permission promise solved")
          this.setState({
              permission: true,
          })
          this.getUserPosition()
      }
  }

  async getUserPosition() {
      if(this.state.permission) {
        let position = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        console.log("Location promise solved")
        if(this._mounted) {
          this.setState({
          initialPosition: position
          });
        }
      }
      else if(this._mounted) {
        console.log("Permission promise solved but not granted")
        this.setState({
          errorPosition: 'Location permission not granted',
        });
      }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: (navigation.getParam('perspective') === 'receveur' ? infoReceveur : infoDonneur),
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
      ),
      gesturesEnabled: false
    };
  };

  giveMoney = () => {
    this.props.navigation.navigate('Donation');
  }

  switchFocus(value) {
    if(this.state.focus !== value) {
      this.setState({
        focus: value
      })
    }
    else {
      this.setState({
        focus: "all"
      })
    }
    
    //displayMarkers()...
    setTimeout(()=> {console.log("New focus = " + this.state.focus)}, 100);
  }

  changeModalVisibilityOne = () => {
    this.state.showInfoModalOne ? this.setState({showInfoModalOne: false}) : this.setState({showInfoModalOne: true})
  }
  changeModalVisibilityTwo = () => {
      this.state.showInfoModalTwo ? this.setState({showInfoModalTwo: false}) : this.setState({showInfoModalTwo: true})
  }


  render() {
    if(this.state.permission) {
      if(this.state.initialPosition != null) {
        if(this.state.perspective == "receveur") {
          return (
            <View style={Styles.container}>
                <View style={Styles.focusContainer}>
                    <TouchableOpacity style={this.state.focus == "food" ? Styles.selectedOption : Styles.options} onPress={() => this.switchFocus("food")} activeOpacity={0.5}>
                        <Text style={{fontSize: 14}}>Nourriture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.focus == "care" ? Styles.selectedOption : Styles.options} onPress={() => this.switchFocus("care")} activeOpacity={0.5}>
                        <Text style={{fontSize: 14}}>Soin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.focus == "clothes" ? Styles.selectedOption : Styles.options} onPress={() => this.switchFocus("clothes")} activeOpacity={0.5}>
                        <Text style={{fontSize: 14}}>Vêtement</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.mapContainer}>  
                  <Egemap markers={this.state.markers} location={this.state.initialPosition} />        
                </View>
            </View>
          )
        }
        else {
          return (
            <View style={[Styles.container, {alignItems: "center"}]}>
                <Modal visible={this.state.showInfoModalOne} animationType="slide" transparent={true} onRequestClose={this.changeModalVisibilityOne}>
                  <View style={Styles.modalInfoView}>
                    <View style={Styles.modalInfoClose}>
                      <Entypo onPress={this.changeModalVisibilityOne} name="circle-with-cross" size={20}/>
                    </View>
                    <View style={Styles.modalInfoMessage}>
                      <Text style={Styles.modalInfoMessageText}>Aidez les associations qui vous tiennes à coeurs avec un don</Text>
                      <MaterialCommunityIcons name="heart-circle-outline" size={50} color="gold"/>
                    </View>
                  </View>
                </Modal>
                <Modal visible={this.state.showInfoModalTwo} animationType="slide" transparent={true} onRequestClose={this.changeModalVisibilityTwo}>
                  <View style={Styles.modalInfoView}>
                    <View style={Styles.modalInfoClose}>
                      <Entypo onPress={this.changeModalVisibilityTwo} name="circle-with-cross" size={20}/>
                    </View>
                    <View style={Styles.modalInfoMessage}>
                      <Text style={Styles.modalInfoMessageText}>Aidez les associations près de chez vous avec des denrées alimentaires ou des vêtements</Text>
                      <MaterialCommunityIcons name="gift" size={50} color="gold"/>
                    </View>
                  </View>
                </Modal>
                <View style={Styles.focusContainer}>
                  <View style={Styles.modalInfoButton}>
                    <FontAwesome onPress={this.changeModalVisibilityOne} name="circle" size={20} />
                  </View>
                  <View style={Styles.focusOptions}>
                    <TouchableOpacity style={Styles.options} onPress={this.giveMoney} activeOpacity={0.5}>
                      <Text style={{fontSize: 14}}>Financier</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width: 70+"%", borderBottomWidth: StyleSheet.hairlineWidth}}/>
                <View style={Styles.focusContainer}>
                  <View style={Styles.modalInfoButton}>
                    <FontAwesome onPress={this.changeModalVisibilityTwo} name="circle" size={20} />
                  </View>
                  <View style={Styles.focusOptions}>
                    <TouchableOpacity style={this.state.focus == "food" ? Styles.selectedOption : Styles.options} onPress={() => this.switchFocus("food")} activeOpacity={0.5}>
                        <Text style={{fontSize: 14}}>Nourriture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.focus == "clothes" ? Styles.selectedOption : Styles.options} onPress={() => this.switchFocus("clothes")} activeOpacity={0.5}>
                        <Text style={{fontSize: 14}}>Vêtement</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={Styles.mapContainer}>
                  <Egemap markers={JSON.stringify(this.state.markers)} location={JSON.stringify(this.state.initialPosition)} />        
                </View>
            </View>
          )
        }
      }
      else {
        return(
            <View style={Styles.loading}>
                <Text style={{fontSize: 28}}>Egenum</Text>
                <ActivityIndicator color="#bb27ff" size="large" />
            </View>
        )
      }
    }
    else {
      return (
          <View style={Styles.container}>
              <View style={Styles.mapContainer}>
                  <Text>Désolé mais nous avons besoin de votre position 
                      pour vous fournir le meilleur service possible :/</Text>
              </View>
          </View>
      )
    }    
  }

  componentDidMount() {
    console.log("MapScreen Mounted")
    this._mounted=true;
    this.requestLocationPermission();
    //fetchMarkers()... 
  }

  componentWillUnmount() {
    console.log("MapScreen Unmounted")
    this._mounted=false;
  }
}