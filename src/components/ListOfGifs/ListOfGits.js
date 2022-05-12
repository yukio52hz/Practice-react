import React from 'react';
import Gif from '../Gif/Gif';
import './list-of-gifs.css';

const ListOfGifs = ({ gif }) => {
    /* Esto lo mande para que sea una pagina y esto solo sea el componente que muestre la lista de gifs
    const [loading,setloading] = useState(false);
   const [gif,setgift] = useState([]);
//el estado inicial es una lista vacia
//hacemos un efecto la primera vez que se renderize hacemos un llamado a la api
//que recive la props de keyword que hace que cambie nuetris gifs
//la keyword seria la dependencia del efecto
    useEffect(() => {
      //console.log('cambiando');
      setloading(true);
      getGifs(keyword)
      .then(gifs => {
        setgift(gifs)
        setloading(false)
      });
      //setgift(oter);
     },[keyword]);
     //por eso el corchete se puede poner vacio pero solo se renderiza una vez

     if(loading) return <Spiner/>

  */
    return <div className='sct-listOfgifs'>
      {
         gif.map(({ id, title, url }) =>
         <
         Gif key = { id }
         title = { title }
         url = { url }
         id = { id }
         />
     )
      }
    </div>
};
export default ListOfGifs;
/*Lo especial de react es separar los componentes en otros mas pequeños que se puedan reutilizar */

/* 
//npm i wouter para rutas

*/