import React, { useState } from 'react';

export default function CrearEvento(){
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventPerson, setEventPerson] = useState('');
    const [eventDescription, setEventDescription] = useState('');
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      switch (name) {
        case 'eventName':
          setEventName(value);
          break;
        case 'eventDate':
          setEventDate(value);
          break;
        case 'eventTime':
          setEventTime(value);
          break;
          case 'eventPerson':
            setEventPerson(value);
            break;
        case 'eventDescription':
          setEventDescription(value);
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos del evento a un API o almacenarlos en algún lugar.
    };
  
    return (
        <>
         <h2  className='text-center eventos'>Crear Evento</h2>
      <div className='container mb-5'>
      <form className=' row g-3' onSubmit={handleSubmit}>
        <div className='col-md-4'>
          <label className='form-label'>
            Nombre del evento:
            <input
            className='form-control'
              type="text"
              name="eventName"
              value={eventName}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='col-md-4'>
          <label className='form-label'>
            Fecha del evento:
            <input
             className='form-control'
              type="date"
              name="eventDate"
              value={eventDate}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='col-md-4'>
          <label className='form-label'>
            Hora del evento:
            <input
             className='form-control'
              type="time"
              name="eventTime"
              value={eventTime}
              onChange={handleInputChange}
            />
            </label>
            </div>
            <div>
            <label className='form-label'>
            Personas para el evento:
             <input
              className='form-control'
              type="number"
              name="eventPerson"
              value={eventPerson}
              onChange={handleInputChange}
              placeholder=""
            />
          </label>
        </div>
        <div className=' col-md-4'>
          <label className='form-label'>
            Descripción del evento:
            <textarea
             className='form-control'
              name="eventDescription"
              value={eventDescription}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
        <button id='botones' className="btn text-white col-3 " type="submit">Crear evento</button>
        </div>
      </form>
      </div>
      </>
 
  );
};


