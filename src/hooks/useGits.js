import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const initialPage = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
        const [loading, setloading] = useState(false);
        const [loadingPage, setloadingPage] = useState(false);
        //const [gif,setGif] = useState([]);
        const { gif, setGif } = useContext(GifsContext);
        //ahora el estado lo almaceno en el gifs context
        const keywordToUse = keyword || JSON.parse(localStorage.getItem('lastSearch')) || 'random';

        const [page, setPage] = useState(initialPage)

        useEffect(() => {
            setloading(true);
            getGifs({ keyword: keywordToUse })
                .then(gifs => {
                    setGif(gifs)
                    setloading(false)
                    localStorage.setItem('lastSearch', JSON.stringify(keyword))
                });
        }, [keyword, keywordToUse, setGif]);

        useEffect(function() {
            if (page === initialPage) return
            setloadingPage(true);

            getGifs({ keyword: keywordToUse, page })
                .then(nextGif => {
                    setGif(prevGif => prevGif.concat(nextGif))
                    setloadingPage(false);
                });
        }, [page, keywordToUse, setGif]);
        return { loading, gif, loadingPage, setPage }
    }
    //en la constante gif es donde se almacena todo sefgift es donde cambia la vara
    //custome hook