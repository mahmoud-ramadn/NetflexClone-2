import "./TitileCards.css"
import { useRef, useState } from "react";
import { useEffect } from "react";
import {  Link} from "react-router-dom";
const                                                                                                                               TitileCards = ({ title, catgrory }) => {
  const [apiData, setApiData] = useState([]);
  
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODRjZTkxYjRlZjdhODc0ZDI1ZDBjMWU3YzhlZGRlYiIsIm5iZiI6MTcyMDAwNzgyOC4yODQyNzEsInN1YiI6IjY2ODUyYzUzODVmNGUwYjVjYmJiMDkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1QGLUMhUXNNpzjOpRSNVMc10Ixaudkp_M54OVs4onk'
    }
  };


  const handelWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${catgrory ? catgrory : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel", handelWheel)
  }, [])
  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return <Link to={`player/${card.id}`}  className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitileCards