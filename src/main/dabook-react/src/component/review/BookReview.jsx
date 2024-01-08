import "../../styles/BookReview.css";
function Review() {
    return (
        <div className="reviewWholeSection">
            <div className="section1">
                <div className="reviewMemberInfo">
                    <b>구매자 &nbsp;&nbsp;김뭐*</b>
                </div>
                |
                <div className="reviewWriteDay">
                    <b>2023.11.20</b>
                </div>
            </div>
            <div className="section2">
                <div className="reviewComent">최고의 책이에요!</div>
            </div>
        </div>
    );
}
function BookReview() {

    return (
        <div>
            {" "}
            <Review />
            <Review />
        </div>
    );
}
export default BookReview;
