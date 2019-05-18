import React from 'react'
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'

import { SignUp, SignIn } from './auth';
import { HomeScreen, AboutScreen, ContactScreen, MapScreen, DonationScreen } from './screens';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import {WebViewer, CustomDrawer} from './components';

const SignInStack = createStackNavigator({SignInScreen: SignIn});
const SignUpStack = createStackNavigator({SignUpScreen: SignUp});
const AuthFlow = createSwitchNavigator(
    {
        Login: SignInStack,
        Register: SignUpStack,
    }
);

const AboutStack = createStackNavigator({ About: AboutScreen }, {headerLayoutPreset: "center",});
const ContactStack = createStackNavigator({ Contact: ContactScreen}, {headerLayoutPreset: "center",});

const MapNavigation = createStackNavigator(
    {
        Homepage: HomeScreen,
        WebView: WebViewer,
        Map: MapScreen,
        Donation: DonationScreen
    },
    {
        initialRouteName: "Homepage",
        headerLayoutPreset: "center",
    }
);
const SideNavigation = createDrawerNavigator(
    {
        HomeStack: {screen: MapNavigation, },
        AuthScreens: {screen: AuthFlow, },
       AboutUs: {screen: AboutStack, },
        ContactUs: {screen: ContactStack, },
    },
    {
        drawerPosition: 'right',
        contentComponent: CustomDrawer,
    }
);

const RootNavigator = createSwitchNavigator(
    {
        Root: SideNavigation,
    },
    {
        initialRouteName: "Root"
    }
);

export default createAppContainer(RootNavigator) ;