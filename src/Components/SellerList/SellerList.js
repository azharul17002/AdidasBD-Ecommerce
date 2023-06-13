import React from "react";
import { useState, useEffect } from "react";

const SellerList = () => {
  const [seller, setseller] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/sellerlist`)
      .then((res) => res.json())
      .then((data) => setseller(data));
  }, []);


  return (
    <div>
      <h1>Total  seller : {seller.length}</h1>
      {
         <tr  >
         <th style={{ border: '1px solid red',width:'350px',
  textAlign: 'left',paddingLeft:'70px',paddingRight:'70px',paddingTop:'15px',paddingBottom:'15px',backgroundColor:'cyan'
  }}>Company Name</th>
         <th style={{ border: '1px solid red',width:'350px',
  textAlign: 'left',paddingLeft:'160px',paddingRight:'90px',paddingTop:'15px',paddingBottom:'15px',backgroundColor:'cyan'
}}>Seller Name</th>
         <th style={{ border: '1px solid red',width:'350px',paddingLeft:'180px',paddingRight:'120px',paddingTop:'15px',paddingBottom:'15px',backgroundColor:'cyan',
textAlign: 'left',
}}>Phone Number</th>
         <th style={{ border: '1px solid red', width:'350px',paddingLeft:'200px',paddingRight:'210px',paddingTop:'15px',paddingBottom:'15px',backgroundColor:'cyan',
textAlign: 'left',
}}> Shop Address</th>
       </tr>
      }
      {seller.map((sl) => (
        <div  key={sl._id}>
          {" "}
        
         <table style={{fontFamily: 'arial',
  borderCollapse: 'collapse',
  width: '100%'}}>
           
            <tr>
                <td style={{
  textAlign: 'center',backgroundColor:'orangered',width:'300px',color:'wheat',fontSize:'20px',
  padding: '8px',border:'2px dotted white'}}>{sl.companyName}</td>
                <td style={{
  textAlign: 'center',backgroundColor:'orangered',width:'300px',color:'wheat',fontSize:'20px',
  padding: '8px',border:'2px dotted white'}}>{sl.sellerName}</td>
                <td style={{ 
  textAlign: 'center',backgroundColor:'orangered',width:'300px',color:'wheat',fontSize:'20px',
  padding: '8px',border:'2px dotted white'}}>{sl.phoneNumber}</td>
                <td style={{
  textAlign: 'center',backgroundColor:'orangered',width:'300px',color:'wheat',fontSize:'20px',
  padding: '8px',border:'2px dotted white'}}>{sl.shopAddress}</td>
            </tr>
          </table>{" "}
        
        </div>
      ))}
    </div>
  );
};

export default SellerList;
