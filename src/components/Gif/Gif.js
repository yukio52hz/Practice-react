import React from 'react';
import './gif.css';
import {Link} from 'wouter';

const Gif =({title,url,id})=>{
  
 return(
    <div className="gif">
      <Link to={`/gif/${id}`}>
      
      <img src={url} alt={title}/>
      </Link>
    </div>
 )

};
export default Gif;
//npm i wouter para rutas