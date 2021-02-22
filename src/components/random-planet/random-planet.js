import React, { Component } from 'react';
import SwapiService from '../../services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    // setInterval(() => this.updatePlanet(), 5000);
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      loading: false,
      error: true,
    })
    console.error('Error: ', err); 
  }

  updatePlanet = () => {
    // const id = Math.floor(Math.random() * 20 + 2);
    const id = 1500;
    const swapi = new SwapiService();
    swapi.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const showSpinner = loading ? <Spinner /> : null;
    const showPlanet = hasData ? <PreviewPlanet planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {showSpinner}
        {showPlanet}
      </div>
    );
  }
}

const PreviewPlanet = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={`${name}`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
