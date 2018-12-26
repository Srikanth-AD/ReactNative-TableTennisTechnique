import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableHighlight, Alert, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    );
  }

  onForgotPasswordButtonPress() {
    Actions.push("forgotPassword");
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@example.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry label="Password"
              placeholder="password"
              value={this.props.password}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>

        <View style={{ height: 30}}>
          <TouchableHighlight
              style={{flex: 1, alignSelf: 'stretch', marginTop: 10,
                paddingRight: 8}}
              onPress={this.onForgotPasswordButtonPress}>
                <Text style={{textDecorationLine: 'underline', color: '#007AFF',
                  fontSize: 18, alignSelf: 'flex-end'}}>Forgot Password?</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email, password, error, loading
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
