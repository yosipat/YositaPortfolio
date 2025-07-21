import { Container, Card, Row, Col, Image, Badge } from 'react-bootstrap';
function MyExperience() {
    return (<>
        <div className='py-5' id="exp" style={{backgroundColor:"#000000"}}>
            <Container className='p-3'>
                  <div className='text-center py-4'>
                        <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                            WORK EXPERIENCE
                        </Badge>
                    </div>
                <Row className=''>
                    <div className='p-2'>
                        <Card className='p-3 text-light bg-dark border-secondary' style={{borderRadius:"1rem"}}>
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
            </Container>
        </div>
    </>)
}

export default MyExperience