import { Container, Button } from 'react-bootstrap';

function MyPageHeader() {
    return (<>
    <div className='py-5' >
        <Container>
            <div className='text-center py-5'>
                <h5 className='text-secondary'>Hello, I'm</h5>
                <h1 className='text-info' style={{fontSize:"10vh"}}><strong>Yosita Jasamut</strong></h1>
                <h6 className='py-3 px-6'>Software Engineer | Experienced in Frontend, Backend, Database Systems & IoT Solutions</h6>
                <div className='d-flex gap-2 justify-content-center py-3'>
                    <a href='https://www.linkedin.com/in/yosita-jasamut-122b581ab/' target='_blank'><Button variant="info"><i class="bi bi-linkedin"></i> LinkedIn</Button></a>
                    <a href='https://drive.google.com/file/d/18paDtQy3Bgij0TStJYLYO_THI5o6uCnZ/view?usp=drive_link' target='_blank'><Button variant="outline-info"><i class="bi bi-download"></i> Resume</Button></a>
                </div>
            </div>
        </Container></div>
    </>)
}

export default MyPageHeader