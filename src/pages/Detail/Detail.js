import React from 'react';
//import StaticContext from '../../context/StaticContext';
import useGlobalGifs from '../../hooks/useGlobalGifs'
import Git from '../../components/Gif/Gif';


const Detail = ({params})=>{
    /*const  context = useContext(StaticContext);
    console.log(context); */

    //const {gif} = useContext(GifsContext);
    const gif = useGlobalGifs();
    console.log('este gifconte',{gif})
    console.log(params)
    const selectGif = gif.find(gif=> 
        gif.id === params.id
        );
    console.log(selectGif)
   // return <h1>GIF con id {params.id}</h1>
   return <Git {...selectGif}/>
}

export default Detail;