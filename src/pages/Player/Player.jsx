import './player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect ,useState} from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const navgit=useNavigate()
const {id}=useParams()

  const [apiData, setApiData] = useState({
    name:"",
    key: "",
    published_at: "",
    type:""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODRjZTkxYjRlZjdhODc0ZDI1ZDBjMWU3YzhlZGRlYiIsIm5iZiI6MTcyMDAwNzgyOC4yODQyNzEsInN1YiI6IjY2ODUyYzUzODVmNGUwYjVjYmJiMDkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1QGLUMhUXNNpzjOpRSNVMc10Ixaudkp_M54OVs4onk'
    }
  };
  

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err)); 
})

 

   return (
    
     
    <div className='player' >
       <img src={back_arrow_icon} alt="back" onClick={() => navgit(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width={"90%"} height={"90%"}
        title='trailer'
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <div className='player-info'>
         <p>{apiData.published_at}</p>
         <p>{apiData.name}</p>
         <p>{apiData.type }</p>
      </div>
    </div>
  )
}

export default Player;