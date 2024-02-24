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
    medType: '',
    doseAmount: '',
    doseFrequency: '',
    duration: ''
  });

  const handleEdit = (id) => {
    const medToEdit = medications.find(med => med.id === id);
    setFormData(medToEdit);
  };

  const handleDelete = (id) => {
    const updatedMeds = medications.filter(med => med.id !== id);
    setMedications(updatedMeds);
  };


  const [showAddForm, setShowAddForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedication = { ...formData, id: Date.now() };
    setMedications([...medications, newMedication]);
    setShowAddForm(false); // Close the form after submission
    setFormData({
      id: '',
      medName: '',
      medType: '',
      doseAmount: '',
      doseFrequency: '',
      duration: ''
    });
  };

  return (
    <div>
      <header className="header-meds">
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
          <div className="medications" style={{ backgroundColor: '#28282cf3', display: 'flex' }}>
            <div className="med-cards-container" style={{ flex: '1' }}>
              {medications.map(med => (
                <div key={med.id} className="med-card">
                  <div className="med-card-content">
                    <h4 style={{ fontSize: '24px', color: '#ffffff' }}>{med.medName}</h4>
                    <p>Type: {med.medType}</p>
                    <p>Dose Amount: {med.doseAmount}</p>
                    <p>Dose Frequency: {med.doseFrequency}</p>
                    <p>Duration: {med.duration}</p>
                  </div>
                  <div className="med-card-actions">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }} onClick={() => { handleEdit(med.id); setShowAddForm(!showAddForm); }}>&#xE254;</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }} onClick={() => handleDelete(med.id)}>&#xE872;</span>
                  </div>
                </div>              
              ))}
            </div>
            {showAddForm && (
              <div className={`add-form ${showAddForm ? "show" : "hide"}`} style={{ flex: '1' }}>
                <form onSubmit={handleSubmit}>
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
                  <div className="modal-buttons">
                    <button className="button" type="submit">Add</button>
                    <button className="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <button className="button" onClick={() => setShowAddForm(!showAddForm)}>Add Medication</button>
        </section>
      </div>
    </div>
  );
};

export default MedsPage;
