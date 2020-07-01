import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import closeIcon from '../../assets/images/Chat-Log.png';
import book from '../../assets/images/book.jpg';
import './Help.css';
const Help = () => (
  <div className="Header">
    <h1 className="word">Documentacion</h1>

    <img src={closeIcon} alt="close icon" height="120" />
    <div classNam="parrafo">
      <div className="iconDoc">
        <img src={book} alt="close icon" height="120" />
        <div>
          <h2>Bienvenido</h2>
          Esta es la documentacion un poco pequena de la aplicacion de menssajes
          gecha con socket io ,fue disenada por{' '}
          <b>Luis Aneuris Tavarez De Jesus #2018-6927</b>{' '}
          <p style={{ marginLeft: 10, marginBottom: 10 }}>
            Aqui en esta aplicacion puede enviar mensaje de una manera facil y
            rapida ,cuando vaya a menu solo tiene que poner tu nombre y el
            numero o nombre de la habitacion existente o sino existe
            autmaticamente puede generar una habitacion para que tuy y otro
            amigo pueda comunicarse{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Help;
