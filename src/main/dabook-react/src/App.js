import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cart from "./component/customer/Cart";
import Payment from "./component/customer/Payment";
import SubOption from "./component/customer/SubOption";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/api/demo-web")
        .then((response)=>{
          return response.json();
        })
        .then((data)=>{
          setMessage(data);
        });

  },[]);
  return (
      <>
      <div>
        {message}
      </div>
      <Router>
        <Routes>
            <Route path="/sub" element={<SubOption />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
