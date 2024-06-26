import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinners from './Spinners';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    const [gif, setgif] = useState('');
    const [loading, setloading] = useState('false')
    

    async function fetchData(){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        setloading(false);
    }

    useEffect(() => {
       fetchData(); 
    },[] )

    function clickHandler(){
        fetchData();
    }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl underline uppercase font-bold mt-[15px] '> A Random Gif</h1>

    {
     loading ? (<Spinners/>) : (<img src={gif} width="450px"/>)
    }

      

      <button onClick={clickHandler}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>

      Generate

      </button>

    </div>
  )
}

export default Random
