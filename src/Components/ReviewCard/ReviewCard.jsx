
const ReviewCard = ({ image }) => {
    return (
        <div>
            <div className="card mx-2 rounded-ss-none rounded-ee-none rounded-se-3xl rounded-es-3xl  bg-gradient-to-r from-stone-300 via-fuchsia-300 to-blue-400 ">
                <div className="card-body">

                    <p className="font-bold "><i>&quot;If a dog chews shoes whose shoes does he choose? there is a another wonderful way&quot;</i></p>
                    <div className="flex gap-2   mt-2">
                        <div className="avatar">
                            <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} />

                            </div>
                        </div>
                        <div className="">
                            <h1 className="ml-2 "><strong>Michel jeckson</strong></h1>
                            <h1 className="font-semibold ml-2"><small>New York, USA</small></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;