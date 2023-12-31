import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetD = async () => {
      const res = await axios('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const productsArray = Object.values(res.data.products);
        setData(productsArray);
    };

    fetD();
  }, []);
 
  const sD = [...data].sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="app">
      <h1>Product Data</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Subcategory</th>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {sD.map((item, index) => (
            <tr key={index}>
              <td>{item.subcategory}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;