import {useEffect, useLayoutEffect, useState} from "react";
import Header from "../default/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../default/Footer";
import {Container} from "react-bootstrap";

const Cart = ({isLogin, logout, no}) => {
    const { userNo } = useParams(); // 파라미터로 받은 값
    
    // 받아온 값 저장
    const [cartData, setList] = useState([]);

    useLayoutEffect(() => {
        fetchCart();
    },[]);
    
    const fetchCart = () => {
        axios
            .get(`/Cart/${userNo}`)
            .then((res) => {
                const cartData = res.data;
                setList(cartData);
                console.log(cartData);
            })
            .catch((err) => console.log(err));
    };

    return(
        <>
            <Header isLogin={isLogin} logout={logout} no={no} />

        </>
    );
};

export default Cart;