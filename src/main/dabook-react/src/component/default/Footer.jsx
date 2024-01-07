import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {

    return (
        <>
            <footer style={{backgroundColor: "gray"}}>
                <br/>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="foot-row2">
                                <div style={{display: "block"}}>
                  <span className="foot-span">
                    단체구매&nbsp;인재채용&nbsp;배송/반품&nbsp;이용약관&nbsp;개인정보처리방침
                  </span>
                                    <p className="foot-info">
                                        상호명: (주)다북 | 사업자등록번호: 123-123-1234 |
                                        통신판매업번호 : 제2024-서울-0001호
                                        <br/>
                                        주소: 서울 강남구 테헤란로14길 6 남도빌딩, 2층 다북쓰 |
                                        <b> 업무 및 제휴 </b>
                                        biz@dabook.com | FAX 02-2024-2024
                                        <br/>
                                        &copy;
                                        <b>DABOOK DABOOK </b>
                                        Inc. ALL Rights Reserved
                                    </p>
                                </div>
                            </div>
                            {" "}
                            {/* end of foot-row2 */}
                        </Col>

                    </Row>
                </Container>
                {" "}
                {/* end of foot-container */}
            </footer>
        </>
    );
}

export default Footer;