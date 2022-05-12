import './App.css';
import React from 'react';
import {Link, Route } from "wouter";
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults';
import StaticContext from './context/StaticContext';
import Detail from './pages/Detail/Detail';
import {GifsContext} from './context/GifsContext' //paso nombrado ese elmento del documento
//exporto el componente lista
/*
const gifs = [
  'https://media0.giphy.com/media/KGpDbPF7mndy7uKTa8/200.webp',
  'https://media.giphy.com/media/PDFQfRc80TTi0/giphy.gif',
]
const oter =[
  'https://media.giphy.com/media/ci3pwJCWDzkeQ/giphy.gif',
  'https://media.giphy.com/media/12d1FlA2hqs5Ak/giphy.gif'
]
 */

const App =()=> {
  //const [keyword,setKeyword] = useState('ass')
  return (
      <StaticContext.Provider value={{ name: 'Farid',
      aprendiendo: 'React 20%'}}>
        <div className="sct-app">
            <Link to='/'><h2>Giphy</h2></Link>
           <GifsContext>
            <Route 
                component ={Home}
                path = '/'
              />
              <Route path="/SearchGif/:keyword">
                  {(params) => <SearchResults keyword={params.keyword}/>}
              </Route>
              <Route component={Detail} path="/gif/:id"/>
           </GifsContext>
        </div>
      </StaticContext.Provider>
  );
}
/*<button onClick={()=> {setgift(oter)}}>cambiar gits</button>*/
/* useState y useEffect son hocks*/
  /*<ListOfGifs keyword={keyword}/>
        <button onClick={()=> {setKeyword('Manzana')}}>cambiar gits</button>
        
        <Link to="/gif/hentai">
       hentai
    </Link>
    <Link to="/gif/anime">
      Anime
    </Link>
    <Link to="/gif/kawai">
      Kawai
    </Link>
        
        */
export default App;
