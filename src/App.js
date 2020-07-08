import React from 'react';
import './App.css';
import ListView from './Components/ListView';
import Home from './Components/Home';
import ViewItem from './Components/ViewItem';
import {Switch,Route,NavLink} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes" activeClassName="active">Recipes</NavLink>
            </li>
          </ul>          
        </nav>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipes">
            <ListView />
          </Route>
          <Route path="/view/:id" component={ViewItem} />
                
        </Switch>
        
    </div>
  );
}

export default App;
