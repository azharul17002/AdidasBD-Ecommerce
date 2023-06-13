import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const OrderList = () => {
    const [orders,setOrders]=useState([]);
    const [products,setProducts]=useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/orderdetails`)
        .then(res =>res.json())
        .then(data =>setOrders(data))
         
        },[])

        
        const handleDelete=(id)=>{
            const process=window.confirm('Are you sure to delete??');
            if(process)
            {
               const url=`http://localhost:5000/orderdetails/${id}`;
              fetch(url,{
                 method:'delete'
            })
            .then(res =>res.json())
            .then(data => {
               console.log(data);
               const remaining = orders.filter(pd => pd._id !== id)
               setOrders(remaining);
            })
              
            }
            else{
       
            }
       
       
           }

    return (
        <div>
            <h4>Total Orders : {orders.length}</h4>
            <br />
            <Table striped bordered hover>
            <thead>
            <tr>
          
          <th style={{width:'350px'}}>User Name</th>
          <th style={{width:'450px'}}>Email</th>
          <th style={{width:'350px'}}>Product Name</th>
          <th style={{width:'350px'}}>Product Price</th>
          <th style={{width:'350px'}}>Product Quantity</th>
          <th style={{width:'350px'}}></th>
        </tr>
        </thead>
        </Table>
            {
                orders.map(order =>
                    <Table striped bordered hover>
                      

      <tbody>
        <tr>
         
          <td style={{width:'350px'}}>{order.FullName}</td>
          <td style={{width:'350px'}}>{order.email}</td>
          <td style={{width:'350px'}}>{order.pname}</td>
          <td style={{width:'350px'}}>${order.pprice}</td>
          <td style={{width:'350px'}}>{order.pquantity}</td>
          <button onClick={()=> handleDelete(order._id)} style={{width:'250px',height:'70px'}}>
          <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
          </button>
         
        </tr>
        </tbody>
        </Table>
                )
            }



            
        </div>
    );
};

export default OrderList;