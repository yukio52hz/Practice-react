import {useState} from 'react';
import  './style.css';


export default function SearchForm ({onSubmit}){
    const [keyword,setkeyword] = useState('');

    const handleSubmit = evt =>{
        evt.preventDefault()//si no pasa lo que tiene que pasar se para sin afectar el resto
        //pushlocation(`${path}SearchGif/${keyword}`)
       onSubmit({keyword});
    }
    const handleChange = evt =>{
        setkeyword(evt.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='form_search'>
            <input type='text' value={keyword} onChange={handleChange} value={keyword} type='text'/>
            <button type='submit'>Buscar</button>
        </form>
    )
}
