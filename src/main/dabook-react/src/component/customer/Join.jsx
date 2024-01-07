import { Button, Container, Form, Modal } from "react-bootstrap"
import Header from "../default/Header"
import { useState } from "react";
import axios from "axios";
import DaumPostcodeEmbed from "react-daum-postcode";


const Join = (props) => {

    const register = (e) => {
        e.preventDefault();
        document.querySelector("#user_register").action =
          process.env.REACT_APP_SPRING_IP + "register";
        document.querySelector("#user_register").submit();
    };

    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState(""); // 우편번호
    const [address, setAddress] = useState(""); // 주소
    const [show, setShow] = useState(false);

    // 오류 메시지 담기
    const [passwordMessage, setPasswordMessage] = useState("");
    
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isName, setIsName] = useState(false);

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

    const chkId = (e) => {
        console.log("이메일 중복체크");
        axios
          .post(process.env.REACT_APP_SPRING_IP + "emailcheck", null, {
            params: { setId : userId },
          })
          .then((result) => {
            console.log(result);
            if (result.data === 1) {
              alert("중복된 아이디 입니다.");
              return () => {};
            } else {
              alert("가입 가능한 아이디입니다.");
            }
          })
          .catch((err) => {});
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

    const chkName = (e) => {
        const nameCurrent = e.target.value;
        console.log(nameCurrent);
        if (!nameCurrent) {
          setIsName(false);
        } else {
          setIsName(true);
        }
    };

    const chkUser = (e) => {
        const idCurrent = e.target.value;
        console.log(idCurrent);
        setId(idCurrent);
        if (!idCurrent) {
          setIsId(false);
        } else {
          setIsId(true);
        }
    };

    return (
        <>
        <Header />

            <Container>
                <h1 className='mb-5 mt-5' style={{textAlign:"center"}}>
                    회원가입
                </h1>

                <Form 
                    method="post"
                    id="user_register"
                    style={{margin: "auto", width: "25rem"}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="text" 
                                name="user_id"
                                value={userId}
                                onChange={chkUser}
                                placeholder="Id"
                            />
                            <label htmlFor="InputId">Input Id</label>
                        </Form.Floating>
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={chkId}
                        >
                            아이디 중복검사
                        </Button>
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="password" 
                                name="user_password"
                                value={password}
                                onChange={chkPassword}
                                placeholder="Password"
                            />
                            <label htmlFor="InputPassword">Password</label>
                        </Form.Floating>
                        {password.length > 0 && (
                        <div
                            className={`message ${isPassword ? "success" : "error"}`}>
                              {passwordMessage}
                        </div>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="userName" 
                                name="user_name"
                                onChange={chkName}
                                placeholder="Name"
                            />
                            <label htmlFor="InputName">Name</label>
                        </Form.Floating>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="text" 
                                name="phone"
                                placeholder=""
                            />
                            <label htmlFor="InputPhone">PhoneNumber</label>
                        </Form.Floating>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="text" 
                                name="user_zipcode"
                                value={zipcode}
                                onChange={Inputzipcode}
                                placeholder=""
                                readOnly
                            />
                            <label htmlFor="InputZipcode">zipcode</label>
                        </Form.Floating>
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={handleShow}
                        >
                            우편번호 찾기
                        </Button>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="text" 
                                name="user_address"
                                value={address}
                                onChange={Inputaddress}
                                placeholder=""
                            />
                            <label htmlFor="InputAddress">Address</label>
                        </Form.Floating>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Floating className="mb-3">
                            <Form.Control className="mt-2" 
                                type="text" 
                                name="user_address_detail"
                                placeholder="상세주소"
                            />
                            <label htmlFor="InputAddress">상세주소</label>
                        </Form.Floating>
                    </Form.Group>

                    <Form.Group className="mt-3 mb-4" controlId="formBasicSubmit" style={{float:"right"}}>
                        <Button variant="outline-secondary" 
                            style={{margin: "auto", width: "10rem"}}
                            type="submit"
                            onClick={register}
                            disabled={!(isId && isPassword && isName)}
                        >
                            회원가입
                        </Button>
                    </Form.Group>
                </Form>

            </Container>
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
    )
}

export default Join;