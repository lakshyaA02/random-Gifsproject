import React, { useState } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = (tag) => {

    const [gif, setgif] = useState('');
    const [loading, setloading] = useState('false')
    

    async function fetchData(tag){
        setloading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        setloading(false);
    }

    useEffect(() => {
       fetchData(); 
    },[] )

    return {gif, loading, fetchData};
}

export default useGif
