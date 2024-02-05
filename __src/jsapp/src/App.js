
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './Login.js';
import UserDashboard from './UserDashboard.js';

const App = () => {
  return (   
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginScreen/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
    </Router>
  )
}
export default App;