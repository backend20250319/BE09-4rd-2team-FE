export default function BlogList({blogs}) {
    return(
        <div>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>{blog.title} <br /> {blog.content} <br /> {blog.author} <br /> {blog.date}</li>
                ))}
            </ul>
        </div>
    );
}