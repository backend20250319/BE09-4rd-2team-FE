import Link from "next/link";

const ArticlePage = () => {

    return(

        <div className="blog-editor">
            <header className="editor-header">
                <div className="header-left">
                    {/* 사진, 동영상, 스티커 등 콘텐츠 삽입 도구 */}
                </div>

                <div className="header-center">
                    {/* 글자 크기, 정렬, 번역 등 텍스트 포맷팅 도구 */}
                </div>

                <div className="header-right">
                    {/* 발행, 임시 저장, 설정 등 작업 관련 버튼 */}
                </div>
            </header>

            <main className="editor-area">
        <textarea
            className="editor-text"
            placeholder="S"
            rows={4}
        />
                <textarea
                    className="editor-text"
                    placeholder="ss"
                    rows={4}
                />
            </main>

            <footer className="editor-footer">
                <button className="publish-button">발행</button>
            </footer>
        </div>
    );

}
export default ArticlePage;