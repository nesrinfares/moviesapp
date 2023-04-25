import React from 'react'
import Moviescard from './Moviescard'
import Addmovies from './Addmovies'
import Publicité from './Publicité'
import Historique from './Historique'

function Movieslist({movies , setmovies , text , rate }) {
  return (
    <div className='fav'>
       <Publicité/> 
        <Historique/> 
       <div className='addmov'> 
        <Addmovies movies={movies}  setmovies={setmovies}/> 
      </div>
        <div className='container'>
        
          {movies.filter(
            (el)=>el.name.toLowerCase().includes(text.toLowerCase())
            && el.rating >=rate 
          )
          .map((el)=>(
        <Moviescard el={el} />
        )).reverse()}
        </div>
    </div>
  )
}

export default Movieslist
