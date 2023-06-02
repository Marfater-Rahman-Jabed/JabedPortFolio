import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";

const HomePages = () => {
    return (
        <div className="min-h-full">
            <NavBar></NavBar>
            <LandingPage></LandingPage>
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default HomePages;