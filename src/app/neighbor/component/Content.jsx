export default function Content() {
    return (
        <div className="l__content" style={{ minHeight: "770px", height: "714px" }}>
            <div className="admin_buddymanage_wrap">
                <h1 className="content-title">
                    <span className="blind">환경설정</span>
                    내가 추가한 이웃
                </h1>

                <ul className="tab1 wblist">
                    <li className="on">이웃목록</li>
                    <li>이웃그룹</li>
                    <li>이웃순서</li>
                </ul>

                <div style={{ position: "relative" }}>
                    <div className="ngb_search">
                        {/* 폼 테그 들어갈 자리 */}
                        <form>
                            <input type="text" placeholder="블로그명 또는 별명" />
                            <button type="submit">검색</button>
                        </form>
                    </div>
                </div>
                <form>
                    <div className="action2 neighborList">
                        <div className="action2_l">
                            <span className="btn btn4">
                                <button type="button">그룹이동</button>
                            </span>
                            <span className="btn btn4">
                                <button type="button">새글소식 지정</button>
                            </span>
                            <span className="btn btn4">
                                <button type="button">삭제</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
