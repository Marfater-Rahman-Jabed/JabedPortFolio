const ExpCard = ({ experience }) => {

    return (
        <div className="card w-72 h-40 bg-gradient-to-r from-purple-700 via-rose-500 to-blue-700 text-primary-content">
            <div className="card-body flex flex-col justify-center items-center">
                <img src={experience.picture} alt="" className="w-20 h-20 rounded-full" />
                <h2 className="card-title text-2xl">{experience.title}</h2>


            </div>
        </div>
    );
};

export default ExpCard;