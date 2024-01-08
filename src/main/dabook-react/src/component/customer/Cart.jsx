import "../../style/customer/Cart.css";
import React, {useEffect, useState} from 'react';
import Header from "../default/Header";
import Footer from "../default/Footer";


const Title = () => {
  return(
    <>
      <div>
        <h3>장바구니</h3>
      </div>
  </>
  );
}
const Count = (props) => {

    const {price} = props;

    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);
    const plus = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const minus = () => {
        if(count>=2){
            setCount((prevCount) => prevCount - 1);
        }
    }

    useEffect(() => {
        // count가 변경될 때마다 totalPrice를 업데이트합니다.
        setTotalPrice(price * count);
    }, [count, price]);

  return(
    <div className="volumeDiv">
      <span className="price">{totalPrice}원</span>
      <div className="volume">
        <button className="volumeBtn" onClick={minus}>-</button>
        <span>&nbsp;{count}&nbsp;</span>
        <button className="volumeBtn" onClick={plus}>+</button>
      </div>
    </div>
  );
}

const Goods = (props) => {

    const {bookName, price} = props;

  return(
    <div className="goodsDiv">
      <div className="aDiv">
            <div>
              <img src="../../image/book.jpeg" alt=""/>
            </div>
            <div className="goodsTitle">
                <span className="titleFontSize">{props.bookName}</span><br /><br />
                <span className="price">{props.price}원</span>
            </div>
            <div className="volumeDiv">
                <Count price={price}/>
            </div>
          </div>
    </div>
  );
}
const FreeDelivery = () => {
  return(
    <div className="freeDelivery">
        <span>3만원 이상 구매시 무료배송</span>
    </div>
  );
}
const GoodsCount = () => {
  return(
    <div className="goodsCount">
      <span>총 주문상품 2개</span>
    </div>
  );
}
const PayCount = (props) => {

    const {totalPrice} = props;
    console.log("price: ", totalPrice);

    // 상품금액, 배송비를 상수로 정의
    const productPrice = totalPrice;
    const deliveryFee = 3000; // 배송비가 있다면 해당 값을 사용

    //총 주문금액 계산
    const totalOrderAmount = productPrice + deliveryFee;

  return(
    <div className="PayCount">
        <div className="payCountDiv">
          <div className="payNumber">
            <span>{productPrice}원</span>
            <span>+</span>
            <span>{deliveryFee}원</span>
            <span>=</span>
            <span>{totalOrderAmount}원</span>
          </div>
          <div className="payText">
          <span>상품금액</span>
            <span></span>
            <span>배송비</span>
            <span></span>
            <span>총 금액</span>
          </div>
        </div>
      </div>
  );
}


const OrderBtn = () => {
  return(
    <div className="orderbtn">
          <button className="orderbutton">주문하기</button>
    </div >
  );
}



const Cart = ({isLogin, logout, no}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = (newTotal) => {
        setTotalPrice(newTotal);
    }


    return(
      <>
        <Header />
        <div className="cartGoodsDiv">
            <Title />
            <Goods bookName={"책이름1"} price={15000} updateTotal={updateTotalPrice}/>
            <Goods bookName={"책이름2"} price={20000} updateTotal={updateTotalPrice}/>
            <FreeDelivery />
            <GoodsCount />
            <PayCount totalPrice={totalPrice}/>
        </div>
        <OrderBtn />
          <Footer/>
      </>
    );
}
export default Cart;
