import React from 'react';
import StationCard from './StationCard';

const StationList = ({ stations, votes, selectedParticipant, onVote }) => {
  return (
    <div className="station-list">
      {stations.map((station) => (
        <StationCard
          key={station.id}
          station={station}
          votes={votes}
          selectedParticipant={selectedParticipant}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default StationList;
