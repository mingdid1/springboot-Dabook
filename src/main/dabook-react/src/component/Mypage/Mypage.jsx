import { Button, Container, Form } from "react-bootstrap";
import Header from "../default/Header";
import { useNavigate } from "react-router-dom";

const Mypage = ({isLogin, logout, no}) => {

    let navigate = useNavigate();
    // const [password, setPassword] = useState("");

    // // 유효성 검사
    // const [isPassword, setIsPassword] = useState(false);

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

    return (
        <>
        <Header isLogin={isLogin} logout={logout} no={no} />

            <Container>
                <h1 className='mb-5 mt-5' style={{textAlign:"center"}}>
                    회원정보
                </h1>

                <Form style={{margin: "auto", width: "25rem"}}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        이름
                        <Form.Control className="mt-2"
                        type="text" 
                        name="user_name"
                        // value={userName}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        아이디
                        <Form.Control className="mt-2" 
                        type="text" 
                        name="user_id"
                        // value={userId}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        이메일
                        <Form.Control className="mt-2"
                        type="text" 
                        name="user_email"
                        // value={email}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        전화번호
                        <Form.Control className="mt-2"
                        type="text" 
                        name="user_phone"
                        // value={phone}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        주소
                        <Form.Control className="mt-2"
                        type="text" 
                        name="user_address"
                        // value={address}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        상세주소
                        <Form.Control className="mt-2"
                        type="text" 
                        name="user_address"
                        // value={addressDetail}
                        disabled />
                    </Form.Group>

                    <Form.Group className="mt-3 mb-4" controlId="formBasicSubmit" style={{float:"right"}}>
                        <Button variant="outline-secondary" 
                            style={{margin: "auto", width: "10rem"}}
                            type="submit"
                            onClick={()=> {
                                navigate("/InfoModify")
                            }}>
                            정보 수정
                        </Button>
                    </Form.Group>
                </Form>

            </Container>
        </>
    );
};

export default Mypage;