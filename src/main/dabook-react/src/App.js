import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Login from './component/customer/Login';
import { useEffect, useState } from 'react';
import Main from './component/default/Main';
import Join from "./component/customer/Join";
import Mypage from "./component/Mypage/Mypage";
import InfoModify from "./component/Mypage/InfoModify";
import Cart from "./component/customer/Cart";
import Payment from "./component/customer/Payment";
import SubOption from "./component/customer/SubOption";

function App() {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/api/demo-web")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessage(data);
            });
    }, []);

    let navigate = useNavigate();
    let [no, setNo] = useState(0); // 회원 번호 담기 props로 넘겨주기 위함
    const [isLogin, setIsLogin] = useState(false); // 로그인 상태 관리

    useEffect(() => {
        // session에 담긴 값이 null이 아닐때
        if (sessionStorage.getItem("user_no") !== null) {
            setNo(sessionStorage.getItem("user_no")); // user_no(회원번호) 가져옴
            // 자동로그인 상태일 때
        } else if (localStorage.getItem("user_no") !== null) {
            setNo(localStorage.getItem("user_no")); // user_no(회원번호) 가져옴
            // } else if (sessionStorage.getItem("admin") !== null) {
            //   // 관리자 로그인시
            //   setAdminId(sessionStorage.getItem("admin")); // 관리자 id가져옴
        }
    }, [no]);

    useEffect(() => {
        if (sessionStorage.getItem("user_no") !== null) {
            console.log("isLogin ===> ", isLogin);
            setIsLogin(true);
        } else if (localStorage.getItem("user_no") !== null) {
            console.log("isLogin ===> ", isLogin);
            setIsLogin(true);
            // } else if (sessionStorage.getItem("admin") !== null) {
            //   setIsAdmin(true);
            //   setIsLogin(true);
            //   console.log("isLogin ===> ", isLogin);
            //   console.log("isAdmin ===> ", isAdmin);
        } else {
            console.log("isLogin ===> ", isLogin);
            // console.log("isAdmin ===> ", isAdmin);
        }
        console.log("useEffect 호출");
    }, [isLogin]);

    // 로그아웃
    const logout = () => {
        sessionStorage.clear();
        window.localStorage.removeItem("user_no");
        window.localStorage.removeItem("com.naver.nid.access_token");
        alert("로그아웃되었습니다.");
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    exact={true}
                    element={
                        <Main isLogin={isLogin} logout={logout} no={message}/>
                    }
                />
                <Route
                    path="/Login"
                    exact={true}
                    element={
                        <Login isLogin={isLogin} no={no}/>
                    }
                />
                <Route
                    path="/Join"
                    exact={true}
                    element={
                        !isLogin ? <Join isLogin={isLogin}/> : <Navigate to="/"/>
                    }
                />
                <Route
                    path="/Cart/:userNo"
                    exact={true}
                    element={
                        <Cart isLogin={isLogin} logout={logout} no={no}/>
                    }
                />
                <Route
                    path={"/Mypage"}
                    exact={true}
                    element={
                        <Mypage isLogin={isLogin} logout={logout} no={no}/>
                    }
                />
                <Route
                    path={"/InfoModify"}
                    exact={true}
                    element={
                        <InfoModify/>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
