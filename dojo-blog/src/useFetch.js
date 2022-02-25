/* custom hooks in reatc have to  start with use 
 */
 import {useState , useEffect} from 'react' ; 
const useFetch = (url) => {
    const [data , setData] = useState(null) ; 
    const [isPending , setIsPending] = useState(true) ;
    const [error , setError] = useState(null) ;
 
    useEffect(() => {
       const abortCont = new AbortController() ; //associate it with a fetch request

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
             fetch(url , {signal: abortCont.signal} )
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
             .catch((e) => { // the abort throws an error anyway so we have to add if/else according to the errors name
                if(e.name === 'AbortError') {
                   console.log("fetch aborted") ; 
                }
                else {
                  setError(e.message) ;
                  setIsPending(false) ;

                }
                
             })
            } , 1000 ) ; 
            return () => abortCont.abort();
             } , [url]) ;
             return { data, isPending , error}
}

export default useFetch ; 