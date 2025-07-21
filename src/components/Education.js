import { Container, Card, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';

function MyEducation() {
    return (<>
        <div className='py-5' id="edu">
            <Container>
                <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                        EDUCATION
                    </Badge>
                </div>
                <Row className=''>
                    <div className='p-2'>
                        <ListGroup as="ol" style={{borderRadius:"1rem"}}>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start p-4 text-light border-secondary bg-dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="">Diploma of Software Development</div>
                                    <div className='text-secondary'>Bow Valley College, Canada</div>
                                    <i><small>GPA 3.92/4.00</small></i>
                                </div>
                                <Badge bg="primary" pill>
                                    2024 - 2025
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start p-4 text-light border-secondary bg-dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="">Master of Business Administration</div>
                                    <div className='text-secondary'>Rangsit University, Thailand</div>
                                    <i><small>GPA 4.00/4.00</small></i>
                                </div>
                                <Badge bg="primary" pill>
                                    2020 - 2022
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start p-4 text-light border-secondary bg-dark"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="">Bachelor of Electronics Engineering</div>
                                    <div className='text-secondary'>King Mongkut's Institute of Technology Ladkrabang, Thailand</div>
                                    <i><small>GPA 3.31/4.00</small></i>
                                </div>
                                <Badge bg="primary" pill>
                                    2015 - 2019
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Row>
            </Container>
        </div>
    </>)
}

export default MyEducation