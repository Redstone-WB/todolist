import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.incompletedCircle
            ]}
          ></View>
        </TouchableOpacity>
        <Text style={styles.text}>Hello I'm a ToDo</Text>
      </View>
    );
  }
  _toggleComplete = () => {
    this.setState(prevstate => {
      return {
        isCompleted: !prevstate.isCompleted
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 100,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  incompletedCircle: {
    borderColor: "#F23567"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  }
});
