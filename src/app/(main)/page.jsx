import Link from "next/link";

const MainPage = () => {
    return(
        <div>
            <h1>네이버 블로그</h1>
            <Link href="/blogHome"><button>블로그 홈</button></Link>
            <button>주제별 보기</button>
            <Link href="/edit">
                <button>글 쓰기 메인으로 이동</button>
            </Link>

        </div>
    );
}
export default MainPage;