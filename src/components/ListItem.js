import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    
    const {
      exerciseName,
      forwardCount,
      rescueCount,
      avgPeakAcceleration
    } = this.props.summary;

    return (
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {exerciseName},
              Forward count: {forwardCount},
              Upward count: {rescueCount},
              Avg peak acceleration: {avgPeakAcceleration}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
