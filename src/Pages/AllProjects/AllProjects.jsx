import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AllProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('AllProject.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <div className="mx-4">
            <Fade direction="down" duration={2000}>
                <div className="my-6">
                    <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white pb-4">All Projects</h1>
                </div>
            </Fade>

            <div className="w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <Fade direction="left">
                    {
                        projects.map((project, i) => <div key={i} className="card  bg-base-100 h-72 rounded-lg ">
                            <a href={project.link} className="h-full">
                                <img src={project.picture} alt="" className="h-full" />
                            </a>
                            <h1 className="bg-purple-600 text-white font-semibold pb-3 text-center align-middle pt-2">Website Name:{project.title}</h1>
                        </div>)
                    }
                </Fade>
            </div>

        </div>
    );
};

export default AllProjects;