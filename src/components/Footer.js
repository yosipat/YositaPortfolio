import { Container, Button, Stack, Badge } from "react-bootstrap"

function MyFooter() {
    return (<>

        <div className='py-5 bg-light text-dark' id="contact">
            <Container>
                <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-light'>
                        CONTACT ME
                    </Badge>
                </div>
                <div className="py-2 text-center">
                    <p>
                        yocipat@gmail.com  | (+1)825 288 2694
                    </p>
                    <Stack direction="horizontal" gap={2} className=" justify-content-center pb-3">
                        <a href='https://www.linkedin.com/in/yosita-jasamut-122b581ab/' target='_blank'><Button variant="outline-dark"><i class="bi bi-linkedin"></i></Button></a>
                        <a href='https://github.com/yosipat' target='_blank'><Button variant="outline-dark"><i class="bi bi-github"></i></Button></a>
                        <a href='mailto:yocipat@gmail.com' target='_blank'><Button variant="outline-dark"><i class="bi bi-envelope-fill"></i></Button></a>
                    </Stack>
                    <p><small>© 2025 Yosita Jasamut</small></p>
                </div>
            </Container>
        </div>
    </>)
}

export default MyFooter