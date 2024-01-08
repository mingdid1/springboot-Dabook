import {useEffect, useState} from "react";
import Header from "../default/Header";
import BookList from "./BookList";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/book")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data);
            });
    }, []);

    return (
        <>
            <Header />
            <div>
                {books.map((book) => (
                    <BookList key={book.no} books={book} />
                ))}
            </div>
        </>
    );
}

export default Book;