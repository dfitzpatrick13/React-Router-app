import React, { useState, useEffect } from 'react';
import { getAllStarships } from './Services';
import './index.css';

function App() {
  const [starships, setStarships] = useState([]);

  const fetchStarships = async () => {
    const starshipsData = await getAllStarships();
    setStarships(starshipsData);
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <div>
      <h1>List of Starships</h1>
      <div className="card-container">
        {starships.map((starship, index) => (
          <div key={index} className="card">
            <p>{starship.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
