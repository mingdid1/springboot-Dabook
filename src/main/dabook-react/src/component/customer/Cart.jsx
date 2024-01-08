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
    <div className="volumeDiv-j">
      <span className="price-j">{totalPrice}원</span>
      <div className="volume-j">
        <button className="volumeBtn-j" onClick={minus}>-</button>
        <span>&nbsp;{count}&nbsp;</span>
        <button className="volumeBtn-j" onClick={plus}>+</button>
      </div>
    </div>
  );
}

const Goods = (props) => {

    const {bookName, price} = props;

  return(
    <div className="goodsDiv-j">
      <div className="aDiv-j">
            <div>
              <img className="img-j" src="../../image/book.jpeg" alt=""/>
            </div>
            <div className="goodsTitle-j">
                <span className="titleFontSize-j">{props.bookName}</span><br /><br />
                <span className="price-j">{props.price}원</span>
            </div>
            <div className="volumeDiv-j">
                <Count price={price}/>
            </div>
          </div>
    </div>
  );
}
const FreeDelivery = () => {
  return(
    <div className="freeDelivery-j">
        <span>3만원 이상 구매시 무료배송</span>
    </div>
  );
}
const GoodsCount = () => {
  return(
    <div className="goodsCount-j">
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
    <div className="PayCount-j">
        <div className="payCountDiv-j">
          <div className="payNumber-j">
            <span>{productPrice}원</span>
            <span>+</span>
            <span>{deliveryFee}원</span>
            <span>=</span>
            <span>{totalOrderAmount}원</span>
          </div>
          <div className="payText-j">
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
    <div className="orderbtn-j">
          <button className="orderbutton-j">주문하기</button>
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
        <div className="cartGoodsDiv-j">
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
