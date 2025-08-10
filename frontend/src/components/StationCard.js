import React from 'react';
import VoteSnowflakes from './VoteSnowflakes';
import './StationCard.css';

const StationCard = ({ station, votes, selectedParticipant, onVote }) => {
  const getStationVotes = () => {
    const stationVotes = [];
    for (const voteId in votes) {
      if (voteId.startsWith(station.id)) {
        stationVotes.push(votes[voteId]);
      }
    }
    return stationVotes;
  };

  const stationVotes = getStationVotes();
  const averageNote = stationVotes.length > 0
    ? (stationVotes.reduce((a, b) => a + b, 0) / stationVotes.length).toFixed(1)
    : 'N/A';

  const userVote = selectedParticipant ? votes[`${station.id}-${selectedParticipant}`] : 0;

  return (
    <div className="station-card">
      <h3>{station.nom}</h3>
      <div className="station-info">
        <p>🏔️ Altitude: {station.altitudePiedDesPistes}m</p>
        <p>💶 Forfait journée: {station.prixForfaitJournee}€</p>
        <h4>Distances:</h4>
        <ul>
          <li>🚗 Velaux: {station.distances.velaux.km}km ({station.distances.velaux.temps})</li>
          <li>🚗 Reillanne: {station.distances.reillanne.km}km ({station.distances.reillanne.temps})</li>
          <li>🚗 Villeneuve: {station.distances.villeneuveSurBellot.km}km ({station.distances.villeneuveSurBellot.temps})</li>
        </ul>
      </div>
      <div className="vote-section">
        <h4>Votre Note:</h4>
        <VoteSnowflakes
          stationId={station.id}
          note={userVote}
          onVote={onVote}
        />
        <div className="average-rating">
          <h4>Note Moyenne:</h4>
          <p>
            {averageNote} / 5 ({stationVotes.length} vote{stationVotes.length > 1 ? 's' : ''})
          </p>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
