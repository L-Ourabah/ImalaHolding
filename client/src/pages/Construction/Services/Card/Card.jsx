import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="services-card-container">
      <div className='cards-wrapper' style={{ backgroundImage: `url(${props.background})`}}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link to={props.link}><button>Voir plus</button></Link>
      </div>
    </div>
  )
}

export default Card