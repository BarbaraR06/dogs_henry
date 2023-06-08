import Home from './components/home/home';
import Landing from './components/landing/landing';
import Form from './components/create/create';
import React from 'react';
import Detail from './components/detail/detail';
import { Route, Switch } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Landing} />
       <Route exact path="/home" component={Home} />
       <Route exact path="/create" component={Form} />
       <Route exact path="/home/:id" component={Detail} />
     </Switch>
    </div>
  );
}

export default App;
