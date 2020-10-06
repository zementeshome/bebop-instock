import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header />
    <h1>InStock</h1>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
