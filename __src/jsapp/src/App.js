
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './Login.js';
import UserDashboard from './UserDashboard.js';
import CreateAccountScreen from './CreateAccountScreen';
import MedicationScreen from './MedsPage.js';

const App = () => {
  return (   
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginScreen/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/medications" element={<MedicationScreen />} />

      </Routes>
    </Router>
  )
}
export default App;