
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const PaymentList = () => {

    const [user,setuser]=useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orderaddress`)
        .then(res =>res.json())
        .then(data =>setuser(data))
         
        },[])
    
    return (
        <div>
        <h4 style={{textAlign:'center',color:'green'}}> Total Paid User:{user.length}</h4>
        <br />
        <Table striped bordered hover>
        <thead>
        <tr>
      
      <th style={{width:'300px'}}>Full Name</th>
      <th style={{width:'300px'}}>Email</th>
      <th style={{width:'300px'}}>Transaction History</th>
  
    </tr>
    </thead>
    </Table>
        {
            user.map(users =>
                <Table striped bordered hover>
                  

  <tbody>
    <tr>
     
      <td style={{width:'300px'}}>{users.FullName}</td>
      <td style={{width:'300px'}}>{users.email}</td>
      <td style={{width:'300px'}}><button style={{background:'green',color:'white',border:'none',width:'200px',height:'30px',borderRadius:'10px'}}>Success</button></td>
    
    </tr>
    </tbody>
    </Table>
            )
        }



    </div>
    );
};

export default PaymentList;