import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login/Login';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '',
      weather: [],
    }
  }
  getWeather = async () => {
    try{
      const weather = await fetch('http://api.apixu.com/v1/current.json?key=269e174cd49646928a912813183110&q=Denver');
      const weatherJson = await weather.json();
      return weatherJson;
    } catch(err){
      console.log(err);
    }
  }
  componentDidMount(){
    this.getWeather().then((weather) => {
      console.log(weather, 'this is the weather');
      this.setState({weather: weather});
    }).catch((err) => {
      console.log(err);
    })
  }
  handleLogin = (username, loggedIn) => {
    console.log(username, loggedIn, ' in handleLogin');
    this.setState({
      username: username,
      logged: loggedIn
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <WeatherContainer temperature={this.state.temperature} wind={this.state.wind} humidity={this.state.humidity} /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
