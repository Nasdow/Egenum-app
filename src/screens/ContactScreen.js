import React from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../config/Styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ContactScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nous contacter',
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
    super(props)
    this.state = {
      name: "",
      mail: "",
      message: "",
      emailCorrect: false,
      isSending: false
    }
  }

  validateEmail(email) {
    let reg = RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$') ;
    if(reg.test(email) === false) {
      console.log("Wrong Email")
      this.setState({emailCorrect: false});
    }
    else {
      console.log("Right Email")
      this.setState({emailCorrect: true});
    }
  }

  sendMessage = (name, mail, message) => (
    () => {
      this.setState({isSending: true})
      console.log("Message from "+name+" address : "+mail+" saying: "+message);
      this.validateEmail(mail)
      setTimeout(()=> {
        if(this.state.emailCorrect === true) {
          console.log("Sending...")
          Alert.alert("Message envoyé !", "Une copie vous à été envoyé sur votre boîte mail")
          {/**SEND MESSAGE FUNCTION HERE !!!!!! */}
          this.setState({
            name: "",
            mail: "",
            message: "",
            emailCorrect: false,
            isSending: false
          })
        }
        else {
          Alert.alert("Adresse mail incorrecte", "Veuillez entrer une adresse mail valide")
          this.setState({isSending: false})
        }
      }, 1000);
      
    }
    
  );
  
  render() {
    const formButton = this.state.isSending ? <ActivityIndicator color="deepskyblue" size='small' /> : <Text style={styles.formValidationText}>Envoyer</Text>;
    return (
      <KeyboardAvoidingView style={Styles.container} behavior='padding' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Styles.container}>
        <View style={styles.contactContainer}>
          <Text style={styles.contact}>EGENUM@HOTMAIL.COM</Text>
        </View>
        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, alignSelf: 'center', width: 80+"%"}}/>
        <View style={styles.formContainer}>
          <View style={styles.formEntry}>
            <View style={styles.formTextView}>
              <Text style={styles.formText}>Votre nom : </Text>
            </View>
            <View style={styles.formInputView}>
              <TextInput style={styles.formInput} onChangeText={ (text) => this.setState({name: text})} 
                          placeholder={" Nom..."} value={this.state.name}
                          keyboardType='default' maxLength={500} textContentType='name'/>
            </View>
          </View>
          <View style={styles.formEntry}>
            <View style={styles.formTextView}>
              <Text style={styles.formText}>Votre email : </Text>
            </View>
            <View style={styles.formInputView}>
              <TextInput style={styles.formInput} onChangeText={ (text) => this.setState({mail: text})} 
                          placeholder={" Email..."} autoCapitalize='none' value={this.state.mail}
                          keyboardType='email-address' maxLength={500} textContentType='emailAddress'/>
            </View>
          </View>
          <View style={styles.formMessageEntry}>
            <View style={styles.formTextView}>
              <Text style={styles.formText}>Votre message : </Text>
            </View>
            <View style={styles.formMessageInputView}>
              <TextInput style={styles.formMessageInput} onChangeText={ (text) => this.setState({message: text})} 
                          placeholder={" Votre message..."} multiline={true} numberOfLines={5} 
                          keyboardType='default' maxLength={500} value={this.state.message} />
            </View>
          </View>
        </View>
        <View style={styles.formValidation}>
          <TouchableOpacity style={styles.formValidationButton} activeOpacity={0.8}
          onPress={this.sendMessage(this.state.name, this.state.mail, this.state.message)} >
            {formButton}
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contact: {
    color: 'gold',
    fontSize: hp(2.5),
  },
  formContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: wp(5)
  },
  formEntry: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formMessageEntry: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    width: 100+"%",
    height: 100+"%"
  },
  formTextView: {
    paddingLeft: wp(2),
  },
  formText: {
    color: 'black',
    fontSize: hp(2),

  },
  formInputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  formMessageInputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100+"%"
  },
  formInput: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginLeft: wp(1),
    width: 100+"%",
    height: 50+"%",
    borderRadius: 5,
  },
  formMessageInput: {
    borderWidth: 1,
    width: 100+"%",
    height: 100+"%",
    borderRadius: 5,
  },
  formValidation: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formValidationButton: {
    borderRadius: 8,
    backgroundColor: '#eee',
    width: wp(27),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  formValidationText: {
    fontSize: hp(3),
    color: 'deepskyblue',
  },
})