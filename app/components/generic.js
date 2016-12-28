import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button
} from 'react-native';

import styles from '../styles';


export const SingleItemRow = props => (
  <View style={styles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.textTitle}>
        {props.name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={styles.text}>
        {props.value ? props.value : ''}
      </Text>
    </View>
  </View>
);

export const RemovableRow = props => (
  <View style={styles.containerRow}>
    <View style={styles.remRowItem}>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </View>
    <View style={styles.remRowItem}>
      <Text style={styles.text}>
        {props.value}
      </Text>
    </View>
    <View style={styles.remRowButton}>
      <Button
        onPress={props.onRemove}
        title="x"
        color="firebrick"
      />
    </View>
  </View>
);

export const NavRow = props => (
  <View style={styles.navRow}>
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="steelblue"
    >
      <Text style={styles.navText}>
        {props.text}
      </Text>
    </TouchableHighlight>
  </View>
);

export class InsertRow extends Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  submitAndClear(e) {
    this.props.insertItem(e);
    this.setState({ text: null });
  }

  render() {
    return (
      <TextInput
        placeholder="Add something here"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={e => this.submitAndClear(e)}
      />
    );
  }
}
