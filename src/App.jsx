import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio/Inicio'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
