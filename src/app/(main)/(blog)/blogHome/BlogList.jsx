import Image from "next/image";

export default function BlogList({blogs}) {
    return(
        // <div style={{margin: "16px"}}>
        //         {blogs.map(blog => (
        //     <div key={blog.id}>
        //             <p>{blog.author}  <br /> {blog.date} <br /> {blog.title} <br /> {blog.content}</p>
        //         <hr />
        //     </div>
        //         ))}
        // </div>
        <div style={{ margin: "16px" }}>
            {blogs.map(blog => (
                <div
                    key={blog.id}
                    style={{
                        marginBottom: "32px",
                        borderBottom: "1px solid #eee",
                        paddingBottom: "24px"
                    }}
                >
                    <div style={{alignItems: "center", marginBottom: "16px"}}>
                    {/* 프로필 이미지 */}
                    <Image src={blog.authorImage} alt={"프로필 이미지"} width={40} height={40} style={{ borderRadius: "50%", marginRight: "16px" }} />
                    {/* 텍스트 영역 */}
                        <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "2px" }}>
                            {blog.author}
                        </div>
                        <div style={{ color: "#888", fontSize: "12px", marginBottom: "12px" }}>
                            {blog.date}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "12px" }}>
                            {blog.title}
                        </div>
                        <div style={{ color: "#444", fontSize: "15px", lineHeight: "1.7" }}>
                            {blog.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}