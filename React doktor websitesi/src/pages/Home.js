import React from 'react';
import img101 from '../ff/ar.webp';
import './Home.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHospitalSymbol} from '@fortawesome/free-solid-svg-icons';


const Home =()=>{
return(
<header>
    <div className='container'>
        <div className='row'>
          <div class="col-md-6 col-lg-6">
          <div className='roww'>
              <h5>Hello every one in doktors system we can help you.</h5>
              <h2>The best of doctors</h2>
              <button  ><a href='#'>Free questions </a></button>
                 </div>
            <div class="col-lg-6 col-md-6">
                <div className='box'>
                <img  src={img101} />

                <FontAwesomeIcon icon={faHospitalSymbol} />


                </div>
            
            </div>

        </div>



        </div>

    </div>





</header>

)

}

export default Home;