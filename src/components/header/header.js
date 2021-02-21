import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
  mainMenuItems = [
    { id: 'people', label: 'People' },
    { id: 'planets', label: 'Planets' },
    { id: 'starships', label: 'Starships' },
  ];

  render() {
    return (
      <div className="header d-flex">
        <h3>
          <a href="/#">Star DB</a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="/#" id="#">
              People
            </a>
          </li>
          <li>
            <a href="/#" id="#">
              Planets
            </a>
          </li>
          <li>
            <a href="/#" id="#">
              Starships
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
