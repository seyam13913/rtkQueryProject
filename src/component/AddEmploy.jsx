import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAddEmploysMutation } from "../employApi";

const AddEmploy = () => {
  const [addEmploy] = useAddEmploysMutation();

  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  console.log(inputData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmploy(inputData);
    navigate("/employ");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="row" style={{ marginBottom: "1rem" }}>
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Name :
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
              aria-label="First name"
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Email :
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Email"
              aria-label="Last name"
              name="email"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div class="row">
          <label for="inputEmail4" class="form-label">
            Address :
          </label>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Address"
              aria-label="First name"
              name="address"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Some Information"
              aria-label="Last name"
            ></input>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto m-5">
          <button class="btn btn-primary" type="submit">
            Add Employ
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmploy;
