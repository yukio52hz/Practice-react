import { apiKey } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}

const getGifs = ({ keyword = 'morti', limit = 6, rating = "g", page = 0 } = {}) => {

    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=${limit}&offset=${
        page*limit
    }&rating=${rating}&lang=en`

    return fetch(api_url)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}

export default getGifs;


//con offset se hace la paginacion cuantos resultados nos saltamos





/*const apiKey = 'j360eltkGzZSUs8S84GYcnTyRtKu8ix9&q';



const getGifs = ({ keyword = 'morti' }) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`)
        .then(res => res.json())
        .then(res => {
            const { data = [] } = res;
            if (Array.isArray(data)) {
                const gifs = data.map(img => {
                    const { images, title, id } = img;
                    const { url } = images.downsized_medium;
                    return { url, title, id }
                });
                //console.log(data)
                return gifs
            }
        })
} */