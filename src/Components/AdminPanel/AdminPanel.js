import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AdminPanel = () => {
    const [admin,setAdmin]=useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/admin`)
        .then(res =>res.json())
        .then(data =>setAdmin(data))
         
        },[])

        const handleDelete=(id)=>{
            const process=window.confirm('Are you sure to delete??');
            if(process)
            {
               const url=`http://localhost:5000/admin/${id}`;
              fetch(url,{
                 method:'delete'
            })
            .then(res =>res.json())
            .then(data => {
               console.log(data);
               const remaining = admin.filter(pd => pd._id !== id)
               setAdmin(remaining);
            })
              
            }
            else{
       
            }
       
       
           }









    return (
        <div>
            <h4>Total Admin :{admin.length}</h4>

            <Table striped bordered hover>
            <thead>
            <tr>
          
          <th style={{width:'350px'}}>Full Name</th>
          <th style={{width:'450px'}}>Email</th>
        
          <th style={{width:'350px'}}></th>
        </tr>
        </thead>
        </Table>
            {
                admin.map(adm =>
                    <Table striped bordered hover>
                      

      <tbody>
        <tr>
         
          <td style={{width:'450px'}}>{adm.fullname}</td>
          <td style={{width:'750px'}}>{adm.email}</td>
         
          <button onClick={()=> handleDelete(adm._id)} style={{width:'250px',height:'50px'}}>
          <FontAwesomeIcon className='delete-icon' icon={faTrashArrowUp}></FontAwesomeIcon>
          </button>
         
        </tr>
        </tbody>
        </Table>
                )
            }


        </div>
    );
};

export default AdminPanel;