import './App.css';
import Movie from './Movie' ;

import { useEffect , useState} from "react" ; 
function App() {
  const [popular , setPopular] = useState([]) ; //the data we get is an array of
  useEffect( ()=> {
    fetchPopular() ; 
  } , []) ; 
  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2a4795bbacb34af632906cda4aa913a7&language=en-US&page=1') ; 
    const movies = await data.json();
    setPopular(movies.results) ; 
  }
  return (
    <div className="App">
     <div className="popular-movies">
       {popular.map(movie => {
         return <Movie key={movie.id} movie={movie} /> 

       })}
     </div>

    </div>
  );
}

export default App;
