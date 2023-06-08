import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('MyBlogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 gap-4 lg:mx-16 mt-16">
            {
                blogs.map((blog, i) => <BlogCard key={i} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default BlogPage;