import React, { Component } from 'react';


class WeatherContainer extends Component {
    render(){
        return (
            <div>
                <h1>Hi {this.props.username}</h1>
                <h2>Weather Page</h2>
            </div>
        )
    }
}

export default WeatherContainer;