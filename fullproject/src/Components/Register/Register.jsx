import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const Register = () => {
  let navigate = useNavigate();
  const [errorList,setError]=useState([]);
  const [user, setUser] = useState({
    first_name:'',
    last_name: '',
    age: 0,
    email:'',
    password: "",
  });

  function UserValidation() {
    let schema = Joi.object({
      // first_name: Joi.string().min(3).max(10).required(),
      // last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(20).max(30).required(),
      email: Joi.string().email({ tlds: { allw: ["com", "net"] } }).required(),
      password: Joi.string().min(3).max(10).required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function getUserInfo(eventInfo) {
    //clone
    let myuser = { ...user };
    // myuser.first_name=eventInfo.target.value;//static
    myuser[eventInfo.target.name] = eventInfo.target.value;

    setUser(myuser);
    // console.log(myuser);
  }

  function SendUserData() {
    // let {data}=await  axios.post(" https://route-egypt-api.herokuapp.com/signup",user);
    // console.log(data);
    let valid = UserValidation();
    if (valid.error) {
      ///
      setError(valid.error.details)
    } else {
      navigate("/login");
    }
  }

  function submitData(eventInfo) {
    eventInfo.preventDefault();
    SendUserData();
  }
  return (
    <>

    {errorList.map((err,index)=><div key={index} className="alert alert-danger my-2">{err.message}</div>)}
      <form onSubmit={submitData}>
        <label htmlFor="first-name" className="">
          First Name :
        </label>
        <input
          onChange={getUserInfo}
          type="text"
          className="form-control my-2 my-input"
          name="first-name"
          id="first-name"
        ></input>

        <label htmlFor="last-name" className="">
          Last Name :
        </label>
        <input
          onChange={getUserInfo}
          type="text"
          className="form-control my-2 my-input"
          name="last-name"
          id="last-name"
        ></input>

        <label htmlFor="age" className="">
          Age:
        </label>
        <input
          onChange={getUserInfo}
          type="text"
          className="form-control my-2 my-input"
          name="age"
          id="age"
        ></input>

        <label htmlFor="email" className="">
          Email :
        </label>
        <input
          onChange={getUserInfo}
          type="text"
          className="form-control my-2 my-input"
          name="email"
          id="email"
        ></input>

        <label htmlFor="password" className="">
          Password :
        </label>
        <input
          onChange={getUserInfo}
          type="password"
          className="form-control my-2 my-input"
          name="password"
          id="password"
        ></input>

        <button type="submit" className="btn btn-info">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
