
const BlogCard = ({ blog }) => {
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">

            <div className="card-body">
                <h2 className="font-bold text-3xl text-center text-fuchsia-500">{blog.title}</h2>
                <p className="font-serif">{blog.description}</p>

            </div>
        </div>
    );
};

export default BlogCard;