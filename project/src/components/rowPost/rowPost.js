import React ,{useEffect,useState} from 'react'
import './rowPost.css'
import {API_KEY, imageUrl} from "../../constants/constants"
import axios from '../../constants/axios'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState("")
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            setMovies(res.data.results)
        }).catch((err)=>{
            console.log("Network Error")
        })
    },[])
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1
    },
  }  
  function trailer(id){
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
      }else{
        console.log("trailer not available")
      }
    })
  }

  return (
    <div className='row' style={{marginTop:"1rem"}}>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((prev) =>(
        <img  onClick={()=>trailer(prev.id)} className={props.isSmall ? "smallPoster": 'poster'} src={imageUrl+prev.backdrop_path} alt="Posters" />

        ))}
      </div>
     {urlId && <YouTube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
