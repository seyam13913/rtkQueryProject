import React, { useState, useEffect } from "react";
import { useGetEmploysQuery } from "../employApi";

const EmploysCrud = () => {
  const getData = useGetEmploysQuery();
  const employs = getData.data;

  const [privEmploy, setPrivEmploy] = useState(employs);
  console.log(privEmploy);
  const [changeData, setChangeData] = useState();

  useEffect(() => {
    setPrivEmploy(employs);
  }, [employs]);

  const handleClick = (e) => {
    e.preventDefault();

    if (changeData !== "") {
      const filterEmploy = employs.filter((user) => {
        return user.name.toLowerCase().includes(changeData.toLowerCase());
      });
      setPrivEmploy(filterEmploy);
    } else {
      setPrivEmploy(employs);
    }
  };

  const handleChang = (e) => {
    const changeValue = e.target.value;

    setChangeData(changeValue);
  };

  return (
    <div>
      <h2>Employ</h2>
      <div class="col-auto row g-3">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            value={changeData}
            onChange={handleChang}
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
          <span class="input-group-text" id="basic-addon1">
            <button onClick={handleClick} type="button" class="btn btn-primary">
              Seaarch
            </button>
          </span>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Si-No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {privEmploy &&
            privEmploy?.map((user, index) => {
              const { id, name, email } = user;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <div class="d-grid gap-2 d-md-block">
                      <button
                        class="btn btn-primary"
                        style={{ marginRight: "1rem" }}
                        type="button"
                      >
                        Edit
                      </button>
                      <button class="btn btn-primary" type="button">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmploysCrud;
