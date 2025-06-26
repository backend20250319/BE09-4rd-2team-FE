import Image from "next/image";
import Link from "next/link";
import './styles.css'

export default function BlogList({blogs}) {
    return(
        <div style={{ margin: "16px" }}>
            {blogs.map(blog => (
                <div
                    key={blog.id}
                    style={{
                        marginBottom: "30px",
                        borderBottom: "1px solid #eee",
                        paddingBottom: "25px"
                    }}
                >
                    {/* 작성자/날짜/이미지 영역 */}
                    <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}>
                        {/* 프로필 이미지에 링크 */}
                        <Link href="/blogDetail" className="underline-link">
                            <Image
                                src={blog.authorImage}
                                alt="프로필 이미지"
                                width={35}
                                height={35}
                                style={{ borderRadius: "50%", marginRight: "10px", verticalAlign: "middle" }}
                            />
                        </Link>
                        <div>
                            <Link href="/blogDetail" className="underline-link" style={{ fontWeight: "bold", fontSize: "14px" }}>
                                {blog.author}
                            </Link>
                            <div style={{ color: "#888", fontSize: "10px" }}>{blog.date}</div>
                        </div>
                    </div>
                    {/* 제목/본문 영역 */}
                    <div style={{ marginLeft: "0" }}>
                        {/* 제목에 링크 */}
                        <Link href="/blogDetail" className="underline-link" style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "10px", display: "block" }}>
                            {blog.title}
                        </Link>
                        {/* 본문에 링크 */}
                        <Link href="/blogDetail" className="underline-link" style={{ color: "#444", fontSize: "13px", lineHeight: "1.7", display: "block" }}>
                            {blog.content}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}