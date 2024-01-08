import {Button, Container, Form, Modal} from "react-bootstrap";
import Header from "../default/Header";
import Footer from "../default/Footer";
import {useState} from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const InfoModify = ({no, isLogin, logout,props}) => {

    const infoModify = (e) => {
        e.preventDefault();
        document.querySelector("#user_infoModify").action =
            process.env.REACT_APP_SPRING_IP + "infoModify";
        document.querySelector("#user_infoModify").submit();
    };

    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState(""); // 우편번호
    const [address, setAddress] = useState(""); // 주소
    const [show, setShow] = useState(false);

    // 오류 메시지 담기
    const [passwordMessage, setPasswordMessage] = useState("");

    // 유효성 검사
    const [isPassword, setIsPassword] = useState(false);

    // // 비밀번호 담기
    // const handleInputPw = (e) => {
    //     const passwordCurrent = e.target.value;
    //     setPassword(passwordCurrent);
    //     console.log(passwordCurrent);
    //     if (!passwordCurrent) {
    //     setIsPassword(false);
    //     } else {
    //     setIsPassword(true);
    //     }
    // };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ///// 다음 우편번호 찾기 함수 //////
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        console.log(data);
        console.log(data.zonecode);
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setZipcode(data.zonecode);
        setAddress(fullAddress);
        setShow(false);
    };

    ////// 다음 우편번호 함수 끝 //////
    const Inputzipcode = (e) => {
        console.log(e.target.value);
        setZipcode(e.target.value);
    };
    const Inputaddress = (e) => {
        console.log(e.target.value);
        setAddress(e.target.value);
    };

    // 비밀번호 유효성 검사
    const chkPassword = (e) => {
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent);
        console.log(passwordCurrent);
        if (!passwordCurrent || !passwordRegex.test(passwordCurrent)) {
            setIsPassword(false);
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 6자리 이상 입력해주세요."
            );
        } else {
            setIsPassword(true);
            setPasswordMessage("안전한 비밀번호 입니다.");
        }
    };

    return (
        <>
            <Header isLogin={isLogin} logout={logout} no={no}/>

            <Container>
                <h1 className='mb-5 mt-5' style={{textAlign: "center"}}>
                    정보 수정
                </h1>

                <Form style={{margin: "auto", width: "25rem"}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        이름
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="user_name"
                            // value={userName}
                            readOnly
                                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        아이디
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="user_id"
                            // value={userId}
                            readOnly
                                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        비밀번호
                        <Form.Control className="mt-2"
                                      type="password"
                                      name="user_password"
                            // value={password}
                                      onChange={chkPassword}
                                      placeholder="Password"
                                      />
                        {password.length > 0 && (
                            <div
                                className={`message ${isPassword ? "success" : "error"}`}>
                                {passwordMessage}
                            </div>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        이메일
                        <Form.Control className="mt-2"
                                      type="email"
                                      name="user_email"
                            // value={email}
                                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        전화번호
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="phone"
                            // value={phone}
                                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="InputZipcode">
                        우편번호
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="user_zipcode"
                                      value={zipcode}
                                      onChange={Inputzipcode}
                                      placeholder=""
                                      readOnly
                        />
                        <Button
                            className="mt-3"
                            variant="outline-secondary"
                            type="button"
                            onClick={handleShow}
                        >
                            우편번호 찾기
                        </Button>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress1">
                        주소
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="user_address"
                                      value={address}
                                      onChange={Inputaddress}
                                      placeholder=""
                                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress2">
                        상세주소
                        <Form.Control className="mt-2"
                                      type="text"
                                      name="user_address_detail"
                            // value={addressDetail}
                                      />
                    </Form.Group>

                    <Form.Group className="mt-3 mb-4" controlId="formBasicSubmit" style={{float: "right"}}>
                        <Button variant="outline-secondary"
                                style={{margin: "auto", width: "10rem"}}
                                type="submit"
                                onClick={infoModify}
                                disabled={!(isPassword)}
                        >
                            저장
                        </Button>
                    </Form.Group>
                </Form>

            </Container>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>

            {/* 우편번호 모달 시작 */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>우편번호 찾기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostcodeEmbed onComplete={handleComplete} {...props} />
                </Modal.Body>
            </Modal>
            {/* 우편번호 모달 끝 */}
        </>
    );
};

export default InfoModify;