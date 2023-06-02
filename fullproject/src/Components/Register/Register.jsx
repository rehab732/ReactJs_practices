import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    password: "",
  });

  function getUserInfo(eventInfo) {
    //clone
    let myuser = { ...user };
    // myuser.first_name=eventInfo.target.value;//static
    myuser[eventInfo.target.name] = eventInfo.target.value;

    setUser(myuser);
    // console.log(myuser);
  }

  return (
    <>
      <form>
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

        <button className="btn btn-info">Register</button>
      </form>
    </>
  );
};

export default Register;
