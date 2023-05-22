
import './App.css';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './components/login';
import CreateAccount from './components/createaccount';
import ButtonGroup from './components/ButtonGroup';
import Upload from './components/Upload';
import HomePage from './components/HomePage';


function App() {
  return (
    <div>
      
      
      
      <Routes>
          <Route path='/' element={<HomePage />} /> 
        <Route path='log-in' element={<LoginPage />} />
        <Route path='browse' element={<ButtonGroup />} />
        <Route path='upload' element={<Upload />}/>
        </Routes>
      
      
      
      {/* <LoginPage />
      <CreateAccount /> */}
      {/* <ButtonGroup/> */}
      {/* <Upload/> */}
      
    </div>
  );
}

export default App;
