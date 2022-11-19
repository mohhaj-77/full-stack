import {fragment} from 'react';
import './App.css';
import Navbars from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Footer from './component/Footer';



function App() {
  return (
    <div className='all'>
      <fragment>


      <Navbars />
      <Home />
      <Footer/>
      </fragment>

    </div>

  );
}

export default App;
