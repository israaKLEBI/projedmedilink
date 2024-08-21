import React, { useState } from 'react';
import './lablist.css';
import { IconButton, TextField } from '@mui/material';
import { Phone, Message, InvertColors, Room } from '@mui/icons-material'; // Icônes de Material-UI

export default function LabList() {
  const [locationFilter, setLocationFilter] = useState('');
  const [openNowFilter, setOpenNowFilter] = useState(false);

  // Données fictives pour les laboratoires
  const Labs = [
    {
      id: 1,
      name: "BioLab",
      location: "Monastir",
      isOpen: true
    },
    {
      id: 2,
      name: "MediLab",
      location: "Sousse",
      isOpen: false
    },
    {
      id: 3,
      name: "HealthLab",
      location: "Mahdia",
      isOpen: true
    },
    {
      id: 4,
      name: "EcoLab",
      location: "Sousse",
      isOpen: false
    },
    {
      id: 5,
      name: "QuickLab",
      location: "Mahdia",
      isOpen: true
    },
    {
      id: 6,
      name: "TestLab",
      location: "Monastir",
      isOpen: true
    },
    {
      id: 7,
      name: "ProLab",
      location: "Sousse",
      isOpen: false
    },
    {
      id: 8,
      name: "FastLab",
      location: "Sousse",
      isOpen: true
    },
    {
      id: 9,
      name: "SecureLab",
      location: "ksour essef",
      isOpen: false
    },
    {
      id: 10,
      name: "SureLab",
      location: "Monastir",
      isOpen: true
    }
  ];

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleOpenNowFilterChange = () => {
    setOpenNowFilter(!openNowFilter);
  };

  const filteredLabs = Labs.filter((lab) => {
    if (locationFilter && !lab.location.toLowerCase().includes(locationFilter.toLowerCase())) {
      return false;
    }
    if (openNowFilter && !lab.isOpen) {
      return false;
    }
    return true;
  });

  return (
    <div className='labList'>
      <div className="filterButtons">
        <TextField 
          type="text" 
          placeholder="Filter by location" 
          value={locationFilter} 
          onChange={handleLocationFilterChange} 
          variant="outlined"
          size="small"
          style={{ width: '70%' }}
        />
        <button onClick={handleOpenNowFilterChange}>
          {openNowFilter ? 'Show All' : 'Open Now'}
        </button>
      </div>
      <div className="labWrapper">
        {filteredLabs.map((lab) => (
          <div key={lab.id} className="labCard">
            <div className="labHeader">
              <h3>
                <InvertColors className="medicalServicesIcon" />
                {lab.name}
              </h3>
              <div className="labActions">
                <IconButton aria-label="call" size="small">
                  <Phone />
                </IconButton>
                <IconButton aria-label="message" size="small">
                  <Message />
                </IconButton>
              </div>
            </div>
            <p>
              <Room style={{ fontSize: 16, marginRight: 8 }} /> {lab.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
