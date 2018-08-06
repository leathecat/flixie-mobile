import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { List, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

//const api_key = "13832345b924b204e79d85b719bc624f";

export default class MovieItems extends Component {
  render() {
    // console.log(this.props)
    return (
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Details", {
              movie: this.props
            })
          }
        >
          <ListItem
            subtitle={
              <View style={styles.subtitleView}>
                <Image
                  style={styles.ratingImage} // {{ width: 80, height: 110 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w342${
                      this.props.poster_path
                    }`
                  }}
                />
                <View>
                  <Text style={{ paddingLeft: 10, fontWeight: "bold", color: "#696969" }}>
                    {this.props.title}{" "}
                  </Text>{" "}
                </View>
                <View>
                <Text style={styles.ratingText}>

                <Icon name="ios-eye" />
                {this.props.popularity} <Icon name="ios-star" />
                {this.props.vote_average}
              </Text>
              </View>
              </View>
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 100,
    width: 80,
    marginTop: -12,
    marginBottom: -10
  },
  ratingText: {
    paddingLeft: 10,
    color: "red"
  }
  // containerStyle: {
  //   marginTop: -40,
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1
  // }
});
