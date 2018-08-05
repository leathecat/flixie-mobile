import React from "react";
import { View, Text } from "react-native";

 export default class Header extends React.Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}> {this.props.headerLogo}</Text> 
      </View>
    );
  }
} 

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};
