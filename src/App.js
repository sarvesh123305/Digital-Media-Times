import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  page = 6
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={this.page} country="in" category="general" key="general" />
        {/*
          import {
                Route
            } from 'react-router-dom';
            
            <Route exact path='/' >
        </Route>

        <Route exact path='/' >
          <News pageSize={this.page} country="in" category="general" key="general" />
        </Route>
        <Route exact path='/' >
          <News pageSize={this.page} country="in" category="general" key="general" />
        </Route>
        <Route exact path='/' >
          <News pageSize={this.page} country="in" category="general" key="general" />
        </Route>
        <Route exact path='/' >
          <News pageSize={this.page} country="in" category="general" key="general" />
        </Route>
        <Route exact path='/' >
          <News pageSize={this.page} country="in" category="general" key="general" />
        </Route>
    */}
      </div>
    )
  }
}


