
import { Container, Card, Row, Col, Image, Badge, Stack, Pagination } from 'react-bootstrap';
import Img_SpotStich from '../image/SpotstichARCamera.jpg';
import Img_GetBit from '../image/GetBit.jpg';
import Img_Connect3 from '../image/Connect3.jpg';
import Img_Workspace from '../image/Workspace.jpg';
import Img_Book from '../image/Book.jpg';
import Img_BestDishes from '../image/BestDishes.jpg';
import Img_CalgaryWeater from '../image/CalgaryWeather.jpg';
import Img_MathQuiz from '../image/MathQuiz.jpg';
import Img_Hangman from '../image/Hangman.jpg';
import Img_TradingCard from '../image/TradingCards.jpg';
import { useState } from 'react';

function MyProject() {
    const cards = [
        { id: 1, img: Img_SpotStich, title: "SpotStich AR Camera & Photo Editor", detail: "Developed in collaboration with Human City organization, allowing users to overlay images, text, and scanned 3D objects onto the real-world environment through the camera interface, combining with photo editing.", type: "MobileApp", frontend: ["React Native"], backend: ["TypeScript"], other: ["Expo Go", "Three.js"], github: "", demo: "" },
        { id: 2, img: Img_Workspace, title: "Shared Workspace Rental", detail: "A web applicaion for coworking space rentals where owners can list and manage their properties using HTTP methods with JSON-based APIs, while users can browse and view property details.", type: "WebApp", frontend: ["Bootstrap"], backend: ["Node.js", "Express.js"], other: ["REST API"], github: "https://github.com/yosipat/SharedWorkspace_WebApp", demo: "https://sharedworkspace-webapp.onrender.com/" },

        { id: 3, img: Img_GetBit, title: "Get Bit! Board Game on PC", detail: "A PC-based adaptation of the Get Bit! board game, developed as a Windows application using object-oriented programming (OOP) principles for game logic, player management, and turn-based mechanics.", type: "WinForms", frontend: ["C#"], backend: [], other: [], github: "https://github.com/yosipat/SODV2202_FinalProject_Group7", demo: "" },
        { id: 4, img: Img_CalgaryWeater, title: "Calgary Weather", detail: "A web application that fetches and displays real-time weather data for Calgary using a weather API, implemented with JavaScript for dynamic updates and user-friendly interface.", type: "WebApp", frontend: ["HTML/CSS"], backend: ["JavaScript"], other: [], github: "https://github.com/yosipat/CalgaryWeather", demo: "https://yosipat.github.io/CalgaryWeather/" },

        { id: 5, img: Img_Book, title: "Bookstore Management", detail: "A web application for managing a bookstore, featuring an owner role for performing CRUD operations on books via HTTP methods and a user role for viewing book information. Secure authentication is implemented using JSON Web Tokens (JWT).", type: "WebApp", frontend: ["React.js"], backend: ["Node.js"], other: ["REST API", "JWT"], github: "https://github.com/yosipat/BookManagement_WebApp", demo: "" },
        { id: 6, img: Img_Connect3, title: "Connect 3", detail: "A website of two-player take turns placing three colored pieces in a row (horizontally, vertically, or diagonally).", type: "WebApp", frontend: ["HTML/CSS"], backend: ["JavaScript"], other: [], github: "https://github.com/yosipat/FirstPortfolio", demo: "https://yosipat.github.io/FirstPortfolio/ConnectThreeGame/index.html" },

        { id: 7, img: Img_BestDishes, title: "30 Best Dishes in the World", detail: "Animated list of 30 items using Data Class with light/dark theme toggle.", type: "MobileApp", frontend: ["Material Design"], backend: ["Kotlin"], other: ["Android Studio", "Jetpack Compose"], github: "https://github.com/yosipat/AndroidApp-30BestDishesInTheWorld", demo: "" },
        { id: 8, img: Img_MathQuiz, title: "Math Quiz", detail: "An mobile application of math questions with tracks their answers, and calculates scores.", type: "MobileApp", frontend: ["Material Design"], backend: ["Kotlin"], other: ["Android Studio", "Jetpack Compose"], github: "https://github.com/yosipat/AndroidApp-MathQuiz", demo: "" },
        { id: 9, img: Img_Hangman, title: "Hangman", detail: "A classic Hangman game implemented as a Windows application featuring randomly selected secret words for each round.", type: "WinForms", frontend: ["C#"], backend: [], other: [], github: "https://github.com/yosipat/HangmanGame_WinForms", demo: "" },
        { id: 10, img: "", title: "Connect 4 game", detail: "A two-player console game where players alternate turns to place their symbol pieces, aiming to connect four in a row horizontally, vertically, or diagonally.", type: "ConsoleApp", frontend: ["C#"], backend: [], other: [], github: "https://github.com/yosipat/Connect4_ConsoleApp", demo: "" },

    ];

    const pageSize = 6;
    const totalPages = Math.ceil(cards.length / pageSize);
    const [activePage, setActivePage] = useState(1);

    const paginatedCards = cards.slice(
        (activePage - 1) * pageSize,
        activePage * pageSize
    );

    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                href="#project"
                key={number}
                active={number === activePage}
                onClick={() => setActivePage(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (<>
        <div className='py-5' id="project">
            <Container>
                <div className='text-center py-4'>
                    <Badge pill bg="dark" className='p-2 px-3 text-secondary'>
                        PROJECTS
                    </Badge>
                </div>
                <Row xs={1} sm={1} md={3} className="g-4">
                    {paginatedCards.map((card) => (
                        <Col key={card.id}>
                            <Card className='text-white bg-dark'>
                                {card.img == "" ? "" : <Card.Img variant="top" src={card.img} />}

                                <Card.Body>
                                    <Card.Title as="h6">{card.title} {
                                        card.github == "" ? "" : <a href={card.github} class="link-primary" target="_blank"><i class="bi bi-github"></i></a>
                                    } {card.demo == "" ? "" : <a href={card.demo} class="link-primary" target="_blank"><i class="bi bi-display"></i></a>
                                        }</Card.Title>
                                    <Card.Text>
                                        <small className='text-secondary'>{card.detail}</small>
                                        <Stack direction="horizontal" gap={2} className='pt-2 flex-wrap'>
                                            <Badge pill bg="secondary">{card.type}</Badge>
                                            {card.frontend.map((item) => (<Badge pill bg="primary">{item}</Badge>))}
                                            {card.backend.map((item) => (<Badge pill bg="warning">{item}</Badge>))}
                                            {card.other.map((item) => (<Badge pill bg="success">{item}</Badge>))}
                                        </Stack>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="d-flex justify-content-center mt-4">
                    <Pagination>{paginationItems}</Pagination>
                </div>
            </Container>
        </div>

    </>)
}

export default MyProject