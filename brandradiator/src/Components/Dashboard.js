import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ContextProvider";
import "../CSS/dashboard.css";
import pen from "../image/Pen.png";
import trash from "../image/trash.png";
const getdashboard = () => {
  return fetch(`https://victorious-slug-apron.cyclic.app/api/home`);
};

const Dashboard = () => {
  const [dashdata, setDashdata] = useState([]);
  const navigate = useNavigate();
  const { token } = useContext(Context);
  
  //get data
  const getData = () => {
    getdashboard()
      .then((res) => res.json())
      .then((res) => setDashdata(res));
  };
  //deletedata
  const deletedata = async (id) => {
    let res = await fetch(`https://victorious-slug-apron.cyclic.app/api/home/${id}`, {
      method: "DELETE",
    });
    let data2 = res.then((res) => res.json());

    if (res.status === 404 || !data2) {
      alert("error");
      console.log("Error!");
    } else {
      getData();
      setDashdata(data2);
      alert("User is deleted ");
    }
  };
  //updatedata
  const updatedata = async (id, data) => {
    let res = await fetch(`https://victorious-slug-apron.cyclic.app/api/home/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let data2 = res.then((res) => res.json());

    if (res.status === 404 || !data2) {
      alert("error");
      console.log("Error!");
    } else {
      getData();
      setDashdata(data2);
      alert("User is Updated Successfully");
    }
  };
  
  useEffect(() => {
    getData();
    
  }, [dashdata]);
if(token==""){
  navigate('/admin')
}

  return (
    <div id="dashboard">
      <h1>Admin Dashboard</h1>
      <table cellSpacing={10} border={"1px solid teal"}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Image Link</th>
            <th> Heading</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dashdata.length !== 0 ? (
            dashdata.map((e, i) => (
              <tr key={e._id}>
                <td>{i + 1}.</td>
                <td>{e.image}</td>
                <td>{e.heading}</td>
                <td>{e.details}</td>
                <td onClick={() => navigate(`/edit/${e._id}`)}>
                  <img src={pen} alt="" />
                </td>
                <td onClick={() => deletedata(e._id)}>
                  <img src={trash} alt="" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
