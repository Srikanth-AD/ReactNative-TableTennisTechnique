import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Spinner } from '../components/common';
import { summariesFetch } from '../actions';
import ListItem from './ListItem';

class SummaryList extends Component {

  keyExtractor = (item) => item.uid;

  componentDidMount() {
    this.props.summariesFetch();
  }

  renderRow({item }) {
    return <ListItem summary={item} {...this.props} />;
  }

  render() {
    if (!this.props.summaries.length) return <Spinner size="large"/>;
    return (
      <FlatList
          data={this.props.summaries}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  const summaries = _.map(state.summaries, (val, uid) => {
    return { ...val, uid };
  });
  console.log(summaries);
  return { summaries };
};

export default connect(mapStateToProps, { summariesFetch })(SummaryList);
