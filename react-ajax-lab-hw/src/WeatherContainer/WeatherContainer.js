import React, { Component } from 'react';


class WeatherContainer extends Component {
    render(){
        const weatherList = this.props.weather.map((weather, i) => {
            return (
                <li key={i}>
                Humidity: {weather.humidity}<br/>
                Temperature: {weather.temperature}<br/>
                Wind: {weather.wind}<br/>
                </li>
            )
        });
        return (
            <div>
                <h1>Hi {this.props.username}</h1>
                <h2>Weather Page</h2>
                <ul>
                    {WeatherContainer}
                </ul>
            </div>
        )
    }
}

export default WeatherContainer;