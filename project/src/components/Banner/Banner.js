import React,{useEffect,useState} from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import "./Banner.css"
import axios from '../../constants/axios'


function Banner() {
  const [movie,setMovie] = useState()
  console.log(movie)
  const count = Math.floor(Math.random()*20)
  console.log(count)
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      setMovie(res.data.results[count])

    })
  }, [])
  const dis = (length,cut)=> cut.slice(0,length)
  return (
    <div
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>
              {movie?movie.original_title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play </button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>{dis(150,movie ? movie.overview:"")}</h1>
        </div>
     <div className='fade_button'>

     </div>
    </div>
  )
}

export default Banner
