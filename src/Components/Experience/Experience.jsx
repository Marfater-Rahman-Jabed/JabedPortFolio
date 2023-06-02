import { Fade } from "react-awesome-reveal";
import ExpCard from "../ExpCard/ExpCard";
import { useEffect, useState } from "react";

const Experience = () => {
    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        fetch('experience.json')
            .then(res => res.json())
            .then(data => {
                setExperiences(data);
            })
    }, [])

    return (
        <div className="mt-24 lg:mx-24 md:mx-12 mx-10">
            <div className="mb-10">
                <Fade direction="left" duration={2000} >
                    <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white ">My Experience</h1>
                </Fade>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2  ">

                <Fade direction="right">
                    {
                        experiences.map((experience, i) => <ExpCard key={i} experience={experience}></ExpCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default Experience;