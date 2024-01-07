import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";

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

  const [isLogin, setIsLogin] = useState(false); // 로그인 상태 관리

  return (
      <>
          <Routes>
              <Route
                  path="/"
                  exact={true}
                  element={
                      <Main isLogin={isLogin} logout={logout} no={message} />
                  }
              />
          </Routes>
      </>
  );
}

export default App;
