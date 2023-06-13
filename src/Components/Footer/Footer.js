import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
         
            
      <div  class="d-flex justify-content-between mt-5 footer-design p-5  ">
        <div style={{color:'Blue'}} >
          <h4>
            Get you Know us
          </h4>
          <ul style={{ listStyle: "none"}}>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'900'}} to="/">
                CLinkreer
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">
                Linkabout us
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">
                AdidasBD RelLinktion
              </Link>
            </li>
          </ul>
        </div>
        <div style={{color:'blue'}}>
          <h4>Make Money with Us</h4>
          <ul style={{ listStyle: "none"}}>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Sell products on AdidasBD</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Self-Publish with Us</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Host an AdidasBD Hub</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Become an Affiliate</Link>
            </li>
          </ul>
          <p style={{textAlign:'center',color:"orangered",fontSize:'20px',fontWeight:'700'}}><span>&#169;</span>AdidasBD 2022-2023</p>
        </div>
        <div style={{color:'blue'}}>
          <h4>
            Let us help you
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Your Account</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Your Orders</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:"white",fontWeigt:'600'}} to="/">Returns & Replacements</Link>
            </li>
            
          </ul>
        </div>
        </div>
      
    );
};

export default Footer;