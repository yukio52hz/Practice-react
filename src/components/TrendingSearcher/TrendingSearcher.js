import React,{useState,useEffect} from 'react';
import getTrending from '../../services/getTrendingService';
import Category from '../Category/Category';

const TrendingSearcher = () =>{

    const [trends,setTrends] = useState([]);

    useEffect(() => {
       getTrending().then(setTrends);
    }, [])

    return <Category name='Tendencias' options={trends}/>
}


export default TrendingSearcher;


//npm i intersection-observer

//los polifil son soporte el soporte IntersectionObserver
