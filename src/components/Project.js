import { Container, Card, Row, Col, Image, Badge, Stack } from 'react-bootstrap';
import Img_SpotStich from '../image/SpotstichARCamera.jpg';
import Img_GetBit from '../image/GetBit.jpg';
import Img_Connect3 from '../image/Connect3.jpg';

function MyProject() {
    return (<>
        <div className='py-5' id="project">
            <Container>
            <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                        PROJECTS
                    </Badge>
                </div>
                <Row xs={1} md={3} className="g-4 py-2">
                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Img variant="top" src={Img_SpotStich} />
                            <Card.Body>
                                <Card.Title>SpotStich AR Camera & Photo Editor</Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ Bow Valley College | Project: Human City ]</small>
                                    <Stack direction="horizontal" gap={2} className='pt-2 flex-wrap'>
                                        <Badge pill  bg="primary">Mobile App</Badge>
                                        <Badge pill  bg="primary">React</Badge>
                                        <Badge pill  bg="warning">TypeScript</Badge>
                                        <Badge pill  bg="warning">Expo go</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Img variant="top" src={Img_GetBit} />
                            <Card.Body>
                                <Card.Title>
                                    Get Bit! Board Game on PC <a href="https://github.com/yosipat/SODV2202_FinalProject_Group7" class="link-primary" target="_blank"><i class="bi bi-link-45deg"></i></a>
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ Bow Valley College ]</small>
                                    <Stack direction="horizontal" gap={2} className='pt-2 flex-wrap'>
                                        <Badge pill  bg="primary">WinForms</Badge>
                                        <Badge pill  bg="warning">C#</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Img variant="top" src={Img_Connect3} />
                            <Card.Body>
                                <Card.Title>
                                    Connect 3 <a href="https://yosipat.github.io/TECH1101_FinalProject/ConnectThreeGame/index.html" class="link-primary" target="_blank"><i class="bi bi-link-45deg"></i></a>
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ Bow Valley College ]</small>
                                    <Stack direction="horizontal"  gap={2} className='pt-2 flex-wrap'>
                                        <Badge pill  bg="primary">HTML/CSS</Badge>
                                        <Badge pill  bg="warning">JavaScript</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title>
                                    Air Conditioning and Lighting control
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <p className='pt-2'>Developed an application for real-time monitoring and remote control of VFD machines and factory lighting systems via Modbus TCP/IP protocol, with a dashboard interface displaying live system status and control options.</p>
                                    <Stack direction="horizontal" className='flex-wrap' gap={2}>
                                        <Badge pill bg="primary">Web App</Badge>
                                        <Badge pill bg="warning">SQL</Badge>
                                        <Badge pill bg="warning">C#/.NET</Badge>
                                          <Badge pill  bg="warning">API</Badge>
                                        <Badge pill  bg="success">TCP/IP</Badge>
                                    </Stack><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title>
                                    Air Quality Monitoring
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <p className='pt-2'>Designed and developed a real-time air quality monitoring system to collect sensor data (e.g., PM2.5, temperature, humidity) with real-time dashboard and notifications windows pop-up. Implemented Over-the-Air (OTA) firmware updates to enable remote system maintenance and upgrades.</p>
                                    <Stack direction="horizontal" className='flex-wrap' gap={2}>
                                        <Badge pill  bg="primary">Web App</Badge>
                                        <Badge pill  bg="warning">SQL</Badge>
                                        <Badge pill  bg="warning">C#/.NET</Badge>
                                        <Badge pill  bg="warning">API</Badge>
                                        <Badge pill  bg="warning">C++</Badge>
                                        <Badge pill  bg="success">ESP32</Badge>
                                        <Badge pill  bg="success">Wi-Fi</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title>
                                    EV Charger product development
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <p className='pt-2'>Developed firmware for an EV charger to display real-time charging information (e.g., energy usage, charging time, status) on an LED screen and transmit charging data to a server using the Open Charge Point Protocol (OCPP) for logging and backend integration.</p>
                                    <Stack direction="horizontal" gap={2}>
                                        <Badge pill  bg="primary">Web App</Badge>
                                        <Badge pill  bg="warning">API</Badge>
                                        <Badge pill  bg="warning">C++</Badge>
                                        <Badge pill  bg="success">ESP32</Badge>
                                        <Badge pill  bg="success">Wi-Fi</Badge>
                                        <Badge pill  bg="success">OCPP</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </Container>
        </div>
    </>)
}

export default MyProject