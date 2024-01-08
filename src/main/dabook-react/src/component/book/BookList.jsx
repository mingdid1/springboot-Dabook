import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
const BookList =(props)=>{
    const {no,bookName,publisher,author,price,publishDate} = props.books;
    console.log('Rendering BookList with book:', props.books);
    return(
        <Card>
            <Card.Body>
                <Card.Title >{bookName}</Card.Title>
                <Link to={"/book/bookInfo"+no} className="btn-btn-primary" variant="primary">
                    상세보기</Link>
            </Card.Body>
        </Card>
    )
}
export default BookList;