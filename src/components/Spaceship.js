// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component {
    render() {
        const { name, speed, hasRockets, colors } = this.props;
        return (
            <div>
                <h2>Spaceship Name: {name}</h2>
                <p>Speed: {speed}</p>
                <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
                <ul>
                    {colors.map((color, index) => <li key={index}>{color}</li>)}
                </ul>
            </div>
        )
    }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
