import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import WorksList from "../../Components/WorksList/WorksList";
import LandingPage from "../LandingPage/LandingPage";

const HomePages = () => {
    return (
        <div className="min-h-full">
            <NavBar></NavBar>
            <LandingPage></LandingPage>
            <Experience></Experience>
            <WorksList></WorksList>
            <Footer></Footer>
        </div>
    );
};

export default HomePages;