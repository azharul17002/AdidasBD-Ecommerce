import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import man from "../../images/man.jfif";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Carousel from "react-bootstrap/Carousel";

import imb2 from "../../images/6429f07e812f4c00fc3f9816.jpg";
import img3 from "../../images/6429f274812f4c00fc3fb4c6.jpg";
import img4 from "../../images/6429f513812f4c00fc3fd366.jpg";
import SearchPd from "../SearchPd/SearchPd";
import { addToDb } from "../../utilities/fakedb";
import { Link } from 'react-router-dom';


const Banner = () => {
  const [cart, setCart] = useState([]);
  const searchRef = useRef();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [success,setSuccess]=useState("");
  const [plength,setPlength]=useState(0);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

  };

  useEffect(() => {
    fetch(`http://localhost:5000/searchproducts?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    setSuccess('Availabe Products of')   
      
    setPlength(<>{products.length}</>)
  };



  const handleAddToCart = (selectedproduct) => {
    alert("product added successfully");
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedproduct._id);
    if (!exists) {
      selectedproduct.quantity = 1;
      newCart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedproduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

  
    setCart(newCart);
    addToDb(selectedproduct._id);
  };
 


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
             <button  bg="light" style={{border:'none',width:'100px',fontSize:'20px'}}  ><Link style={{textDecoration:'none',color:'black', 
                 fontWeight:'600'}} to="/categories">Category</Link></button>
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={searchRef}
              />
              <Button
                onClick={handleSearch}
                
                variant="warning"
                className="btn_design"
              >
                Search
              </Button>
              {
         <h5 style={{textAlign:'center',color:'orange'}}>
         {
           <>{success}  {search} <span style={{color:'green'}}>{products.length} </span>
           </>
         }
       </h5>
      }
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <div className=" mt-5">
        <div className="products-container">
         
          {products.map((pd) => (
            <SearchPd pd={pd} handleAddToCart={handleAddToCart}></SearchPd>
          ))}
        </div>

        <br />

        <div className="banner_design">
          <div className="leftside">
            <p style={{ color: "orangered" }}>Sale up to 70% off</p>

            <br />
            <h2>New collection for all</h2>
            <h4>Discover all the new arrivals of ready-to-wear collection.</h4>

            <br />
          </div>
          <div className="rightside">
            <img src={man} alt="" />
          </div>
        </div>
        <br />
        <br />

        <div className="caro">
        <Carousel activeIndex={index} onSelect={handleSelect} className='caroDesign'>
      <Carousel.Item>
        <img
          className="d-block caruDesign "
          src={img4}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={imb2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={img3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>

        <br />
      </div>
      <br />
      <br />
      <h3 style={{ textAlign: "center", color: "orangered" }}>
        Featured Products
      </h3>
    </div>
  );
};

export default Banner;
