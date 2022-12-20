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

  const handleChang = (e) => {
    const changeValue = e.target.value;

    if (changeValue !== "") {
      const filterEmploy = employs.filter((user) => {
        return user.name.toLowerCase().includes(changeValue.toLowerCase());
      });
      setPrivEmploy(filterEmploy);
    } else {
      setPrivEmploy(employs);
    }

    setChangeData(changeValue);
  };

  return (
    <div>
      <h2>Employ</h2>
      <div class="col-auto row g-3">
        <input
          type="text"
          class="form-control"
          value={changeData}
          onChange={handleChang}
          id="inputPassword2"
          placeholder="Search"
        ></input>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Si-No</th>
            <th>Name</th>
            <th>Email</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmploysCrud;
