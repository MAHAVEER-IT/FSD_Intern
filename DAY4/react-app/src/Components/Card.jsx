import React from 'react'
import '../Styles/Card.css';

export default function Card(props) {
  return (
    <div className='cards'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
