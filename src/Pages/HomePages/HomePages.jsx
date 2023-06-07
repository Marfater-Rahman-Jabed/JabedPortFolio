import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import WorksList from "../../Components/WorksList/WorksList";
import LandingPage from "../LandingPage/LandingPage";
import ReviewCards from "../../Components/ReviewCard/ReviewCards"
const HomePages = () => {
    return (
        <div className="min-h-full">

            <LandingPage></LandingPage>
            <Experience></Experience>
            <WorksList></WorksList>
            <ReviewCards></ReviewCards>
            <Contact></Contact>

        </div>
    );
};

export default HomePages;