import { Fade } from "react-awesome-reveal";
import { toast } from "react-hot-toast";

const Contact = () => {
    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, phone, email, message);

        const mailData = {
            email, phone, name, message
        }

        fetch(`http://localhost:5000/sendEmail`, {
            method: "Post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mailData)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                toast.success("Email Successfully Send. Please Wait. Will be replied within 24 hours")
            })


        form.reset()

    }
    return (
        <div className="lg:mx-24 mt-32">
            <Fade direction="left" duration={2000}>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white ">Contact With  Me</h1>
                </div>
            </Fade>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1">
                <div className=" h-72 flex flex-col gap-2 justify-center items-center ">

                    <Fade direction="up">
                        <h1 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-700 to-white mb-4 ">Hellow !!</h1>
                        <h1 className="text-center font-bold text-3xl  text-white">I would love to hear from You !</h1>
                    </Fade>


                </div>
                <Fade direction="right">
                    <div className="card  bg-base-100 h-80 ">
                        <div className="card-body ">


                            <form action="" className="grid grid-cols-1 gap-2 my-auto" onSubmit={handleContact}>
                                <div className="flex gap-2">
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-secondary w-full " required />
                                    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered input-secondary w-full " />

                                </div>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered input-secondary w-full " required />
                                <textarea className="textarea textarea-secondary" placeholder="Text your message" name="message" required></textarea>
                                <div className="card-actions  justify-end ">
                                    <button className="btn btn-active btn-secondary btn-sm w-20 mt-4 " >Send</button>
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