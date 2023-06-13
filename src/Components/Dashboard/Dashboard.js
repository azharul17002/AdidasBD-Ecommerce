import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket, faSackDollar, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orderdetails`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/userlists`)
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/admin`)
            .then(res => res.json())
            .then(data => setAdmin(data))

    }, [])













    return (
        <div className='side-bar'>

            <div className='side-design'>
                <h5>Hi Admin...<br /></h5>
                <p>This is Your dashboard</p>

                <div className='list-item'>
                    <Link style={{ textDecoration: "none" }} to="/userlist"><li> User List</li></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/sellerlist"><li> Seller List</li></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/orderlist"><li> Order List</li></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/admin"><li> Make Admin </li></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} to="/adminpanel"><li>Admin Panel </li></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} to='/paymentlist'><li>Payment List</li></Link>
                </div>


            </div>

            <div className='main-section'>

                <div className='box1 d-flex'>
                    <div>
                        <h3>Users</h3>
                        <h5>{users.length}</h5>
                        <Link to="/userlist">see all users</Link>
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                </div>

                <div className='box1 d-flex'>
                    <div>
                        <h3>Orders</h3>
                        <h5>{orders.length}</h5>
                        <Link to="/orderlist">see all Orders</Link>
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </div>
                </div>
                <div className='box1 d-flex'>
                    <div>
                        <h3>Admin Panel</h3>
                        <h5>{admin.length}</h5>
                        <Link to="/adminpanel">Admin Panel</Link>
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                    </div>

                </div>

                <div className='box1 d-flex'>
                    <div>
                        <h3>Earning Balance</h3>
                        <h5>$100</h5>
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon>
                    </div>




                </div>

            </div>



        </div>
    );
};

export default Dashboard;