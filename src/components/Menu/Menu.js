import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import closeIcon from '../../assets/images/Chat-Log.png';
// client/src/assets/Chat-Log.png
import './Menu.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div className="helpContainer">
        <Link to={'/ayuda'}>
          <HelpIcon style={{ fontSize: 90 }}>Documentacion y Ayuda</HelpIcon>
          <h1>Ayuda</h1>
        </Link>
      </div>
      <div className="joinOuterContainer">
        <div className="container-center">
          <img src={closeIcon} alt="close icon" height="120" />
          <h1 className="heading">Entrar a una sala</h1>
          <div>
            <input
              placeholder="Nombre"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Numero de Habitacion"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={'button mt-20'} type="submit">
              Unirse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
