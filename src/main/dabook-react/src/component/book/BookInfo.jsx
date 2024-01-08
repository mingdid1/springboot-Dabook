import React, {useEffect, useState} from "react";
// import "../../styles/BookInfo.css";
// import {NavLink, Routes, Route, useLocation, useParams} from "react-router-dom";
// import BookContent from "./BookContent";
// import BookReview from "../review/BookReview";
//
// function BookTitle({no,bookName,publisher,author,price,publishDate}) {
//     return (
//         <div className="bookTitleSection">
//             <div className="bookImg">
//                 <img
//                     className="bookImg"
//                     src={require("../../image/bookImage/book"+no+".jpg")}
//                     alt={bookName}
//                 />
//             </div>
//             <div className="bookInfo">
//                 <b>{bookName}</b>
//                 <p>{author} 저자(글)</p>
//                 <p>{publisher} 출판일</p>
//                 <div className="bookPrice">
//                     <b>{price}원</b>
//                     <div className="btnSpace">
//                         <div className="countSpace">
//                             {/*<Counter />*/}
//                         </div>
//                         <button className="addCart">장바구니</button>
//                         <button className="payDirect">바로구매</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// const BookInfo = (props) => {
//     const {no} = useParams();
//     console.log("no:"+no);
//     const [books,setBooks]=useState({
//         no:"",
//         bookName:"",
//         author:"",
//         price:"",
//         publishDate:"",
//         publisher:"",
//         bookDetail:""
//     });
//     useEffect(() => {
//         const fetchBookInfo = async () => {
//             try {
//                 const response = await BookInfo(no);  // dblogic.js의 BookInfo 함수 사용
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error("Error fetching book info:", error);
//             }
//         };
//         fetchBookInfo();
//     }, []);
//     console.log("책제목:"+books.bookName);
//     return (
//         <div className="BookInfo">
//             <div className="detailWholeSapce">
//                 <BookTitle key={no} books={books} />
//                 <div className="bookContentSpace">
//                     <NavLink className="booklink" to="" activeclassname="active-link">
//                         상세정보
//                     </NavLink>
//                     &nbsp;&nbsp;
//                     <NavLink
//                         className="booklink"
//                         to="bookReview"
//                         activeclassname="active-link"
//                     >
//                         리뷰
//                     </NavLink>
//                     <Routes>
//                         <>
//                             <Route path="" element={<BookContent />} />
//                             <Route path="bookReview" element={<BookReview />} />
//                         </>
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default BookInfo;

const BookInfo = (props) => {
    const no = props.match.params.no;
    const [books,setBooks]=useState({
        no:"",
        bookName:"",
        author:"",
        price:"",
        publishDate:"",
        publisher:"",
        bookDetail:""
    });
    useEffect(() => {
        fetch("/book/bookInfo/"+no).then(res=>res.json()).then(res=>{
            setBooks(res);
        });
    }, []);
    return(
        <div>
                <h2>책디테일</h2>
                <h3>{books.bookName}</h3>

        </div>
    );
}
export default BookInfo;