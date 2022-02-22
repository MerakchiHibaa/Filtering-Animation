import {useState , useEffect} from 'react' ;
import BlogList from './BlogList';
const Home = () => {
  

   
    const [blogs , setBlogs] = useState(null) ; 
    const [isPending , setIsPending] = useState(true) ;
   /*  [ { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]
 */
    
   /*  const handleDelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs) ;
    } */
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
     .then(res => {
        return res.json() ;
     })
     .then(data => {
setBlogs(data) ;
setIsPending(false) ;
 
     })
    /*  setTimeout( ()=> { 
     fetch('http://localhost:8000/blogs')
     .then(res => {
        return res.json() ;
     })
     .then(data => {
setBlogs(data) ;
setIsPending(false) ;
 
     }) } , 1000 ) ;  */
     } , [])

    return ( 
        <div className="home"> 
        {isPending && <div> Loading...</div>}
     { blogs &&  <BlogList blogs={blogs} title="All Blogs" /* handleDelete={handleDelete} */></BlogList> }
     { blogs &&  <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs"></BlogList> }
        </div>
     );
}
 
export default Home;