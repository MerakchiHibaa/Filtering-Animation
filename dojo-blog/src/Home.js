import {useState} from 'react' ;
const Home = () => {
  
const [name , setName] = useState('Mario') ; 
const handleClick = () => {
      setName('Luigi') ; 
    }
   
    return ( 
        <div className="home"> 
        <h2>Homepage</h2>
        <p> {name} </p>
        <button onClick={handleClick}  > Click me</button>
{/*         <button onClick ={()=>  handleClickAgain('mario')}> Click me again </button>
 */}        </div>
     );
}
 
export default Home;