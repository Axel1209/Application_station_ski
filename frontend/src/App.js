import React, { useState, useEffect } from 'react';
import './App.css';
import FilterPanel from './components/FilterPanel';
import StationList from './components/StationList';
import initialStations from './data/stations';
import initialParticipants from './data/participants';

function App() {
  const [participants] = useState(initialParticipants);
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [votes, setVotes] = useState({}); // { "stationId-participantId": note }

  const [filters, setFilters] = useState({
    altitudeMin: 1000,
    prixMax: 80,
    distanceVelauxMax: 800,
    distanceReillanneMax: 800,
    distanceVilleneuveMax: 800,
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleVote = (stationId, note) => {
    if (!selectedParticipant) {
      alert('Veuillez sélectionner un participant pour voter.');
      return;
    }
    const voteId = `${stationId}-${selectedParticipant}`;
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteId]: note,
    }));
  };

  const filteredStations = initialStations.filter(station => {
    return (
      station.altitudePiedDesPistes >= filters.altitudeMin &&
      station.prixForfaitJournee <= filters.prixMax &&
      station.distances.velaux.km <= filters.distanceVelauxMax &&
      station.distances.reillanne.km <= filters.distanceReillanneMax &&
      station.distances.villeneuveSurBellot.km <= filters.distanceVilleneuveMax
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ski-Choice App</h1>
      </header>
      <main className="App-main">
        <FilterPanel
          participants={participants}
          selectedParticipant={selectedParticipant}
          onParticipantChange={setSelectedParticipant}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <StationList
          stations={filteredStations}
          votes={votes}
          selectedParticipant={selectedParticipant}
          onVote={handleVote}
        />
      </main>
    </div>
  );
}

export default App;
