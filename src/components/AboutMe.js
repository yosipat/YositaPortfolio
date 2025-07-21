import { Container, ListGroup, Image, Row, Col, Badge } from 'react-bootstrap';

function MyAboutMe() {
    return (
        <>
            <div className='py-5' id="aboutMe">
                <Container>
                    <div className='text-center py-4'>
                        <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                            ABOUT ME
                        </Badge>
                    </div>

                    <Row xs={1} md={2} className="g-4 py-2">
                        <Col className='text-center'>
                            <Image src="https://github.com/yosipat/TECH1101_FinalProject/blob/main/profile.jpg?raw=true" style={{ width: "20rem", height: "auto", objectFit: "cover" }} className='img-fluid' rounded />
                        </Col>
                        <Col>
                            <h3>I'm Yosita, a Software Engineer with experience in the electronics industry. <b className='text-highlight'>Working in web and desktop applications.</b></h3>
                            <br />
                            <p><small>I've contributed to various projects driven by client requirements. I'm passionate about learning and adapting to new technologies across both hardware and software to complete the project.</small></p>
                             <br />
                            <p><i class="bi bi-window text-info"></i>&nbsp;&nbsp;&nbsp;Web and Desktop application</p>
                            <p><i class="bi bi-window text-info"></i>&nbsp;&nbsp;&nbsp;Backend API development</p>
                            <p><i class="bi bi-window text-info"></i>&nbsp;&nbsp;&nbsp;Object-Oriented Programming</p>
                            <p><i class="bi bi-window text-info"></i>&nbsp;&nbsp;&nbsp;Embedded system and Microcontroller</p>
                            <p><i class="bi bi-window text-info"></i>&nbsp;&nbsp;&nbsp;Electronics circuit and Lab equipment (oscilloscopes, digital multi-meter, power supply)</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MyAboutMe