import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({
  participants,
  filters,
  onFilterChange,
  selectedParticipant,
  onParticipantChange,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, Number(value));
  };

  const handleParticipantChange = (e) => {
    onParticipantChange(e.target.value);
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label htmlFor="participant">Qui est-ce qui vote ?</label>
        <select
          id="participant"
          name="participant"
          value={selectedParticipant}
          onChange={handleParticipantChange}
        >
          <option value="">-- Choisir un participant --</option>
          {participants.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nom}
            </option>
          ))}
        </select>
      </div>

      <h2>Filtres</h2>

      <div className="filter-group">
        <label htmlFor="altitudeMin">Altitude minimale (m)</label>
        <input
          type="range"
          id="altitudeMin"
          name="altitudeMin"
          min="1000"
          max="2500"
          step="100"
          value={filters.altitudeMin}
          onChange={handleInputChange}
        />
        <span>{filters.altitudeMin}m</span>
      </div>

      <div className="filter-group">
        <label htmlFor="prixMax">Prix maximum (€)</label>
        <input
          type="range"
          id="prixMax"
          name="prixMax"
          min="20"
          max="80"
          value={filters.prixMax}
          onChange={handleInputChange}
        />
        <span>{filters.prixMax}€</span>
      </div>

      <div className="filter-group">
        <label htmlFor="distanceVelauxMax">Distance max de Velaux (km)</label>
        <input
          type="range"
          id="distanceVelauxMax"
          name="distanceVelauxMax"
          min="100"
          max="800"
          step="10"
          value={filters.distanceVelauxMax}
          onChange={handleInputChange}
        />
        <span>{filters.distanceVelauxMax}km</span>
      </div>

      <div className="filter-group">
        <label htmlFor="distanceReillanneMax">Distance max de Reillanne (km)</label>
        <input
          type="range"
          id="distanceReillanneMax"
          name="distanceReillanneMax"
          min="100"
          max="800"
          step="10"
          value={filters.distanceReillanneMax}
          onChange={handleInputChange}
        />
        <span>{filters.distanceReillanneMax}km</span>
      </div>

      <div className="filter-group">
        <label htmlFor="distanceVilleneuveMax">Distance max de Villeneuve (km)</label>
        <input
          type="range"
          id="distanceVilleneuveMax"
          name="distanceVilleneuveMax"
          min="500"
          max="800"
          step="10"
          value={filters.distanceVilleneuveMax}
          onChange={handleInputChange}
        />
        <span>{filters.distanceVilleneuveMax}km</span>
      </div>
    </div>
  );
};

export default FilterPanel;
