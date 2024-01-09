// import React, { useState } from "react";
// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../image/DABOOK.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Container,
    Form,
    Button,
    Nav,
    NavDropdown
} from "react-bootstrap";


const Header = ({ isLogin, logout, no }) => {
    let navigate = useNavigate();
    // const [show, setShow] = useState(false); // (로그아웃 버튼) 로그인 시 보이게

    // 로그아웃 버튼 상태관리를 위한 useEffect
    // useEffect(() => {
    //     if (isLogin === true) {
    //         setShow(true);
    //     } else setShow(false);
    // }, [isLogin]);

    return (
        <>
            <Navbar expand="lg" className="first-nav">
                <Container className="justify-content-center">
                    <Navbar.Brand className="mt-4">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="logo"
                                style={{ display:"block", width:"50%", margin:"auto"}}
                            />
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            {/* navbar */}

            <Navbar expand="sm" className="second-nav mt-5 mb-5" 
                sticky="top" style={{background:"white"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center">

                        {/* <Nav class="navbar sticky-top"> 탑에 고정*/}
                        <Nav>
                            <Nav.Link
                                id="basic-nav-link"
                                className="nav-menu, me-4" 
                                onClick={() => {
                                    navigate("/book/NowBook");
                                }}>
                                요즘 이 책
                            </Nav.Link>

                            <Nav.Link
                                id="basic-nav-link"
                                className="nav-menu, me-4"
                                onClick={() => {
                                    navigate("/book/BestSeller");
                                }}>
                                베스트셀러
                            </Nav.Link>

                            <Nav.Link
                                id="basic-nav-link"
                                className="nav-menu"
                                onClick={() => {
                                    navigate("/");
                                }}>
                                모든 책
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content">

                        <Nav>
                            <Nav.Link
                                id="basic-nav-link"
                                className="nav-menu, me-3"
                                onClick={() => {
                                isLogin === true
                                    ? navigate({ logout })
                                    : navigate("/Login");
                                }}>
                                    Login
                            </Nav.Link>
                            
                            <Nav.Link
                                id="basic-nav-link"
                                className="nav-menu, me-3"
                                onClick={() => {
                                    navigate("/Cart");
                                }}>
                                    Cart
                            </Nav.Link>

                            <NavDropdown 
                                title="Mypage" 
                                id="navbarScrollingDropdown"
                                className="me-3">
                                <NavDropdown.Item
                                    onClick={() => {
                                        // isLogin === true
                                        //     ? navigate("/Mypage")
                                        //     : navigate("/Login");
                                        navigate("/Mypage");
                                    }}>
                                    회원정보
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => {
                                        // isLogin === true
                                            // ? navigate("/Mypage")
                                            // : navigate("/Login");
                                        navigate("#");
                                    }}>
                                    주문내역
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={() => {
                                        // isLogin === true
                                            // ? navigate("/Mypage")
                                            // : navigate("/Login");
                                        navigate("#");
                                    }}>
                                    작성한 리뷰
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>


                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center"
                        style={{color:"#000000A6"}}
                    >
                        Search &nbsp;
                        <Form
                        id="search-container"
                        className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="통합검색"
                                className="me-2"
                                aria-label="Search"
                                />
                            <Button 
                                variant="outline-secondary">
                                Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

};

export default Header;