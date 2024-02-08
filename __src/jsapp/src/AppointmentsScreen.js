import React, { useState } from 'react';
import './App.css'; // Importing CSS stylesheet
import { Link } from 'react-router-dom';

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
    <div>
      <header className="header">
        <h1>My Appointments</h1>
      </header>

      <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}>
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
          <h2>Your Appointments</h2>
          <div id="appointments">
            <h3>Appointments</h3>
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
            </table>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />
              <label>Appointment Name:</label>
              <input className="text-field" type="text" name="apptName" value={formData.apptName} onChange={handleChange} />
              <br />
              <label>Appointment Type:</label>
              <input className="text-field" type="text" name="apptType" value={formData.apptType} onChange={handleChange} />
              <br />
              <label>Provider Type:</label>
              <input className="text-field" type="text" name="proType" value={formData.proType} onChange={handleChange} />
              <br />
              <label>Provider Name:</label>
              <input className="text-field" type="text" name="proName" value={formData.proName} onChange={handleChange} />
              <br />
              <label>Provider Address:</label>
              <input className="text-field" type="text" name="proAdd" value={formData.proAdd} onChange={handleChange} />
              <br />
              <label>Date and Time:</label>
              <input className="text-field" type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
              <br />
              <button className="button" type="submit">Add Appointment</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppointmentsPage;
