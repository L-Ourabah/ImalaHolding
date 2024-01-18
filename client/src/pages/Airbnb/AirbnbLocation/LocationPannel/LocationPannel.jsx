import React from 'react'
import { ConfirmButton } from '../../../../components/StyledComponents/ConfirmButton'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Link } from 'react-router-dom';

function LocationPannel() {
  return (
    <div className='location-pannel-container'>
      <div className='location-pannel-wrapper'>
        <h3>Résumé de la location</h3>
        <p><span className='location-pannel-price'>200€</span> / nuits</p>
        <form className='location-pannel-choice'>
          <div className='location-pannel-check-in-and-out'>
            <div className='location-pannel-check-in'>
              <p>Date d'arrivée</p>
              <DatePickerComponent></DatePickerComponent>
            </div>
            <div className='location-pannel-check-out'>
              <p>Date de départ</p>
              <DatePickerComponent></DatePickerComponent>
            </div>
          </div>
          <div className='location-pannel-guests-container'>
            <div className='location-pannel-guests'>
              <label>Nombre de voyageurs</label>
              <select name="guests" id="guests">
                <option value="">-- Indiquez le nombre de voyageurs</option>
                <option value="1">1 voyageur</option>
                <option value="2">2 voyageurs</option>
                <option value="3">3 voyageurs</option>
                <option value="4">4 voyageurs</option>
                <option value="5">5 voyageurs</option>
                <option value="6">6 voyageurs</option>
                <option value="7">7 voyageurs</option>
                <option value="8">8 voyageurs</option>
                <option value="9">9 voyageurs</option>
                <option value="10">10 voyageurs</option>
              </select>
            </div>
          </div>
          <Link to='/reservation'><ConfirmButton>Valider</ConfirmButton></Link>
        </form>
        <div className='location-pannel-summary'>
          <div className='location-pannel-summary-additions'>
            <p><span>1400€</span> : 200€ x 8 nuits</p>
            <p><span>168€</span> : <Link to='/'>Frais de services Imala</Link></p>
          </div>
          <div className='location-pannel-summary-total'>
            <p>TOTAL</p>
            <p><span>1568€</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPannel