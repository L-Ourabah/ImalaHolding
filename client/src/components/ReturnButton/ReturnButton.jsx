import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ReturnButton = () => {
  var navigate = useNavigate();
  return(
    <>
      <button onClick={() => navigate(-1)} className='back-button'>Retourner à la réservation</button>
    </>
  )
} 
