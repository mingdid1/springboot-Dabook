import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Header from '../default/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from "../default/Footer";


const Login = ({isLogin, no}) => {

  let navigate = useNavigate();
  const [userId, setId] = useState("");
  const [password, setPassword] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 자동 로그인
  const [isCheck, setIsCheck] = useState(false);

  const isChecked = (e) => {
    if (e.target.checked) {
      setIsCheck(true);
      console.log("setIsCheck =====> ", isCheck);
    } else {
      console.log("setIsCheck =====> ", isCheck);
    }
  };

  // 아이디 담기
  const handleInputId = (e) => {
    const IdCurrent = e.target.value;
    setId(IdCurrent);
    console.log(IdCurrent);
    if (!IdCurrent) {
      setIsId(false);
    } else {
      setIsId(true);
    }
  }

  // 비밀번호 담기
  const handleInputPw = (e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    console.log(passwordCurrent);
    if (!passwordCurrent) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

/*

  세션, db연결되면 주석풀기

  // 로그인
  const memLogin = (e) => {
    e.preventDefault();
    let body = {
      user_id: userId,
      user_password: password,
    };
    loginMember(body).then((res) => {
      console.log(res);
      console.log(res.data);
      // 암호화된 비밀번호와 입력한 비밀번호가 스프링 단에서 비교되기 때문에
      // 출력되는 비밀번호와 res.data.member_password는 서버에서 비교하기엔 다른 값
      // 만약 틀린 비밀번호를 입력한다면 res.data.member_password는 입력한 password와
      // 같은 값으로 출력되므로 res.data.member_password !== password 조건을 추가해 로그인 실패를 비교
      if (
        res.data.user_id === userId &&
        res.data.user_password !== password
      ) {
        console.log("로그인 성공");
        sessionStorage.setItem("user_id", userId); // 세션에 회원 아이디 저장 브라우저 닫기 전까지 유지
        sessionStorage.setItem("user_name", res.data.member_name); // 세션에 회원 이름 저장
        sessionStorage.setItem("user_no", res.data.member_no); // 세션에 회원 번호 저장
        navigate("/");
        window.location.reload();
        // 로그인을 실패하면 스프링에서 입력한 값만 vo에 담아 보내기때문에
        // member_no의 값은 0이 출력됨 -> 로그인을 실패한 걸 알 수 있음
        if (isCheck === true) {
          localStorage.setItem("user_no", res.data.member_no);
        }
      } else if (res.data.member_no === 0) {
        alert("이메일 또는 비밀번호를 확인하세요");
      }
    });
  };
*/

  return (
    <>
      <Header />

      <Container>
        <h1 className='mb-5 mt-5' style={{textAlign:"center"}}>
          Login
        </h1>
      
        <Form style={{margin: "auto", width: "20rem"}}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control 
                type="text" 
                name="user_id"
                value={userId}
                onChange={handleInputId}
                placeholder="Id" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="user_password"
                value={password}
                onChange={handleInputPw}
                placeholder="Password"
               />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check style={{width:"8rem", margin: "auto"}} 
              type="checkbox"
              label="자동 로그인"
              onChange={isChecked}
              value={isCheck}
              id="autologin"
              name="autologin"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicSubmit">
            <Button variant="outline-secondary" style={{margin: "auto", width: "20rem"}}
              type="submit"
              // onClick={memLogin} 
              disabled={!(isId && isPassword)}>
                Login
            </Button>
          </Form.Group>
        </Form>

        <Navbar className="second-nav mb-5" style={{margin: "auto", width: "20rem"}} >
            <Navbar.Collapse className="justify-content-center">
                <Nav.Link
                  onClick={() => {
                      navigate("/SearchIdPw");
                  }}>
                    ID/PW 찾기
                </Nav.Link>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-center">
                <Nav.Link
                  onClick={() => {
                      navigate("/Join");
                  }}>
                    회원가입
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>

      </Container>

        <Footer />
    </>
  );
}

export default Login;