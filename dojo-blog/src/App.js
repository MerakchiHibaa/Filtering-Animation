import Navbar from './Navbar' ; 
import Home from './Home' ;   
import Create from './Create' ; 
import {BrowserRouter as Router , Route ,Switch } from 'react-router-dom' ;
function App() {
  const title = "Welcome to the new blog" ;
  return (
    <Router>
    <div className="App">
      <Navbar /> 
      <div className="content">
      <Switch> 
        <Route path="/create"> 
        <Create />
        </Route>

        <Route exact path="/"> 
        <Home />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
