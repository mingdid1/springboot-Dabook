import { Link, Route, Routes } from "react-router-dom";
import "../../style/customer/Payment.css"
import Cart from "./Cart";
import React, { useEffect, useState } from 'react';
import Header from "../default/Header";
import Footer from "../default/Footer";

const OrderItem = () => {
  return(
    <>
      <div >
        <span className="fontSpan-j">주문상품정보</span>
        <Product />
      </div>
      <br /><br />
    </>
  );
}
const Product = () => {
  return(
    <div className="productDiv-j">
      <div className="productName-j">
        <ProductName name="책1가나다라마바사아자차카타파하"/>
        <ProductName name="책1가나다라마바사아자차카타파하책1가나다"/>
      </div>
      <div className="productPrice-j">
        <Producprice price="1500000"/>
        <Producprice price="30000"/>
      </div>
    </div>
  );
}
const ProductName = (props) => {
  return(
    <>
      <div className="mini-j">{props.name}</div>
    </>
  );
}
const Producprice = (props) => {
  return(
    <>
      <div className="mini-j">{props.price} 원</div>
    </>
  );
}


const Buyer = () => {
  return(
    <>
      <div >
        <span className="fontSpan-j">구매자 정보</span> <br />
        <div className="buyerDiv-j">
          <div className="buyer-j">
            <div className="mini-j">이름</div>
            <div className="mini-j">전화번호</div>
          </div>
          <div className="buyerInfo-j">
             <div className="mini-j">이재원</div>
             <div className="mini-j">010-4586-2667</div>
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
        <span className="fontSpan-j">배송지정보</span>
        <div className="delivery-j">
          <div className="deliveryDiv-j">
            <div className="receiver-j">
              <div className="mini-j">이름</div>
              <div className="mini-j">전화번호</div>
            </div>
            <div className="receiverInfo-j">
              <div className="mini-j">
                <input type="text" className="inputC-j" name="name" placeholder="받는 사람 이름"
                    value={deliveryInfo.name}/>
              </div>
              <div className="mini-j">
                <input type="text" className="inputC-j" name="tel" placeholder="받는 사람 전화번호"
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
    <div className="deliveryApi-j">배송지입력 주소 api</div>
  );
}
const PayType = () => {
  return(
    <>
      <div>
        <span className="fontSpan-j">결제수단</span>
        <div className="payType-j">
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
      <div className="btnDiv-j">
        <Link to="/cart">
            <button className="button-j">결제하기</button>
        </Link>
        <Routes>`
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
      <>
      <Header />
      <div className="payment-j">
        <h3>주문/결제하기</h3>
        <br />
        <div className="paymentDiv-j">
          <Delivery deliveryInfo={deliveryInfo}/>
          <input type="checkbox" checked={isDeliverySameAsBuyer} onChange={handleCheckboxChange}/>
          <span>배송지 정보 동일</span>
          <Buyer />
          <OrderItem/>
          <PayType/>
          <PayBtn/>
        </div>
      </div>
      <Footer/>
      </>
  );
}

export default Payment;
