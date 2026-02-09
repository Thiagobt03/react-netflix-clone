import React, { useEffect, useRef, useState } from 'react'
import './titileCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitileCards = ({titile, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjAxNjhmMDYxNDdiZjc1ZWY3ZTkwN2ViOTI2MjI4YyIsIm5iZiI6MTc3MDM0MzgwMi43NTgwMDAxLCJzdWIiOiI2OTg1NGQ3YWM5MTU1YWU4NmM2OTEyZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b30Oc1W_7sYC_sK-AD2X4-a6JBOWOPbC9YZXFD_4yPY'
  }
};


const handleWheel = (event)=>{
  event.preventDefault();
  cardRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err)); 

  cardRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className='titile-cards'>
      <h2>{titile?titile:"Popular on NetFlix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitileCards