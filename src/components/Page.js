import MyNavBar from "./NavBar"
import MyPageHeader from "./PageHeader"
import MyAboutMe from "./AboutMe"
import MySkill from "./Skill"
import MyExperience from "./Experience"
import MyEducation from "./Education"
import MyProject from "./Project"
import MyFooter from "./Footer"
import { Button, Container } from 'react-bootstrap';
import { useContext } from "react"
import { ThemeContext } from "./ThemeContextProvider"
export default function Page() {
    const { toggleTheme } = useContext(ThemeContext)
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <Button variant="info" className="text-light" onClick={toggleTheme} style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999" }}>{theme === "light" ? <i class="bi bi-sun-fill"></i> : <i class="bi bi-moon-stars-fill"></i>}</Button>
            <MyNavBar />
            {/* <div className="wrapper text-light"  style={{ backgroundColor: "#000000" }}> */}
            <div className={theme}>
                <Container>
                    <MyPageHeader />
                    <MyAboutMe />
                    <MySkill />
                    <MyExperience />
                    <MyEducation />
                    <MyProject />
                    {/* <MyCertificate/> */}

                </Container>
                <MyFooter />
            </div>
        </>
    )
}