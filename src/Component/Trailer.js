import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name===params.name)[0];
    console.log(movie)
  return (
    <div className='cartfilm'>
         <img  className='photo' src={movie.posterurl} />
    <div className='desc'>
        <h1>{movie.name} </h1>
        <p>{movie.description} </p>
        <ReactStars classNames="Na"
        style={{backgroundColor:"grey", left:"150px" }}
        count={5}
  
        size={24}
        activeColor="#ffd700"
        color="black"
        edit={false}
        value={movie.rating}
     />

    </div>


    </div>
  )
}

export default Trailer
