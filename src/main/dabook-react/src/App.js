import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./component/default/Main";
import Book from "./component/book/Book";
import WriteReview from "./component/review/WriteReview";
import BestSeller from "./component/book/BestSeller";
import BookInfo from "./component/book/BookInfo";

function App() {
    const [no, setNo] = useState(0);
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/api/demo-web")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessage(data);
            });
    }, []);
    const [bestBooks, setBestBooks] = useState([]);
    useEffect(() => {
        fetch("/book/bestSeller")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBestBooks(data);
            });
    }, []);

    // const [isLogin, setIsLogin] = useState(false); // 로그인 상태 관리

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    exact={true}
                    element={
                        <Main no={message}/>
                    }
                />
                <Route
                    path="/book"
                    exact={true}
                    element={
                        <Book/>
                    }/>
                <Route
                    path="/book/bestSeller"
                    exact={true}
                    element={
                        <BestSeller bestBooks={bestBooks}/>
                    }/>
                <Route
                    path="/book/bookInfo/:no"
                    exact={true}
                    element={<BookInfo />}
                />
                <Route
                    path="/review"
                    exact={true}
                    element={
                        <WriteReview/>
                    }/>
            </Routes>
        </>
    );
}

export default App;
