import React,{useState}from 'react';


const Context = React.createContext({});

export const GifsContext =({children})=>{
    const [gif,setGif] = useState([]);
    return <Context.Provider value={{gif,setGif}}>{children}</Context.Provider>
}


export default Context;
