import React from 'react';

const Country = (props) => {
    const { name, capital, population, region, flag } = props.country;
    const flagStyle = { height: '50px' }
    return (
        <div>
            <h4>This is :{name}</h4>
            <p>Capital:{capital}</p>
            <img style={flagStyle} src={flag} alt="" />
            <p> Population: {population}</p>
            <p><small>Region:{region}</small></p>
        </div >
    );
};

export default Country;