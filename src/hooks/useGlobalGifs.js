import {useContext} from 'react';
import GifsContext from '../context/GifsContext';

const useGlobalGifs = ()=>{
   /* const {gif}= useContext(GifsContext);
    return gif;*/
 return useContext(GifsContext).gif;
};

export default useGlobalGifs;