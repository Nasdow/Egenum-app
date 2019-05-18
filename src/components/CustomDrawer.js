import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation'
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

export default class CustomDrawer extends React.Component {

    navigateToScreen = ( route ) =>(
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        }
    );

    resetHomeStack = () => {
        const resetStackAction = StackActions.reset({
            index: 0,
            key: "HomeStack",
            actions: [
                NavigationActions.navigate({
                    routeName: "Homepage"
                })
            ]
        });
        this.props.navigation.dispatch(resetStackAction);
    }

    resetContactStack = () => {
        const resetStackAction = StackActions.reset({
            index: 0,
            key: "ContactUs",
            actions: [
                NavigationActions.navigate({
                    routeName: "Contact"
                })
            ]
        });
        this.props.navigation.dispatch(resetStackAction);
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>egenum</Text>
                </View>
                <View style={{borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 5, width: 80+"%", alignSelf: "center"}}/>
                <View style={styles.screensContainer}>
                    <TouchableOpacity style={this.props.activeItemKey === "HomeStack" ? styles.activeScreenEntry : styles.screensEntry} onPress={this.resetHomeStack} activeOpacity={0.5}>
                        <View style={styles.screenIcon}>
                            <MaterialCommunityIcons name="home" size={24}/>
                        </View>
                        <Text style={this.props.activeItemKey === "HomeStack" ? styles.activeScreenText : styles.inactiveScreensText}>Accueil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.props.activeItemKey === "AuthScreens" ? styles.activeScreenEntry : styles.screensEntry} onPress={this.navigateToScreen('AuthScreens')} activeOpacity={0.5}>
                        <View style={styles.screenIcon}>
                            <MaterialCommunityIcons name="login-variant" size={24}/>
                        </View>
                        <Text style={this.props.activeItemKey === "AuthScreens" ? styles.activeScreenText : styles.inactiveScreensText}>Se Connecter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.props.activeItemKey === "AboutUs" ? styles.activeScreenEntry : styles.screensEntry} onPress={this.navigateToScreen('AboutUs')} activeOpacity={0.5}>
                        <View style={styles.screenIcon}>
                            <MaterialCommunityIcons name="information-variant" size={24}/>
                        </View>
                        <Text style={this.props.activeItemKey === "AboutUs" ? styles.activeScreenText : styles.inactiveScreensText}>À propos de nous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.props.activeItemKey === "ContactUs" ? styles.activeScreenEntry : styles.screensEntry} onPress={this.resetContactStack} activeOpacity={0.5}>
                        <View style={styles.screenIcon}>
                            <Ionicons name="md-contacts" size={24}/>
                        </View>
                        <Text style={this.props.activeItemKey === "ContactUs" ? styles.activeScreenText : styles.inactiveScreensText}>Nous contacter</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: wp(3)
    },
    headerText: {
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    screensContainer: {
        flex: 9,
    },
    screensEntry: {
        flexDirection: 'row',
        height: hp(6),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    activeScreenEntry: {
        flexDirection: 'row',
        height: hp(6),
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    screenIcon: {
        marginLeft: wp(3),
        marginRight: wp(7)
    },
    inactiveScreensText: {
        fontSize: hp(2.5),
        fontWeight: '400'
    },
    activeScreenText: {
        fontSize: hp(2.5),
        fontWeight: '500',
        color: '#3CA7FF'
    }
});