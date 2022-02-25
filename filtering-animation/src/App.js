import './App.css';
import Movie from './Movie' ;
import Filter from './Filter' ;
import { useEffect , useState} from "react" ; 
function App() {
  const [popular , setPopular] = useState([]) ; //the data we get is an array of
  const [filtered , setFiltered] = useState([]) ; 
  const [activeGenre , setActiveGenre] = useState(0) ; //the genre is set as a number in the coming requestData

  useEffect( ()=> {
    fetchPopular() ; 
  } , []) ; 
  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2a4795bbacb34af632906cda4aa913a7&language=en-US&page=1') ; 
    const movies = await data.json();
    setPopular(movies.results) ; 
    setFiltered(movies.results) ; 
  }
  return (
    <div className="App">
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre}  />
     <div className="popular-movies">
       {filtered.map(movie => {
         return <Movie key={movie.id} movie={movie} /> 

       })}
     </div>

    </div>
  );
}

export default App;
