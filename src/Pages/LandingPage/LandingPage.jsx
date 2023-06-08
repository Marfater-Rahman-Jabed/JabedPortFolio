import Typewriter from 'typewriter-effect';
import Jabed from '../../assets/JabedPhoto.png';
import { BsFacebook, BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
const LandingPage = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:ms-10'>
            <div className=' ms-12 lg:ms-12 md:ms-12  sm:py-10'>
                <h1 className='text-3xl font-bold text-yellow-400 mt-10'>Hi, I&apos;m</h1>
                <h1 className='text-5xl font-bold text-white'> Marfater Rahman Jabed</h1>
                <div className='flex mb-10 '>
                    <h1 className='me-2 font-bold md:text-2xl lg:text-3xl  text-white font-serif  '>I&apos;m
                    </h1>
                    <h1 className="text-blue-900 font-bold font-serif md:text-2xl lg:text-3xl">
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
                    <a href="https://www.facebook.com/marfaterrahman.jabed.5?mibextid=ZbWKwL" target='__blank'><BsFacebook></BsFacebook></a>
                    <ReactWhatsapp number="+8801827717200" message="Hello World!!!" ><BsWhatsapp></BsWhatsapp></ReactWhatsapp>
                    <BsTelegram></BsTelegram>
                    <a href="https://www.linkedin.com/in/marfater-rahman-jabed-17541b244/" target='__blank'><BsLinkedin></BsLinkedin></a>
                    <a href="https://github.com/Marfater-Rahman-Jabed" target='__blank'><BsGithub></BsGithub></a>


                </div>

                <div className='mb-4'>
                    <button className="btn btn-outline btn-primary "><Link to='/contact'><span className='text-white'>Hire Me</span></Link></button>
                    <button className="btn border-2 hover:bg-orange-700 hover:text-white btn-warning mx-4" title='Download Resume'><a href="Marfater Rahman Resume.pdf" download="Marfater Rahman Resume.pdf">  Resume</a> </button>
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