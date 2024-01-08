import { Link, Routes, Route } from "react-router-dom";
import "../../styles/BestSeller.css";
import BookInfo from "./BookInfo";
import React from "react";
import Header from "../default/Header";

const BookSection = (props) => {
    const {no,bookName,publisher,author,price,publishDate} = props.books;
    return (
        <div className="book">
            <form>
                <Link to={"/book/bookInfo/"+no} >
                    <button className="bookName">
                        <img
                            className="bimg"
                            src={require("/src/image/bookImage/book"+no+".jpg")}
                            alt={bookName}
                        />
                        {bookName}<br/>
                        {author}<br/>
                        {price}
                    </button>
                </Link>
            </form>
            {/*<div>*/}
            {/*    <Routes>*/}
            {/*        <Route path={"/book/bookInfo/"+no} element={<BookInfo />} />*/}
            {/*    </Routes>*/}
            {/*</div>*/}
        </div>
    );
};

const BestSeller = (props) => {

    // Calculate the number of rows (each row has 4 books)
    const numRows = Math.ceil(props.bestBooks.length / 4);

    // Initialize an array to store each row of books
    const rows = [];

    // Use nested loops to create rows and columns of books
    for (let i = 0; i < numRows; i++) {
        const startIdx = i * 4;
        const endIdx = startIdx + 4;

        // Create a row and add BookSection components for each book
        const row = (
            <div key={i} className="bookRow">
                { props.bestBooks.slice(startIdx, endIdx).map((books) => (
                    <BookSection key={books.no} books={books}
                    />
                ))}
            </div>
        );

        rows.push(row);
    }
    return (
        <>
        <Header/>
        <div className="bestSellerSpace">
            <h1 className="menuName">베스트셀러</h1>
            <div className="bestSeller">
                <div className="bookSection">{rows}</div>
            </div>
        </div>
        </>
    );
};

export default BestSeller;
