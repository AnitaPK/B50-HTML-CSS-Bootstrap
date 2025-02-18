import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosAPI = () => {
  const [users, setUsers] = useState([]);

const fetchAPI = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    setUsers(response.data);
}
  useEffect(() => {
    fetchAPI()  
}, []);

console.log(users);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">
              email<br></br>username
            </th>
            <th scope="col">company name</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <>
              {users.map((elmn, index) => (
                <tr key={index}>
                  <th scope="row">{elmn.id}</th>
                  <td>{elmn.name}</td>
                  <td>
                    {elmn.email} <br></br>
                    {elmn.username}
                  </td>
                  <td>{elmn.company.name}</td>
                </tr>
              ))}
            </>
          ) : (
            <>
              <tr><td>Data Not Found</td></tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AxiosAPI;
