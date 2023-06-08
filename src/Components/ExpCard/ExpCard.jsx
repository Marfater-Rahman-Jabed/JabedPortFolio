
const ExpCard = ({ images, title }) => {

    return (
        <div className="card mx-2 h-48 bg-gradient-to-r from-purple-700 via-rose-500 to-blue-700 text-primary-content">
            <div className="card-body flex flex-col justify-center items-center">
                <img src={images} alt="" className="w-28 h-28 rounded-full" />
                <h2 className="card-title text-3xl">{title}</h2>


            </div>
        </div>
    );
};

export default ExpCard;