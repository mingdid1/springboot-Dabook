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


const Delivery = ({ isDeliverySameAsBuyer, buyerInfo, deliveryInfo, onInputChange }) => {


  return(
    <>
      <div>
        <span className="fontSpan">배송지정보</span>
        <div className="delivery">
          <DeliveryAPI />
          <div className="deliveryDiv">
            <div className="receiver">
              <div className="mini">받는사람</div>
              <div className="mini">전화번호</div>
            </div>
            <div className="receiverInfo">
              <div className="mini">
                <input type="text" className="inputC" name="name" placeholder={isDeliverySameAsBuyer ? buyerInfo.name : '받는 사람 이름'}
                 value={isDeliverySameAsBuyer ? buyerInfo.name : deliveryInfo.name} onChange={onInputChange}/></div>
              <div className="mini">
                <input type="text" className="inputC" name="tel" placeholder={isDeliverySameAsBuyer ? buyerInfo.phoneNumber : '받는 사람 전화번호'}
                  value={isDeliverySameAsBuyer ? buyerInfo.phoneNumber : deliveryInfo.tel} onChange={onInputChange} />
              </div>
            </div>
          </div>
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

  };

  useEffect(() => {
    // isDeliverySameAsBuyer가 변경될 때마다 호출되는 부수 효과
    console.log("콘솔: ", isDeliverySameAsBuyer)
    if (!isDeliverySameAsBuyer) {
      setDeliveryInfo();
    } else {
      setDeliveryInfo({
        name: '',
        tel: '',
      });
    }
  }, [isDeliverySameAsBuyer, buyerInfo]);

  const handleInputChange = (e) => {
    // 배송지 정보 입력 필드가 변경될 때 호출되는 함수
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value,
    });
  };

  return(
      <div className="payment">
        <h3>주문/결제하기</h3>
        <br />
        <div className="paymentDiv">
          <OrderItem />

          <input type="checkbox" checked={isDeliverySameAsBuyer} onChange={handleCheckboxChange} />
          <span>배송지 정보 동일</span>
          <Buyer buyerInfo={buyerInfo}/>

          <Delivery isDeliverySameAsBuyer={isDeliverySameAsBuyer}
          buyerInfo={buyerInfo}
          deliveryInfo={deliveryInfo}
          onInputChange={handleInputChange} />

          <PayType />

          <PayBtn />
        </div>
      </div>
    );
}

export default Payment;
