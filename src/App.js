import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "84bbec1fd3edc563ed8114ba5fbd2eb8";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if(city && country) {
      var capitalizedDescription = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: capitalizedDescription,
        error: ""
      });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please fill the values"
      });
    }
  }
  
  render(){
    return(
      <div className="base">
        <div className="container">
          <div className="titles">
            <div className="title-container">
              <Titles/>
            </div>
          </div>
          <div className="form">
            <div className="form-container">
              <Form getWeather={this.getWeather} />
              <div className="results">
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;