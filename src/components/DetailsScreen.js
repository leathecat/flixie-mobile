import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("movie").title
    };
  };

  render() {
      
    let movie = this.props.navigation.getParam("movie");
    console.log(movie.poster_path)
    return (
      <View>
        <Text style={styles.Overview}>
          {movie.overview}
        </Text>
        <Image
       style={styles.MainContainer}
        source={{
          uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        }}
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({

    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: 500
    }, 
    Overview : {
        justifyContent: 'center',
      alignItems: 'center',
      padding: 20

    }
   
   });
   
