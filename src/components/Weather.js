import React from 'react';

const Weather = (props) => {

    var flagUrl = `https://www.countryflags.io/${props.country}/flat/64.png`;

    return(
        <div className="base-results">
            { props.country && <div className="icon-container"><img src={flagUrl} alt="flag icon"></img></div> }
            { props.city && props.country && <p className="cityName">{ props.city }, { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature }C</p> }
            { props.humidity && <p>Humidity: { props.humidity }%</p> }
            { props.description && <p>{ props.description } at the moment</p> }
            { props.error && <p className="errors">{ props.error }</p>}
        </div>
    );
}

export default Weather;