import {useState} from 'react' ;
import BlogList from './BlogList';
const Home = () => {
  
/* const [name , setName] = useState('Mario') ; 
const  [age , setAge] = useState(20) ;
const handleClick = () => {
      setName('Luigi') ; 
      setAge(30) ;
    } */
   
    const [blogs , setBlogs] = useState(
        [ { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]
    )
    return ( 
        <div className="home"> 
      <BlogList blogs={blogs} title="All Blogs"></BlogList>
{/*         <button onClick={handleClick}  > Click me</button>
 */}{/*         <button onClick ={()=>  handleClickAgain('mario')}> Click me again </button>
 */}        </div>
     );
}
 
export default Home;