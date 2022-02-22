import './App.css';
import Navbar from './Navbar' ; 
import Home from './Home' ;   

function App() {
  const title = "Welcome to the new blog" ;
  return (
    <div className="App">
      <Navbar> </Navbar>
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
