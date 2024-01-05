import "../../style/customer/Cart.css";
import React, {useState} from 'react';


const Title = () => {
  return(
    <>
      <div>
        <h3>장바구니</h3>
      </div>
  </>
  );
}
const Count = () => {
  const [count, setCount] = useState(1);
  function plus(){
      setCount(count+1);
    }

  function minus(){
    if(count>=2){
      setCount(count-1);
    }
  }
  function price(){
    let price = 15000;
    let totalPrice = price * count;
    return totalPrice;
  }
  return(
    <div className="volumeDiv">
      <span className="price">{price()}원</span>
      <div className="volume">
        <button className="volumeBtn" onClick={minus}>-</button>
        <span>&nbsp;{count}&nbsp;</span>
        <button className="volumeBtn" onClick={plus}>+</button>
      </div>
    </div>
  );
}
const Goods = () => {
  return(
    <div className="goodsDiv">
      <div className="aDiv">
            <div>
              <img src="img/XL.jpeg" alt=""/>
            </div>
            <div className="goodsTitle">
                <span className="titleFontSize">그대들은 어떻게 살것인가</span><br /><br />
                <span className="price">15000원</span>
            </div>
            <div className="volumeDiv">
                <Count />
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
  return(
    <div className="PayCount">
        <div className="payCountDiv">
          <div className="payNumber">
            <span>31,800원</span>
            <span>+</span>
            <span>0원</span>
            <span>=</span>
            <span>31,800원</span>
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


function Cart(){
    return(
      <>

          <div className="cartGoodsDiv">
          <Title />
            <Goods />
            <Goods />
            <FreeDelivery />
            <GoodsCount />
            <PayCount />
          </div>
        <OrderBtn />
      </>
    );
}
export default Cart;
