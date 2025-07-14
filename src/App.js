import './App.css';
import { AuthContext } from './AuthContext';
import LoginPage from './LoginPage';
import PrivatePage from './PrivatePage';
import { useContext } from 'react';
 


function App() {
  const { isAuthenticated}=useContext(AuthContext);
  return (
    <div className="App">
      {isAuthenticated()? <PrivatePage/>: <LoginPage/>}
    </div>
  );
}

export default App;
