import React,{Suspense} from 'react';
import Spiner from '../Spiner/Spiner';
import {useNearScreen} from '../../hooks/useNearScreen';

const TrendingSearcher = React.lazy(
    ()=> import('./TrendingSearcher')
)
//spñp lo llama cuando lo vamos a necesitar
const LazyTrending = ()=>{
    const {isNearScreen,elementRef} = useNearScreen({margin:'100px'})
    //en este componente si no lo vizualizamos no se cargar con lazy loading
    return <div ref={elementRef}>
    <Suspense fallback={<Spiner/>}>{isNearScreen ? <TrendingSearcher/>: null}</Suspense>
 </div>
}
export default LazyTrending;

/* para poder aplicar el react lazy 
tenemos que emvolver nuestro componente en un 
en otro llamado suspense
*/