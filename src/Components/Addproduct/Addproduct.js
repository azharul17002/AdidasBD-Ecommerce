import React from "react";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useContext } from "react";
import './Addproduct.css'
import designImg from '../../images/Blog_eCommerce_060120_WP-2.png'

import { AuthContext } from "../Contexts/UserContext";

const Addproduct = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const {user}=useContext(AuthContext);
    const success = () => {
      if (handleSubmit === true) {
      } else {
        setOrderPlaced(true);
      }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
       const url=`http://localhost:5000/addproducts`;
       fetch(url,{
        method:'post',
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(data),
       })
       .then((res) => res.json())
       .then((result)=>{
        console.log(result)
       })
      }
    let done;
    if (orderPlaced) {
      done = <h2>Your product has been Successfully upload</h2>;
    }
  
  
    return (
        <div className="d-flex">
             <div>
             <Container fluid="md">
        <Row>
          <Col>
            <div>
              <p
                className="ship-formss"
                style={{ color: "green", fontSize: "20px", fontWeight: "700" }}
              >
                Upload Your Product Here
              </p>
              <form className="ship-formss" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="ship-form-inputs"
                  name="fullname"
                  placeholder="Full Name of the seller "
                  defaultValue={user.displayName}
                  {...register("FullName")}
                />

                <input
                  className="ship-form-inputs"
                  name="email"
                  placeholder="email"
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Email is required</span>
                )}

                <input
                  className="ship-form-inputs"
                  name="productName"
                  required
                  placeholder="Product Name"
                  {...register("productName")}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Product name is required</span>
                )}
                <br />
                <input
                  className="ship-form-inputs"
                  name="price"
                  required
                  placeholder="Product Price"
                  {...register("price", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>price is required</span>
                )}
                <br />
                <input
                  className="ship-form-inputs"
                  name="imgurl"
                  required
                  placeholder="Image URL"
                  {...register("imageUrl")}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Image url is required</span>
                )}

                <br />
                <input
                  className="ship-form-inputs"
                  name="category"
                  required
                  placeholder="category"
                  {...register("category")}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>categoryis required</span>
                )}

                <br />
                <input className="btnDesigns" onClick={success} type="submit" />
                <br />
                {done}
              </form>
            </div>
          </Col>
          <br />
          
        </Row>
      </Container>

             </div>
             <div style={{marginTop:'200px'}}>
              <img style={{width:'400px',height:'350px'}} src={designImg} alt="" />
             </div>
        </div>
    );
};

export default Addproduct;