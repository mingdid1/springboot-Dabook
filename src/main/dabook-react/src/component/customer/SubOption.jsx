import "../../style/customer/SubOption.css";
import { Routes, Route, Link } from "react-router-dom";
import Payment from "./Payment";

function SubOption(){
    const option = [
        {id:"basic", title:"BASIC", ex:"2주에 3권", price:"7900원/MONTH"},
        {id:"standard", title:"STANDARD", ex:"2주에 5권", price:"9900원/MONTH"},
        {id:"premium", title:"PREMIUM", ex:"1주에 5권", price:"12900원/MONTH"}
      ]
    const opt = []
    for(let i=0; i<option.length; i++){
      let o = option[i]
      opt.push(
      <>
          <button className="btn">
            <div className="btnDiv">
              <span className="spanTitle">{o.title}</span>
              <span className="spanFontSize">{o.ex}</span>
              <span className="spanFontSize">{o.price}</span>
            </div>
          </button><br/><br />
      </>)
    }
    return(
      <div className="option">
        <h3>구독</h3>
        <Link to="/pay">{opt}</Link>
        <Routes>
          <Route path="/Payment" Component={Payment} />
        </Routes>
      </div>
    );
  }
export  default SubOption;