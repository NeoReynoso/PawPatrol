import React, { useState } from 'react';
import './App.css'; // Importing CSS stylesheet
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Import logo image

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, apptName: 'Dental Checkup', apptType: 'Routine', proType: 'Dentist', proName: 'Dr. Smith', proAdd: '123 Main St', dateTime: '2024-02-15 10:00 AM' },
    { id: 2, apptName: 'Physical Exam', apptType: 'Annual', proType: 'Primary Care Physician', proName: 'Dr. Johnson', proAdd: '456 Elm St', dateTime: '2024-03-10 2:30 PM' },
    { id: 3, apptName: 'Eye Checkup', apptType: 'Checkup', proType: 'Ophthalmologist', proName: 'Dr. Garcia', proAdd: '789 Oak St', dateTime: '2024-04-05 11:15 AM' }
  ]);

  const [formData, setFormData] = useState({
    id: '',
    apptName: '',
    apptType: '',
    proType: '',
    proName: '',
    proAdd: '',
    dateTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { ...formData, id: Date.now() };
    setAppointments([...appointments, newAppointment]);
    setFormData({
      id: '',
      apptName: '',
      apptType: '',
      proType: '',
      proName: '',
      proAdd: '',
      dateTime: ''
    });
  };

  const handleEdit = (id) => {
    const appointmentToEdit = appointments.find(appt => appt.id === id);
    setFormData(appointmentToEdit);
  };

  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter(appt => appt.id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-page">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Paw Patrol</h1> {/* Add logo text */}
        </div>
        <nav>
          <ul>
          <li><a href="/">Home</a></li>
            <li><Link to="/profile">Profile</Link></li> {/* Link to profile page*/}
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/create-account">Account</a></li>
            <li className="login-button"><a href="/login">Login</a></li> {/* Add login button */}
          </ul>
        </nav>
      </div>
        <section className="main-section">
          <h3>Your Appointments</h3>
          <div id="appointments">
          <table className="table">
              <thead>
                <tr>
                  <th>Appointment Name</th>
                  <th>Appointment Type</th>
                  <th>Provider Type</th>
                  <th>Provider Name</th>
                  <th>Provider Address</th>
                  <th>Date and Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(appt => (
                  <tr key={appt.id}>
                    <td>{appt.apptName}</td>
                    <td>{appt.apptType}</td>
                    <td>{appt.proType}</td>
                    <td>{appt.proName}</td>
                    <td>{appt.proAdd}</td>
                    <td>{appt.dateTime}</td>
                    <td>
                      <button className="button" onClick={() => handleEdit(appt.id)}>Edit</button>
                      <button className="button" onClick={() => handleDelete(appt.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table><br></br>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />
              <label>Appointment Name:</label>
              <input className="text-field" type="text" name="apptName" value={formData.apptName} onChange={handleChange} />
              <br /><br></br>
              <label>Appointment Type:</label>
              <input className="text-field" type="text" name="apptType" value={formData.apptType} onChange={handleChange} />
              <br /><br></br>
              <label>Provider Type:</label>
              <input className="text-field" type="text" name="proType" value={formData.proType} onChange={handleChange} />
              <br /><br></br>
              <label>Provider Name:</label>
              <input className="text-field" type="text" name="proName" value={formData.proName} onChange={handleChange} />
              <br /><br></br>
              <label>Provider Address:</label>
              <input className="text-field" type="text" name="proAdd" value={formData.proAdd} onChange={handleChange} />
              <br /><br></br>
              <label>Date and Time:</label>
              <input className="text-field" type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
              <br /><br></br>
              <button className="button" type="submit">Add Appointment</button>
            </form>
          </div>
        </section>
      </div>
    
  );
};

export default AppointmentsPage;
