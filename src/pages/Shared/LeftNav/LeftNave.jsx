import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNave = () => {
  const [catagory, setCatagory] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => setCatagory(data))
  }, [])
  return (
    <div>
      <p> left nav </p>
      {
        catagory.map(data => <p key={data.id}><Link className='text-decoration-none py-2 mb-2'>{data.name}</Link></p>)
      }
    </div>
  );
};

export default LeftNave;