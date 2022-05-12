import React from 'react';
import Spiner from '../../components/Spiner/Spiner';
import ListOfGifs from '../../components/ListOfGifs/ListOfGits';
import {useLocation} from 'wouter';
import {useGifs} from '../../hooks/useGits'
import TrendingSearcher from '../../components/TrendingSearcher/Lazy_suspence';
import SearchForm from '../../components/SearchForm/SearchForm';
//const popular_gifs = ['Hentai','Anime','Milfs','Mama'];

const Home = ()=>{
    //const [keyword,setkeyword] = useState('');
    const [path,pushlocation]= useLocation();//esto es como un hook de react pero de react
    //wouter es menos pesado y se instala
    //esto me lleva diferentes locaciones literal path / y pushlocation es el nombre de lo que busco
 
   /* const handleSubmit =(evt) =>{
        evt.preventDefault()//si no pasa lo que tiene que pasar se para sin afectar el resto
     
        pushlocation(`${path}SearchGif/${keyword}`)
    }
    const handleChange = (evt) =>{
        setkeyword(evt.target.value);
    }*/
    const handleSubmit = ({keyword}) =>{
        pushlocation(`SearchGif/${keyword}`)
    }
     /*----*/
     const {loading,gif} = useGifs()
 
     /*----*/

 return(
 <>
    <SearchForm onSubmit={handleSubmit}/>
    <main className='home'>
    <section className='sct-lastSearch'>
        <h2>Ultima busqueda</h2>
        {
            loading
            ?<Spiner/>
            :<ListOfGifs gif={gif}/>
        }
    </section>
    <section className='sct-trendingSercher'>
       <TrendingSearcher/>
    </section>
    </main>
 </>
    
 )

};

/*
<form onSubmit={handleSubmit}>
      <input type='text' value={keyword} onChange={handleChange}/>
      <button type='submit'>Buscar</button>
</form>



<h2>Los gifs mas populares</h2>
     <ul>
         {popular_gifs.map(gif_name=>
                
               <li key={gif_name}>
                   <Link to={`/SearchGif/${gif_name}`}>Gif de {gif_name}</Link>
               </li>
             )
         }
     </ul> */
export default Home