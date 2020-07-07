import React from 'react';
import './App.css';
import ListView from './Components/ListView';
import Home from './Components/Home';
import ViewItem from './Components/ViewItem';
import {Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>          
        </nav>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipes">
            <ListView />
          </Route>
          <Route path="/view/:id" component={ViewItem} />
                
        </Switch>
        
    </div>
  );
}

export default App;
