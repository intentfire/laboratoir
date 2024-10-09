import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read() {
    
    const { id } = useParams();
    const [ data, setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3030/users/'+ id +"/")
        .then(res => setData(res.data))
        .catch(err => console.log(err)); 
    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3>Details of user</h3>
            <div className='mb-2'>
                <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-2'>
                <strong>Email: {data.email}</strong>
            </div>
            <div className='mb-3'>
                <strong>Phone: {data.Phone}</strong>
            </div>
            
        </div>
    </div>
  )
}

export default Read