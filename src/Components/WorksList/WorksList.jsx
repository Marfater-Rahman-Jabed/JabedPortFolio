import { Fade } from "react-awesome-reveal";
import WebSitePhoto from "../../assets/Screenshot (2).png"
import learnIt from "../../assets/LearnIt.png";
import doctorPortal from "../../assets/doctorsPortal.png";
import dragonNews from "../../assets/dragonNews.png";
import transport from "../../assets/transfortService.png";
import { Link } from "react-router-dom";




const WorksList = () => {
    return (
        <div>
            <div className="mt-10">
                <Fade direction="left" duration={2000}>
                    <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white py-6 mt-20"> What I Do</h1>
                </Fade>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-16 lg:mx-24">
                <Fade direction="left" >
                    <div className="w-full border-4 rounded-lg ">

                        <div className="card rounded-none bg-base-100 h-72  ">
                            <div className="card-body py-1">
                                <Fade direction="up">
                                    <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-red-600 pb-2 lg:pt-2 ">My Works</h1>
                                </Fade>
                                <Fade direction="up">
                                    <h1 className="font-bold mt-6  text-fuchsia-700">This is a section of projects that showcase my skill and experience about my web development journey This journey start near about one Year ago. Still Now learning process continue.. <br />
                                        Click on the photo to see details </h1>
                                    <Link to="/viewAllProjects"><button className="btn btn-secondary btn-sm   justify-center ">View all projects</button></Link>

                                </Fade>

                            </div>
                        </div>

                    </div>
                </Fade>
                <Fade direction="right">
                    <div className="w-full border-4 rounded-lg">
                        <div className="card rounded-none bg-base-100 h-72  grid grid-cols-2">
                            <div className="m-1 border-4 border-blue-600 border-dashed  " title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="Learn-IT">
                                <a href="https://learn-it-world.web.app/" target="__blank">
                                    <img src={learnIt} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="Dragon-News">
                                <a href="https://dragon-news-a2e4c.web.app/" target="__blank">
                                    <img src={dragonNews} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="Doctors-Portal">
                                <a href="https://doctors-portal-77db2.web.app/" target="__blank">
                                    <img src={doctorPortal} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                        </div>
                    </div>
                </Fade>


                <Fade direction="left">
                    <div className="w-full border-4 rounded-lg">
                        <div className="card rounded-none bg-base-100 h-72  grid grid-cols-2">
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="Transport-Service">
                                <a href="https://travel-service-908b3.web.app/" target="__blank">
                                    <img src={transport} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">

                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>


                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade direction="right">
                    <div className="w-full border-4 rounded-lg">
                        <div className="card rounded-none bg-base-100 h-72  grid grid-cols-2">
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                            <div className="m-1 border-4 border-blue-600 border-dashed" title="BookWorm">
                                <a href="https://usedbookclient.web.app/" target="__blank">
                                    <img src={WebSitePhoto} alt="webDevelop" className="h-full" />
                                </a>

                            </div>
                        </div>
                    </div>
                </Fade>
            </div >
        </div>
    );
};

export default WorksList;