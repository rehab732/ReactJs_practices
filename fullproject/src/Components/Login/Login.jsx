import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [errorList, setError] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function UserValidation() {
    let schema = Joi.object({
    
      email: Joi.string()
        .email({ tlds: { allw: ["com", "net"] } })
        .required(),
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
      setError(valid.error.details);
    } else {
      navigate("/home");
    }
  }

  function submitData(eventInfo) {
    eventInfo.preventDefault();
    SendUserData();
  }
  return (
    <>
      {errorList.map((err, index) => (
        <div key={index} className="alert alert-danger my-2">
          {err.message}
        </div>
      ))}
      <form onSubmit={submitData}>
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
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
