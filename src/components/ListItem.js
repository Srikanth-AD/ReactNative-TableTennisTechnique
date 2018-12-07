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
          <View style={styles.cardLabelContainerStyle}>
            <View style={{flex: 1}}>
              <Text style={styles.labelTextStyle}>{exerciseName}</Text>
            </View>
            <View style={{flex: 1,alignItems: 'flex-end'}}>
              <Text style={styles.labelTextStyle}></Text>
            </View>
          </View>
          <CardSection style={styles.cardSectionStyle}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>

              <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{flex: 1.25}}>
                  <Text style={styles.inCardTextStyle}>Forward count:</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.inCardTextStyle}>{forwardCount}</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{flex: 1.25}}>
                  <Text style={styles.inCardTextStyle}>Upward count:</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.inCardTextStyle}>{rescueCount}</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{flex: 1.25}}>
                  <Text style={styles.inCardTextStyle}>Avg. Peak Acceleration:</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.inCardTextStyle}>{avgPeakAcceleration} mph</Text>
                </View>
              </View>

            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 2
  },
  cardLabelContainerStyle: {
    flexDirection: "row",
    height: 32,
    marginTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'flex-start',
    flex: 1
  },
  cardSectionStyle: {
    height: 150,
    paddingLeft: 12,
    paddingRight: 12
  },
  inCardTextStyle: {
    fontSize: 18
  },
  labelTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardLabelStyle: {
    fontSize: 20
  }
};

export default ListItem;
