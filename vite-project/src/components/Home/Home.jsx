import React, { Fragment, useState } from 'react';
import { Button, } from 'bootstrap';
import Employees from "./Employees.jsx"
import {useNavigate,Link} from 'react-router-dom'

function Home(){
  
  let history = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);
    Employees.splice(index,1);
    history('/');
  }


  return(
    <Fragment>
      <div style={{margin:"10rem"}}>
        <table className='table'>
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                name
              </th>
              <th>
                phone
              </th>
              <th>
                email
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item) =>{
                return(
                  <tr>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.phone}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      <Link to={"/edit"}>
                      <button className='btn btn-primary' onClick={()=> alert(item.id)}>Edit</button>
                      </Link>
                      &nbsp;
                      <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>DELETE</button>
                    </td>
                  </tr>
                )
              })
              : "no data available"
            }
          </tbody>
        </table>
        <br />
        <Link className='btn btn-primary' to={"/create"}>
        <button className='btn btn-primary'>Create</button>
        </Link>
      </div>
    </Fragment>
  )
};

export default Home;
