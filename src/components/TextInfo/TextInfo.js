import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import closeIcon from '../../assets/images/Chat-Log.png';
import './TextInfo.css';

const TextInfo = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <img src={closeIcon} alt="close icon" height="120" />
        <h1 style={{ color: 'green' }}>
          Gente que actualmente está chateando:
        </h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem" style={{ color: 'black' }}>
                <PersonIcon style={{ color: 'green' }} />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextInfo;
