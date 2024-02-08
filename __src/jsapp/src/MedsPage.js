import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS stylesheet

const MedsPage = () => {
  const [medications, setMedications] = useState([
    { id: 1, medName: 'Aspirin', medType: 'Tablet', doseAmount: '100 mg', doseFrequency: 'Twice', duration: '2 weeks' },
    { id: 2, medName: 'Tylenol', medType: 'Capsule', doseAmount: '50 mg', doseFrequency: 'Once', duration: '1 week' },
    { id: 3, medName: 'Benadryl', medType: 'Liquid', doseAmount: '10 ml', doseFrequency: 'Thrice', duration: '3 weeks' },
    { id: 4, medName: 'Advil', medType: 'Tablet', doseAmount: '200 mg', doseFrequency: 'Four times', duration: '1 month' },
    { id: 5, medName: 'Zyrtec', medType: 'Capsule', doseAmount: '75 mg', doseFrequency: 'Twice', duration: '2 weeks' },
    { id: 6, medName: 'Claritin', medType: 'Tablet', doseAmount: '150 mg', doseFrequency: 'Once', duration: '3 weeks' }
  ]);

  const [formData, setFormData] = useState({
    id: '',
    medName: '',
    medType: '',
    doseAmount: '',
    doseFrequency: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedication = { ...formData, id: Date.now() };
    setMedications([...medications, newMedication]);
    setFormData({
      id: '',
      medName: '',
      medType: '',
      doseAmount: '',
      doseFrequency: '',
      duration: ''
    });
  };

  const handleEdit = (id) => {
    const medToEdit = medications.find(med => med.id === id);
    setFormData(medToEdit);
  };

  const handleDelete = (id) => {
    const updatedMeds = medications.filter(med => med.id !== id);
    setMedications(updatedMeds);
  };

  return (
    <div>
      <header className="header">
        <h1>PawPatrol Medications</h1>
      </header>

      <div className="container">
        <nav className="menu">
          <h3>Menu</h3>
          <ul className="menu-list">
            <li><Link to="/profile">Profile</Link></li>
            <li><a href="#dogs">My Dogs</a></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/medications">Medications</Link></li>
            <li><a href="#account">Account</a></li>
          </ul>
        </nav>

        <section className="main-section">
          <h2>Your Pets Medication Schedule</h2>
          <div className="medications">
            <h3>Medications</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Med Name</th>
                  <th>Med Type</th>
                  <th>Dose Amount</th>
                  <th>Dose Frequency</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medications.map(med => (
                  <tr key={med.id}>
                    <td>{med.medName}</td>
                    <td>{med.medType}</td>
                    <td>{med.doseAmount}</td>
                    <td>{med.doseFrequency}</td>
                    <td>{med.duration}</td>
                    <td>
                      <button className="button" onClick={() => handleEdit(med.id)}>Edit</button>
                      <button className="button" onClick={() => handleDelete(med.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />
              <label>Med Name:</label>
              <input className="text-field" type="text" name="medName" value={formData.medName} onChange={handleChange} />
              <br />
              <label>Med Type:</label>
              <input className="text-field" type="text" name="medType" value={formData.medType} onChange={handleChange} />
              <br />
              <label>Dose Amount:</label>
              <input className="text-field" type="text" name="doseAmount" value={formData.doseAmount} onChange={handleChange} />
              <br />
              <label>Dose Frequency:</label>
              <input className="text-field" type="text" name="doseFrequency" value={formData.doseFrequency} onChange={handleChange} />
              <br />
              <label>Duration:</label>
              <input className="text-field" type="text" name="duration" value={formData.duration} onChange={handleChange} />
              <br />
              <button className="button" type="submit">Add Medication</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MedsPage;

