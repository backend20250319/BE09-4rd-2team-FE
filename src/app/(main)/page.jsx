import Link from "next/link";

const MainPage = () => {
    return(
        <div>
            <h1>네이버 블로그</h1>
            <Link href="/blogHome"><button>블로그 홈</button></Link>
            <button>주제별 보기</button>
        </div>
    );
}
export default MainPage;