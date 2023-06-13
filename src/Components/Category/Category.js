import React from 'react';
import './Category.css'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='side-design'>
        
        <h4>This is Our Category</h4>

     <div className='list-item'>
    <Link style={{textDecoration:"none"}} to="/Menshoe"><li>Men's Sneaker</li></Link>
    <br />
   <Link style={{textDecoration:"none"}} to="/menspants"><li> Men's Pants</li></Link>
   <br />
    <Link style={{textDecoration:"none"}} to="/mensboots"><li>Men's Boot </li></Link>
       <br />
       <Link style={{textDecoration:"none"}} to="/bag"><li> Bag </li></Link>
       <br />
       <Link style={{textDecoration:"none"}} to="/cap"><li>Cap </li></Link>
       <br />
       <Link  style={{textDecoration:"none"}} to='/bottle'><li>Bottle</li></Link>
     </div>


    </div>
    );
};

export default Category;