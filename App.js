import React from 'react';
import { StyleSheet, Text, View, TextInput, 
  TouchableOpacity } from 'react-native';


  /**
   * This file contains 3 different versions of the Input Demo app.
   * To change which version runs, just change which one is the 
   * 'default' export.
   */
export class BasicInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentText: ""};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.currentText}</Text>
        <TextInput
          placeholder="Type here"
          onChangeText={textValue => this.setState({currentText: textValue})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 50
  },
  labelText: {
    flex: 0.05,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  helloLabel: {
    flex: 0.1,
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Times New Roman'
  },
  label: {
  },
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: '60%',
    padding: 5,
    fontFamily: 'Courier'
  }
});


export default class HelloName extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloLabel}>
          Hello, {this.state.firstName} {this.state.lastName}!
        </Text>
        <View style={styles.labelText}>
          <Text style={styles.label}>First Name: </Text>
          <TextInput
            placeholder="enter first name"
            onChangeText={textValue => this.setState({firstName: textValue})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.labelText}>
          <Text style={styles.label}>Last Name: </Text>
          <TextInput
            placeholder="enter last name"
            onChangeText={textValue => this.setState({lastName: textValue})}
            style={styles.textInput}
          />
        </View>
      </View>
    )
  }

}

export class SaveApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputContents: '',
      savedContents: ''
    };
  }

  handleChange = (text) => {
    console.log(text);
    this.setState(() => {return {inputContents: text}});
  } 

  handlePress = () => {
    console.log(this.state);
    this.setState((state)  => {return {savedContents: state.inputContents}});
  }

  render() {  
    return (
      <View style={styles.container}>
        <Text>
          {this.state.savedContents}
        </Text>
        <TextInput
          onChangeText={this.handleChange}
          placeholder="Type here to translate!"
          style={uiStyles.input}
        />
        <TouchableOpacity
          onPress={this.handlePress}
          style={uiStyles.button}>
            <Text>Save</Text>
          
          </TouchableOpacity>
      </View>
    );
  }
}

const uiStyles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 40,
    width: '95%'
  },
  button: {
    margin: 40,
    height: 40,
    width: 80,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10

  }
});
