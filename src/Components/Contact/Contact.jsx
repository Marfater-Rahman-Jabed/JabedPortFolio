import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <div className="lg:mx-24 mt-32">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1">
                <div className=" h-72 flex flex-col gap-2 justify-center items-center ">

                    <Fade direction="left">
                        <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white mb-4 ">Contact</h1>
                        <h1 className="text-center font-bold text-3xl  text-white">I would love to hear from You</h1>
                    </Fade>


                </div>
                <Fade direction="right">
                    <div className="card  bg-base-100 h-72 ">
                        <div className="card-body">


                            <form action="" className="grid grid-cols-1 gap-2">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full " />
                                    <input type="number" placeholder="Phone Number" className="input input-bordered input-secondary w-full " />

                                </div>
                                <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full " />
                                <textarea className="textarea textarea-secondary" placeholder="Text your message"></textarea>
                                <div className="card-actions  justify-end">
                                    <button className="btn btn-active btn-secondary btn-sm w-20 ">Send</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    );
};

export default Contact;