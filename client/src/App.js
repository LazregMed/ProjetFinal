import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import RegisterPage from './PagesUsers/RegisterUser';
import LoginPage from './PagesUsers/LoginPage';
import ProfilePage from './PagesUsers/ProfilePage';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterProductt from './PagesProduct/MenuProd/ApiAdmin/SaveData';
import MenuProduct from './PagesProduct/MenuProd/Acceuil'
import ConsultéProd from './PagesProduct/MenuProd/ApiUser/ConsulteProd';
import SaisiProduct from './PagesProduct/MenuProd/ApiUser/SaisiProduct';
import SaveData from './PagesProduct/MenuProd/ApiAdmin/SaveData';



function App() {
  
  return (
    <div className="App">
       <Router>
      <NavBar/>
      <Routes>
      
       <Route path='/' element={<LoginPage/>} />
        <Route path='/Register' element={<RegisterPage/>} />
        <Route path='/Acceuil' element={<MenuProduct/>} />
        <Route path='/Modif' element={<SaveData/>} />
        <Route path='/Consulté' element={<ConsultéProd/>} /> 
        <Route path='/Saisie' element={<SaisiProduct/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
