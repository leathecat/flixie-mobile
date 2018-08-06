import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import Header from "./src/components/Header";
import MovieItems from "./src/components/MovieItems";
import DetailsScreen from "./src/components/DetailsScreen";

import { SearchBar, List, ListItem } from "react-native-elements";
import {
  createStackNavigator
} from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; 

const api_key = "13832345b924b204e79d85b719bc624f";

export class HomeScreen extends Component {
  static navigationOptions = {
      headerTitle : <View style={{flex: 1, height: 0, padding: 22}} > <Image style={{ alignSelf: 'center', marginTop: -25}} source={require("./src/components/Flixie_logo-01.png")} /> </View>
      }
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const timeout = ms => new Promise(res => setTimeout(res, ms));

    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1`;
    let response = await fetch(url);
    let data = await response.json();

    await timeout(2000);
    this.setState({
      movies: data.results,
      isLoading: false
    });
  }

  async handleInputChange(inputText) {
    if (inputText.length > 0) {
      try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false&query=${inputText}`;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
          movies: data.results
        });
      } catch (err) {
        alert(err);
      }
    }
  }

  async sortByRating() {
    let data = await (await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
    )).json();
    this.setState({
      movies: data.results
    });
  }

  // async sortByPop() {
  //   let data = await (await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  //   )).json();
  //   this.setState({
  //     movies: data.results
  //   });
  // }

  // async sortByRelease() {
  //   //hoist function?
  //   let data = await (await fetch(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
  //   )).json();
  //   data.results.sort(function(mov1, mov2) {
  //     if (mov1.release_date > mov2.release_date) return -1;
  //     if (mov1.release_date < mov2.release_date) return 1;
  //   });
  //   this.setState({ movies: data.results });
  // }

  render() {
    return (
      <View>
      {this.state.isLoading ? (
        <Text> Is Loading... </Text> 
      ) : (
        <View>
        <SearchBar
          lightTheme
          onChangeText={e => this.handleInputChange(e)}
          //onClearText={window.location.reload()}
          icon={{ type: "font-awesome", name: "search" }}
          placeholder="Search Movie"
        />

        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => (
            <MovieItems {...item}  loading={this.state.loading} navigation={this.props.navigation}/>
          )}
          onEndReached={() => alert('test') }
          onEndReachedThreshold={0.05}
        />
        </View> 
        )}
      </View> 
    );
  }
}

// export class TopRated extends Component {
//   render () {
//     <View >
//       <Text >Setting!!!! </Text>
//       </View>
//   }
// }

// export default createBottomTabNavigator  ({
//   Home: HomeScreen, //HOme = Now PLaying
//   TopRated: TopRated

// })

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// <View style={styles.container} >
//       <Text >Open up App.js to start working on your app!</Text>
//       <Text>Changes you make will automatically reload.</Text>
//       <Text>Shake your phone to open the developer menu.</Text>
//       </View>

// AppRegistry.registerComponent("fixie-mobile", () => App);


