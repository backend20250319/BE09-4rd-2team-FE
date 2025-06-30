export default function AddedMeNeighbors() {
    const dummyNeighbors = [
        {
            id: 1,
            name: '블로거A',
            introduceBlog:'오늘보다 더 나은 내일을 사는 사람',
            mutualNeighbor:true,
            addedAt: '2025-06-25',
        },
        {
            id: 2,
            name: '블로거B',
            introduceBlog:'3대 500이하는 HDEX 금지',
            mutualNeighbor: false,
            addedAt: '2025-06-22',
        }
    ];

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
                {dummyNeighbors.map((neighbor) => (
                <div key={neighbor.id} className="table-row">
                    <input type="checkbox"/>
                    <span className="table-box" style={{width:"30px"}}>{neighbor.mutualNeighbor ? "❤️" : "🖤" }</span>
                    <div style={{width:"360px"}}>
                        <span className="table-box">{neighbor.name}</span>
                        <span className="bar">|</span>
                        <a  href=""className='table-box status-message'>{neighbor.introduceBlog}</a>
                    </div>
                    <button className="button-neighbor-mutual">서로이웃신청</button>
                    <button className="button-neighbor-alone">이웃신청</button>
                    <span className="header-label" style={{width:"fit-content",fontSize: "10px",textAlign:"right",marginLeft:"40px"}}>{neighbor.addedAt}</span>
                </div>))}
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
