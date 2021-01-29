import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, id, name, info, glass}) => {
  return (
    <article className={'cocktail'}>
      <div className="img-container">
          <img src={image} alt="img"/>
      </div>
        <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link className={'btn btn-primary btn-details'} to={`/cocktail/${id}`}>details</Link>
        </div>
    </article>
  )
}

export default Cocktail
