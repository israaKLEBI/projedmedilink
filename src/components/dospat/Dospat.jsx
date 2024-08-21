import React from 'react';
import { useParams } from 'react-router-dom';
import './dospat.css';
import { Users } from '../../dummyData'; // Import de la liste Users

export default function Dospat() {
  const { id } = useParams(); // Récupération de l'ID du patient
  const patient = Users.find(user => user.id === parseInt(id)); // Recherche du patient dans Users

  return (
    <div className="dospat">
      {patient ? (
        <>
          <div className="dospatHeader">
            {/* Affichage de la photo du patient */}
            <img src={patient.profilePicture} alt={patient.username} className="dospatImage" />
            {/* Affichage du nom du patient */}
            <h2 className="dospatName">{patient.username}</h2>
          </div>
          <div className="dospatButtons">
            <button className="dospatButton">Informations Personnelles</button>
            <button className="dospatButton">Dossier Médical</button>
            <button className="dospatButton">Médicaments</button>
            <button className="dospatButton">Ordonnance</button>
          </div>
        </>
      ) : (
        <p>Patient non trouvé</p>
      )}
    </div>
  );
}
