import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const UserList = () => {
    const [user,setuser]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userlists`)
        .then(res =>res.json())
        .then(data =>setuser(data))
         
        },[])
    
    return (
        <div>
            <h4>Total User:{user.length}</h4>
            <br />
            <Table striped bordered hover>
            <thead>
            <tr>
          
          <th style={{width:'300px'}}>User Name</th>
          <th style={{width:'300px'}}>Email</th>
          <th style={{width:'300px'}}>Address</th>
          <th style={{width:'300px'}}>Phone Number</th>
          <th style={{width:'300px'}}>Gender</th>
          <th style={{width:'300px'}}>profile Picture</th>
      
        </tr>
        </thead>
        </Table>
            {
                user.map(users =>
                    <Table striped bordered hover>
                      

      <tbody>
        <tr>
         
          <td style={{width:'300px'}}>{users.name}</td>
          <td style={{width:'300px'}}>{users.email}</td>
          <td style={{width:'300px'}}>{users.address}</td>
          <td style={{width:'300px'}}>{users.phone}</td>
          <td style={{width:'300px'}}>{users.gender}</td>
          <td style={{width:'300px'}}> <img style={{width:'150px',height:'100px',borderRadius:'50%'}} src={users.image} alt="" />  </td>
        
        </tr>
        </tbody>
        </Table>
                )
            }



        </div>
    );
};

export default UserList;