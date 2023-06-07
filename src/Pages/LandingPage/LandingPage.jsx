import Typewriter from 'typewriter-effect';
import Jabed from '../../assets/JabedPhoto.png';
import { BsFacebook, BsGithub, BsLinkedin, BsMessenger, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:ms-10'>
            <div className=' ms-12 lg:ms-16 md:ms-12  sm:py-10'>
                <h1 className='text-5xl font-bold text-white mt-10'>Hi !!</h1>
                <h1 className='text-4xl font-bold text-white'>I&apos;m Marfater Rahman Jabed</h1>
                <div className='flex mb-10 '>
                    <h1 className='me-2 font-bold md:text-2xl lg:text-3xl  text-white   '>I&apos;m
                    </h1>
                    <h1 className="text-blue-900 font-bold md:text-2xl lg:text-3xl">
                        <Typewriter
                            options={{
                                strings: ['A Web Developer', 'A UI/UX Designer', 'A React Developer',],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <div className='flex gap-4 mb-6'>
                    <BsFacebook></BsFacebook>
                    <BsWhatsapp></BsWhatsapp>
                    <BsTelegram></BsTelegram>
                    <BsLinkedin></BsLinkedin>
                    <BsGithub></BsGithub>
                    <BsMessenger></BsMessenger>
                </div>

                <div className='mb-4'>
                    <button className="btn btn-outline btn-primary text-white"><Link to='/contact'>Hire Me</Link></button>
                    <button className="btn btn-outline btn-warning mx-4">            <a href="Marfater Rahman Resume.pdf" download="Marfater Rahman Resume.pdf">Resume</a> </button>
                </div>
            </div>
            <div>

                <Fade duration={2000} direction='right'>
                    <img src={Jabed} alt="" className='md:ps-2 lg:ps-2 w-96 h-96 rounded-full' />
                </Fade>
            </div>
        </div>
    );
};

export default LandingPage;