export default function AddedMeNeighbors() {
    return (
        <>
            <h1 className="tab-title">나를 추가한 이웃</h1>
            <div className="neighbor-content">
                <div className="first-content">
                    <div className='first-content-left'>
                        <button style={{marginLeft:"0px"}}>서로이웃 신청</button>
                        <button style={{marginLeft:"0px"}}>이웃신청</button>
                        <button style={{marginLeft:"20px"}}>차단</button>
                    </div>
                    <div className="first-content-right">
                        <span>오늘 명</span>
                        <span >전체 명</span>
                        <span>❤️서로이웃 명</span>
                    </div>
                </div>
                <div className="neighbor-table">
                    <div className="table-header">
                        <input type="checkbox" style={{marginLeft:"15px"}}/>
                        <select className="table-box"><option>나를 이웃으로 추가한 사람 전체</option></select>
                        <div className="header-label" style={{textAlign:"center", paddingLeft:"260px"}}>이웃추가</div>
                        <span className="header-label" style={{marginRight:"15px" , paddingLeft:"80px"}}>추가일</span>
                    </div>
                </div>
                <div className="first-content" style={{borderTop:"1px solid #e1e1e1"}}>
                    <div className='first-content-left'>
                        <input type="checkbox" style={{marginLeft:"15px"}}/>
                        <button>서로이웃 신청</button>
                        <button style={{marginLeft:"0px"}}>아웃신청</button>
                        <button style={{marginLeft:"20px"}}>차단</button>
                    </div>
                </div>

            </div>

        </>
    );
}
