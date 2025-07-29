import { Container, Card, Row, Col, Image, Badge, Stack } from 'react-bootstrap';
function MyExperience() {
    return (<>
        <div className='py-5' id="exp" style={{ backgroundColor: "#000000" }}>
            <Container className='p-3'>
                <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                        WORK EXPERIENCE
                    </Badge>
                </div>
                <Row className=''>
                    <div className='p-2'>
                        <Card className='p-3 text-light bg-dark border-secondary' style={{ borderRadius: "1rem" }}>
                            <Card.Header>
                                <div className='d-flex align-items-center'>
                                    <Image src="https://media.licdn.com/dms/image/v2/D4E0BAQG196vNAS7uSQ/company-logo_200_200/company-logo_200_200/0/1695787679403/svi_public_company_limited_logo?e=2147483647&v=beta&t=SRrr48e5v3W3LDL-U7GdLl0l5ymFPGo3w0jBgV2bm8c" thumbnail style={{ width: "4rem" }} />
                                    <div className='px-3'>
                                        <a>Engineer, Test Development</a><br />
                                        <a><small className='text-secondary'>SVI Public Company Limited | Jul 2019 - Dec 2023</small></a>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text><small>
                                    <li><b className='text-highlight'>Planned and designed technology stacks</b> based on project requirements, <b className='text-highlight'>collaborating with cross-functional teams</b> to deliver scalable solutions and create clear documentation for effective software usage.</li>
                                    <li>Developed a <b className='text-highlight'>web application for data management and dashboard monitoring</b> using SQL Server, integrating <b className='text-highlight'>REST API</b> for data storage, retrieval, and real-time visualization.</li>
                                    <li>Developed <b className='text-highlight'>Windows applications</b> using VB.NET and Python for product testing, <b className='text-highlight'>improving efficiency in the factory production line</b>.</li>
                                    <li>Led the development of an <b className='text-highlight'>IoT solution</b> using <b className='text-highlight'>ESP32 and Modbus TCP/IP</b> for <b className='text-highlight'>real-time industrial system monitoring</b>, complemented by a web-based <b className='text-highlight'>dashboard monitor and remote control</b>.</li>
                                    <li>Contributed to the development of <b className='text-highlight'>EV charger product</b> following <b className='text-highlight'>OCPP protocol standards</b>.</li>
                                    <li>Developed <b className='text-highlight'>automated test systems using LabVIEW</b> to control <b className='text-highlight'>electronic equipment (power supplies, multimeters, oscilloscopes)</b> for PCBA and final product testing, ensuring accurate measurements, data logging, and quality control.</li>
                                </small></Card.Text>
                            </Card.Body>
                        </Card></div>
                </Row>
                <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                        PROFESSIONAL PROJECT
                    </Badge>
                </div>
                <Row xs={1} sm={1} md={3} className="g-4">
                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title as="h6">
                                    Air Conditioning and Lighting control
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <br />
                                    <small className='text-light'>Developed an application for real-time monitoring and remote control of VFD machines and factory lighting systems via Modbus TCP/IP protocol, with a dashboard interface displaying live system status and control options.</small>
                                    <br /><br />
                                    <Stack direction="horizontal" className='flex-wrap' gap={2}>
                                        <Badge pill bg="primary">Web App</Badge>
                                        <Badge pill bg="primary">Dashboard</Badge>
                                        <Badge pill bg="primary">C#</Badge>
                                        <Badge pill bg="primary">.NET</Badge>
                                        <Badge pill bg="warning">SQL</Badge>
                                        <Badge pill bg="success">IIoT</Badge>
                                        <Badge pill bg="success">API</Badge>
                                        <Badge pill bg="success">TCP/IP</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title as="h6">
                                    Air Quality Monitoring
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <br />
                                    <small className='text-light'>Designed and developed a real-time air quality monitoring system to collect sensor data (e.g., PM2.5, temperature, humidity) with real-time dashboard and notifications windows pop-up. Implemented Over-the-Air (OTA) firmware updates to enable remote system maintenance and upgrades.</small>
                                    <br /><br />
                                    <Stack direction="horizontal" className='flex-wrap' gap={2}>
                                        <Badge pill bg="primary">Web App</Badge>
                                        <Badge pill bg="primary">Dashboard</Badge>
                                        <Badge pill bg="primary">C++</Badge>
                                        <Badge pill bg="primary">C#</Badge>
                                        <Badge pill bg="primary">.NET</Badge>
                                        <Badge pill bg="warning">SQL</Badge>
                                        <Badge pill bg="success">IoT</Badge>
                                        <Badge pill bg="success">API</Badge>
                                        <Badge pill bg="success">ESP32</Badge>
                                        <Badge pill bg="success">Wi-Fi</Badge>
                                        <Badge pill bg="success">Bluetooth</Badge>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='text-white bg-dark'>
                            <Card.Body>
                                <Card.Title as="h6">
                                    EV Charger product development
                                </Card.Title>
                                <Card.Text>
                                    <small className='text-secondary'>[ SVI Public Company Limited ]</small>
                                    <br />
                                    <small className='text-light'>Developed firmware for an EV charger to display real-time charging information (e.g., energy usage, charging time, status) on an LED screen and transmit charging data to a server using the Open Charge Point Protocol (OCPP) for logging and backend integration.</small>
                                    <br /><br />
                                    <Stack direction="horizontal" className='flex-wrap' gap={2}>
                                        <Badge pill bg="primary">Web App</Badge>
                                        <Badge pill bg="primary">C++</Badge>
                                        <Badge pill bg="warning">SQL</Badge>
                                        <Badge pill bg="success">IoT</Badge>
                                        <Badge pill bg="success">API</Badge>
                                        <Badge pill bg="success">ESP32</Badge>
                                        <Badge pill bg="success">Wi-Fi</Badge>
                                        <Badge pill bg="success">OCPP</Badge>
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

export default MyExperience