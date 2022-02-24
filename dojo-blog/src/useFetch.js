/* custom hooks in reatc have to  start with use 
 */
 import {useState , useEffect} from 'react' ; 
const useFetch = (url) => {
    const [data , setData] = useState(null) ; 
    const [isPending , setIsPending] = useState(true) ;
    const [error , setError] = useState(null) ;
 
    useEffect(() => {
        /*       npx json-server --watch data/db.json --port 8000
         */      /*   fetch('http://localhost:8000/blogs')
             .then(res => {
                return res.json() ;
             })
             .then(data => {
        setBlogs(data) ;
        setIsPending(false) ;
         
             }) */
             setTimeout( ()=> { 
             fetch(url)
             .then(res => {
                if(!res.ok) {
                   throw Error('could not fetch the data for that resource') ; 
        
                }
                return res.json() ;
             })
             .then(data => {
        setData(data) ;
        setIsPending(false) ;
         
             })
             .catch((e) => {
                setError(null) ;
                setError(e.message) ;
                setIsPending(false) ;
             })
            } , 1000 ) ; 
             } , [url]) ;
             return { data, isPending , error}
}

export default useFetch ; 