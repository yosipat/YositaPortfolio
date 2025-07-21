import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

function MySkill() {
    return (<>
        <div className='py-5' id="skill">
            <Container>
                <div className='text-center py-4'>
                        <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                            MY SKILLS
                        </Badge>
                    </div>
                <Row className=''>
                    <div className='col-xl-6 p-2'>
                        <Card className='text-light bg-dark border-secondary' style={{borderRadius:"1rem"}}>
                            <Card.Header className=' border-secondary'>Programming Languages</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;C++</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;C#/.NET</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;PHP</p>

                                        </Col>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;JavaScript/TypeScript</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Python</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Kotlin</p>
                                        </Col></Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-xl-6 p-2'>
                        <Card className='text-white bg-dark border-secondary' style={{borderRadius:"1rem"}}>
                            <Card.Header className=' border-secondary'>Frameworks & Libraries</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;HTML/CSS</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;React/Bootstrap</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Node.js/Express.js</p>
                                        </Col>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Flask</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;jQuery</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Jetpack compose</p>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-xl-6 p-2'>
                        <Card className='text-white bg-dark border-secondary' style={{borderRadius:"1rem"}}>
                            <Card.Header className=' border-secondary'>Software & Tools</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Visual Studio</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Android Studio</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;LabVIEW/TestStand</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;PyQt</p>
                                        </Col>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;REST API</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;SQL/MongoDB</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Git</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Altium Designer</p>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                     <div className='col-xl-6 p-2'>
                        <Card className='text-white bg-dark border-secondary' style={{borderRadius:"1rem"}}>
                            <Card.Header className=' border-secondary'>Microcontrollers & Communication Protocols</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;ESP32/Arduino</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Modbus TCP/IP</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;Wi-Fi/Bluetooth</p>
                                        </Col>
                                        <Col>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;UART</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;I2C/SPI</p>
                                            <p><i class="bi bi-box-fill text-info"></i>&nbsp;&nbsp;&nbsp;RS-232/RS-485</p>
                                            <p>&nbsp;</p>
                                        </Col>
                                    </Row>
                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>

            </Container>
        </div>
    </>)
}

export default MySkill