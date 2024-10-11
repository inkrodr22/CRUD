import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Inicio from './pages/inicio.js';
import Startup from './components/Startup/startup.js';
import Technology from './pages/technology.js';
import 'primereact/resources/themes/saga-blue/theme.css';  // Elige el tema que prefieras
import 'primereact/resources/primereact.min.css';          // Estilos base de PrimeReact
import 'primeicons/primeicons.css';                        // Iconos de PrimeIcons


function App() {
  return (
    <Router>
    
      <div className='flex'>
        <Sidebar />
        <div className='content'>
        <Routes>
            <Route path='/inicio' exact={true} Component={Inicio}/>
            <Route path='/startup' exact={true} Component={Startup}/>
            <Route path='/technology' exact={true} Component={Technology}/>
          </Routes>
        </div>      
      </div>
    </Router>
  );
}

export default App;
