import React from 'react';
import './VoteSnowflakes.css';

const VoteSnowflakes = ({ stationId, note, onVote }) => {
  return (
    <div className="vote-snowflakes">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`snowflake ${value <= note ? 'active' : ''}`}
          onClick={() => onVote(stationId, value)}
          title={`Voter ${value}/5`}
        >
          ❄️
        </span>
      ))}
    </div>
  );
};

export default VoteSnowflakes;
