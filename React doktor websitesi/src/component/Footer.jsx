import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterLog from '../ff/image_3.png';
import './Footer.css';
import facebook from '../ff/facebook.png';
import instegram from '../ff/instegram.png';
import linkedin from '../ff/linkedin.png';
import gethub from '../ff/gethub.png';



const Footer=()=>{
return(

<footer>
<div className='container'>
        <div className='row'>
           <div class="col-md-3 col-sm-6">
          <img  src={FooterLog} className="footerlogo" />
           <p>this page did do to training whith react. I hope you did iteresting to se this simple job. Thanks for visiting.</p>
             <div className="footer_con">
                <div className="footer_icon">
                <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="footer_text">
                    <h6>Contuct Us On Gmail</h6>
                    <h5>hajjarmohammad8@gmail.com</h5>

                </div>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
              <h2>options</h2>
              <ul>
                  <li><a href="#">op1 </a></li>
                  <li><a href="#">op2 </a></li>
                  <li><a href="#">op3 </a></li>
                  <li><a href="#">op4 </a></li>
                  <li><a href="#">op5 </a></li>


              </ul>
        </div>
         <div class="col-md-3 col-sm-6">
         <h2>servises</h2>
              <ul>
                  <li><a href="#">ser1 </a></li>
                  <li><a href="#">ser2 </a></li>
                  <li><a href="#">ser3 </a></li>
                  <li><a href="#">ser4 </a></li>
                  <li><a href="#">ser5 </a></li>


              </ul>

         </div>
         <div class="col-md-3 col-sm-6">
         <h2>comment</h2>
<form>
<input type="email" />
<button type="subbit">Enter here</button>
</form>

<ul className="social">
<li><a href="#"><img src={facebook}/></a></li>
<li><a href="#"><img src={instegram}/></a></li>
<li><a href="#"><img src={linkedin}/></a></li>
<li><a href="#"><img src={gethub}/></a></li>




</ul>




   </div>
        </div>

 </div>


</footer>

 )

}


export default Footer;