export default function Sidebar() {
    return (
        <div className="l__aside">
            <div className="module_lnb">
                <div className="lnb_local-menu" id="nav">
                    {/* 메뉴 묶음들 */}
                    <div className="lnb_depth1">
                        <div className="lnb_title">기본 정보 관리</div>
                        <ul className="lnb_depth2">
                            <li><a className="lnb__item">블로그 정보</a></li>
                            <li><a className="lnb__item">기본 서체 설정</a></li>
                        </ul>
                    </div>

                    <div className="lnb_depth1">
                        <div className="lnb_title">사생활 보호</div>
                        <ul className="lnb_depth2">
                            <li><a className="lnb__item">블로그 초기화</a></li>
                            <li><a className="lnb__item">방문집계 보호 설정</a></li>
                            <li><a className="lnb__item">콘텐츠 공유 설정</a></li>
                        </ul>
                    </div>

                    <div className="lnb_depth1">
                        <div className="lnb_title">스팸 차단 관리</div>
                        <ul className="lnb_depth2">
                            <li><a className="lnb__item">차단 설정</a></li>
                            <li><a className="lnb__item">차단된 글목록</a></li>
                            <li><a className="lnb__item">댓글·안부글 권한</a></li>
                        </ul>
                    </div>

                    <div className="lnb_depth1">
                        <div className="lnb_title">이웃 관리</div>
                        <ul className="lnb_depth2">
                            <li><a className="lnb__item">내가 추가한 이웃</a></li>
                            <li><a className="lnb__item">나를 추가한 이웃</a></li>
                            <li><a className="lnb__item">서로이웃 신청</a></li>
                        </ul>
                    </div>
                </div>

                <div className="lnb_common-menu">
                    <div className="lnb_depth1"><a className="lnb__title">공지사항</a></div>
                    <div className="lnb_depth1"><a className="lnb__title">블로그 이용 Tip</a></div>
                    <div className="lnb_depth1"><a className="lnb__title">블로그 스마트봇</a></div>
                </div>
            </div>
        </div>
    );
}
