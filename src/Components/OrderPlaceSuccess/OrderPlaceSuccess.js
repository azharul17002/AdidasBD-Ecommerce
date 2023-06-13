import React from "react";
import { AuthContext } from "./../Contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import shippingImg from "../../images/2793990.jpg";
import { useEffect } from "react";
import Payment from "../Payment/Payment";

const OrderPlaceSuccess = () => {
  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState();
  const [userinfos, setUserinfo] = useState([]);
  const [orders,setOrders]=useState([]);

  useEffect(() => {
    const email=user.email;
fetch(`http://localhost:5000/orderlistsingle?email=${email}`)
.then(res =>res.json())
.then(data =>setOrders(data)
 )
},[])



  useEffect(() => {
  
  
    const email =user.email;
    fetch(`http://localhost:5000/userlist?email=${email}`)
      .then((res) => res.json())
      .then((data) => setUserinfo(data));
  }, []);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/orderAddress`;
    fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});

    setSuccess(" Your orders Successfully Placed.");
  };
  console.log(watch("example"));

  return (
    <div style={{ width: "370px", marginLeft: "200px", color: "blue" }}>
        
      <br />
      <br />
      <h4>
        Please <span style={{ color: "green" }}>payment</span> here and fill up
        the form for shipment
      </h4>
      <hr />
      <br />

      <Payment></Payment>

      <div className="container  d-flex">
        {
          userinfos.map(userinfo => <div>
            <form className="ship-forms" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  style={{
                    width: "350px",
                    backgroundColor: "black",
                    fontSize: "17px",
                    height: "50px",
                    padding: "15px",
                    marginTop: "30px",
                    border: "none",
                    color: "white",
                  }}
                  className="ship-form-input"
                  name="Fullname"
                  value={userinfo.name}
                  placeholder="Full Names"
                  {...register("FullName", { required: true })}
                />
              </div>
            
  
              <input
                style={{
                  width: "350px",
                  backgroundColor: "black",
                  fontSize: "17px",
                  height: "50px",
                  padding: "15px",
                  marginTop: "30px",
                  border: "none",
                  color: "white",
                }}
                className="ship-form-input"
                name="email"
                value={userinfo.email}
                placeholder="email"
                
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>Email is required</span>
              )}
  
              <input
                style={{
                  width: "350px",
                  backgroundColor: "black",
                  fontSize: "17px",
                  padding: "15px",
                  height: "50px",
                  marginTop: "30px",
                  border: "none",
                  color: "white",
                }}
                className="ship-form-input"
                name="phoneNumber"
                placeholder="phoneNumber"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span style={{ color: "red" }}>phoneNumber is required</span>
              )}
  
              <input
                className="ship-form-input"
                style={{
                  width: "350px",
                  backgroundColor: "black",
                  height: "50px",
                  fontSize: "17px",
                  padding: "15px",
                  marginTop: "30px",
                  border: "none",
                  color: "white",
                }}
                name="Address"
                placeholder="Address"
                {...register("Address", { required: true })}
              />
              {errors.Address && (
                <span style={{ color: "red" }}>Address is required</span>
              )}
  
              <hr />
  
              <input
                className="btnDesign"
                type="submit"
                style={{
                  border: "none",
                  background: "grey",
                  fontSize: "20px",
                  width: "350px",
                }}
              />
              <br />
            </form>
            {<h2 style={{ color: "green" }}>{success}</h2>}
          </div>)
        }
        <div style={{ marginTop: "50px", marginLeft: "190px" }}>
          <img style={{ width: "550px" }} src={shippingImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderPlaceSuccess;
