import React from 'react';
import './Login.css';

const Login = ({ participants, onParticipantChange }) => {
  const handleParticipantChange = (e) => {
    onParticipantChange(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Qui êtes-vous ?</h2>
        <p>Veuillez sélectionner votre nom pour commencer.</p>
        <select onChange={handleParticipantChange} defaultValue="">
          <option value="" disabled>
            -- Choisir un participant --
          </option>
          {participants.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nom}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Login;
