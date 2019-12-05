import React from 'react';

const Weather = (props) => {
    return(
        <div className="base-results">
            { props.city && props.country && <p className="cityName">{ props.city }, { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature }C</p> }
            { props.humidity && <p>Humidity: { props.humidity }%</p> }
            { props.description && <p>{ props.description } at the moment</p> }
            { props.error && <p className="errors">{ props.error }</p>}
        </div>
    );
}

export default Weather;