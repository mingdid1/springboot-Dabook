import { Link, Route, Routes } from "react-router-dom";
import "../../style/customer/Payment.css"
import Cart from "./Cart";
import React, { useEffect, useState } from 'react';

const OrderItem = () => {
  return(
    <>
      <div >
        <span className="fontSpan">주문상품정보</span>
        <Product />
      </div>
      <br /><br />
    </>
  );
}
const Product = () => {
  return(
    <div className="productDiv">
      <div className="productName">
        <ProductName name="책1가나다라마바사아자차카타파하"/>
        <ProductName name="책1가나다라마바사아자차카타파하책1가나다"/>
      </div>
      <div className="productPrice">
        <Producprice price="1500000"/>
        <Producprice price="30000"/>
      </div>
    </div>
  );
}
const ProductName = (props) => {
  return(
    <>
      <div className="mini">{props.name}</div>
    </>
  );
}
const Producprice = (props) => {
  return(
    <>
      <div className="mini">{props.price} 원</div>
    </>
  );
}


const Buyer = () => {
  return(
    <>
      <div >
        <span className="fontSpan">구매자 정보</span> <br />
        <div className="buyerDiv">
          <div className="buyer">
            <div className="mini">이름</div>
            <div className="mini">전화번호</div>
          </div>
          <div className="buyerInfo">
             <div className="mini">이재원</div>
             <div className="mini">010-4586-2667</div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}


const Delivery = ({deliveryInfo}) => {
  return(
    <>
      <div>
        <span className="fontSpan">배송지정보</span>
        <div className="delivery">
          <div className="deliveryDiv">
            <div className="receiver">
              <div className="mini">이름</div>
              <div className="mini">전화번호</div>
            </div>
            <div className="receiverInfo">
              <div className="mini">
                <input type="text" className="inputC" name="name" placeholder="받는 사람 이름"
                    value={deliveryInfo.name}/>
              </div>
              <div className="mini">
                <input type="text" className="inputC" name="tel" placeholder="받는 사람 전화번호"
                       value={deliveryInfo.tel}/>
              </div>
            </div>
          </div>
          <DeliveryAPI />
        </div>
      </div>
      <br /><br />
    </>
  );
}
const DeliveryAPI = () => {
  return(
    <div className="deliveryApi">배송지입력 주소 api</div>
  );
}
const PayType = () => {
  return(
    <>
      <div>
        <span className="fontSpan">결제수단</span>
        <div className="payType">
          <ul>
            <li>Npay</li>
            <li>Kakao pay</li>
            <li>일반결제</li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
}
const PayBtn = () => {
  return(
    <>
      <div className="btnDiv">
        <Link to="/cart"><button>결제하기</button></Link>
        <Routes>
          <Route path="/Cart" Component={<Cart/>} />
        </Routes>
      </div>
    </>
  );
}

function Payment(){
  const [isDeliverySameAsBuyer, setDeliverySameAsBuyer] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '이재원',
    phoneNumber: '010-4586-2667',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    tel: '',
  });

  const handleCheckboxChange = () => {
    setDeliverySameAsBuyer(!isDeliverySameAsBuyer);

    //체크박스가 체크된 경우, deliveryInfo를 buyerInfo로 설정
    if(!isDeliverySameAsBuyer){
        setDeliveryInfo({
            name : buyerInfo.name,
            tel : buyerInfo.phoneNumber,
        });
    } else{
        setDeliveryInfo({
            name: '',
            tel : '',
        });
    }
  };


  return(
      <div className="payment">
        <h3>주문/결제하기</h3>
        <br />
        <div className="paymentDiv">
          <Delivery deliveryInfo={deliveryInfo}/>
          <input type="checkbox" checked={isDeliverySameAsBuyer} onChange={handleCheckboxChange}/>
          <span>배송지 정보 동일</span>
          <Buyer />
          <OrderItem/>
          <PayType/>
          <PayBtn/>
        </div>
      </div>
  );
}

export default Payment;
