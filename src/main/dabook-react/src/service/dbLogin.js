import axios from "axios";
import bookInfo from "../component/book/BookInfo";

export const Main = (params) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "/",
                params: params,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const Book = (params) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "book",
                params: params,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
export const BestSeller = (params) => {
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "book/bestSeller",
                params: params,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const BookInfo = (no) => {
    const url = process.env.REACT_APP_SPRING_IP + "book/bookInfo/" + no;
    console.log(url);
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "get",
                url: url,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
