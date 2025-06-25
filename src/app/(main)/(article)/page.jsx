import Link from "next/link";

const ArticlePage = () => {
    return(
        <div>
            <h1>글쓰기 창 </h1>
            <input type="file" accept="image/*" />
            <label htmlFor="file-input">
                <button>사진 업로드</button>
            </label>
            <input
                id="file-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <button>발행</button> <br />
            <button></button>
        </div>
    );
}
export default ArticlePage;