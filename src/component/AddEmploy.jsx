import React from "react";

const AddEmploy = () => {
  return (
    <div>
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
    </div>
  );
};

export default AddEmploy;
