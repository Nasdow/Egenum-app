import React from 'react';
import { View, AppState, AsyncStorage } from 'react-native';
import Egenum from './src/Egenum'
import Styles from './src/config/Styles'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      appState: AppState.currentState
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && (nextAppState === 'active')) {
      console.log('app opened');
      {/** check user token / refresh token if necessary / */}
    }

    if(this.state.appState === 'active' && (nextAppState.match(/inactive|background/))) {
      console.log('app closed');
      {/** prepare app close, check credential saving or not (reauth),  */}
    }

    this.setState({appState: nextAppState});
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  bootstrapAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('@userAuthCredentials');
      if(userToken !== null) {
        {/** Do what ? */}
      }
      else {
        {/** Do what ?  */}
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Egenum />
      </View>
    );
  }
}