// Home component
import Home from './components/screens/home';

import React from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component{


  render(){
    return(
      
      <Router>
      <div>

      <Switch>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      
      </div>
      </Router>

      );
  }
}

export default App;