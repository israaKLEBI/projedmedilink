import React from 'react';
import { Link } from 'react-router-dom';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData'; // Import de la liste Users
import "./patientslist.css";

export default function PatientsList() {
  return (
    <div className="patientsList">
      <h2>Liste des Patients</h2>
      <ul>
        {Users.map(patient => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>
              <CloseFriend user={patient} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
