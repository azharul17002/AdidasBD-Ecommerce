import React from "react";
import img1 from "../../images/received_1541056976420352.jpeg";
import img2 from '../../images/IMG_2866.jpg'
import banner from '../../images/banner.png'
import img3 from '../../images/74523559_2798548913491604_342556618614898688_n.jpg'
import "./About.css";
const About = () => {
  
  return (
<div>
    <h4 className="heading">About Us</h4>
<div className="about-section-desgin container">
        
        <div className="banner-img">
          <img src={banner} alt="" />
        </div>
        <div className="formal-description">
              <h6>
               Adidas ecommerce website is designed with an interesting and attractive features. 
               Adidas provides their ecommerce website according to the current market trends. 
               This type of website gives many advantages for customers, society and social lifestyle.
              Customers may just find the website and order goods based on their preferences with lot of informations included prices of the goods.
               People who are suddenly think of something they want to buy, can as possible as soon even in the midnight do surfing in the website.
  
              </h6>
          </div>
      </div>

      <h4 className="heading">Our Team</h4>

     <div className="team-design justify-content-evenly  p-5 m-3">
        
        <div className="card-style">
            <img src={img2} alt="" />
            <p>Azharul Islam</p>
            <p>ID:CE17002</p>
        </div>
        <div className="card-style">
        <img src={img1} alt="" />
           <p>Piash Ghosh</p>
           <p>ID:CE-17004</p>
        </div>

        <div className="card-style-sup">
        <img src={img3} alt="" />
           <p>Mohd. Sultan Ahammad</p>
           <p>Supervisor</p>
        </div>

     </div>



</div>
    
  );
};

export default About;
