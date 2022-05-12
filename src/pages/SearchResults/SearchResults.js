import React,{useRef,useEffect,useCallback} from 'react';
import Spiner from '../../components/Spiner/Spiner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGits';
import {useGifs} from '../../hooks/useGits';
import {useNearScreen} from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
const SearchResults = ({keyword})=>{

const {loading,gif,setPage} = useGifs({keyword})
//const handletNetxPage = () => setPage(prevPage => prevPage + 1);
const externalRef = useRef()
//const debounceHadletNextPage = useRef()
const {isNearScreen} = useNearScreen({externalRef : loading?null:externalRef,once:false});
//console.log(isNearScreen)
   /*const [loading,setloading] = useState(false);
   const [gif,setgift] = useState([]);

   useEffect(() => {
    //console.log('cambiando');
    setloading(true);
    getGifs(keyword)
    .then(gifs => {
      setgift(gifs)
      setloading(false)
    });
    //setgift(oter);
   },[keyword]);  */
//const handletNetxPage =()=>console.log('next page')

 const debounceHadletNextPage = useCallback(
  debounce(
    ()=> setPage(prevPage => prevPage + 1),200
  ),[setPage])

   useEffect(() => {
     if(isNearScreen) debounceHadletNextPage()
   }, [debounceHadletNextPage,isNearScreen])
   return <>
   {
       loading
       ?<Spiner/>
       :<>
        <h3 className="App-title">
        {decodeURI(keyword)}
          </h3>
       <ListOfGifs gif={gif}/>
      <div id="visor" ref={externalRef}></div> 
 </>  }
   
   </>
}
//<button  onClick={handletNetxPage}>net page</button>
export default SearchResults;

//npm i just-debounce-it
/*est paquete recive una fucion que la agrupa dependiendo el numero de veces que la llaman*/