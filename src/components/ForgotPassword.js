import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import { connect } from 'react-redux';
import { Text, View, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { forgotPasswordEmailChanged } from '../actions';

class ForgotPassword extends Component {

  _onPressButton() {
    Alert.alert(this.props.forgotPasswordEmail);
    //Actions.reset('auth');
  }

  onForgotPasswordEmailChange(text) {
    this.props.forgotPasswordEmailChanged(text);
  }

  render() {


    return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@example.com"
              onChangeText={this.onForgotPasswordEmailChange.bind(this)}
              value={this.props.forgotPasswordEmail}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this._onPressButton.bind(this)}>Forgot Password</Button>
          </CardSection>
        </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { forgotPasswordEmail } = auth;
  return {
    forgotPasswordEmail
  };
}

export default connect(mapStateToProps, {
  forgotPasswordEmailChanged
})(ForgotPassword);
