import React from 'react';
import { View, FlatList, StyleSheet, Modal, Text } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import MapView, {Marker} from 'react-native-maps';
import { Header } from 'react-navigation'


export default class Egemap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialPosition: this.props.location,
            markers: this.props.markers,
            showModal: false
        }
    }

    centerMap = () => {
        const latitude = JSON.parse(this.state.initialPosition.coords.latitude)
        const longitude = JSON.parse(this.state.initialPosition.coords.longitude)
        const latitudeDelta = 0.1
        const longitudeDelta = 0.1
        this.map.animateToRegion({
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta
        })
    }

    changeModalVisibility = () => {
        this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true})
    }

    render() {
        return (
            <View style={styles.container}>
                {/**Début de <Egemap {@params}/> ----------------------------------- */}
                <Modal visible={this.state.showModal} animationType="slide" transparent={true} onRequestClose={this.changeModalVisibility}>
                    <View style={styles.modalView}>
                        <View style={styles.modalMarkerView}>
                            <Text>List of markers goes here !</Text>
                            {/**FlatList des composants <InformationBlock {@params}/> */}
                        </View>
                        <View style={styles.modalViewSeparator}/>
                        <View style={styles.modalCloseView}>
                            <MaterialCommunityIcons style={styles.modalCloseButton} onPress={this.changeModalVisibility} name="chevron-down-circle" size={40} />
                        </View>
                    </View>
                </Modal>
                <MapView style={styles.map} ref={map => {this.map = map}}
                    region={{
                        latitude: JSON.parse(this.state.initialPosition.coords.latitude),
                        longitude: JSON.parse(this.state.initialPosition.coords.longitude),
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                    showsUserLocation={true}
                >
                {this.state.markers.map(marker => (
                    <Marker
                    key={marker.id}
                    coordinate={marker.address.coords}
                    title={marker.entity.name}
                    />
                ))}
                </MapView>
                <MaterialCommunityIcons style={styles.modalOpenButton} onPress={this.changeModalVisibility} name="map-search-outline" size={30} />
                <MaterialIcons style={styles.centerButton} onPress={this.centerMap} name="my-location" size={30} />
                {/**Fin de Egemap ----------------------------------- */} 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 100+"%",
        height: 100+"%",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    modalOpenButton: {
        position: "absolute",
        top: 30,
        right: 30,
    },
    modalCloseButton: {
    },
    centerButton: {
      position: "absolute",
      top: 30,
      left: 30,
    },
    modalView: {
      flex: 1,
      alignItems: "center",
      borderRadius: 5,
      marginTop: Header.HEIGHT + 30,
      marginHorizontal: 10,
      marginBottom: 30,
      backgroundColor: 'rgba(221, 221, 221, 0.8)',
    },
    modalMarkerView: {
        flex: 10,
    },
    modalViewSeparator: {
        width: 70+"%",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    modalCloseView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    }
})