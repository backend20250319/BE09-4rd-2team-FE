export default function AddMutualNeighbor() {
return (
    <div className="neighbor-content">
        <h1 className="tab-title">서로이웃 신청</h1>
        <div className="set-buddy"></div>
        <div className="set-buddy-top" style={{paddingTop: "10px"}}>
            <div className="set-title">서로이웃 신청받기</div>
            <div className="set-input" style={{borderLeft: "50px"}}>
                <input name="allowMutualBuddy" className="bothBuddyAllowed" type="radio" id="r1"/>
                <label for="r1" style={{paddingLeft: "8px"}}>사용</label>
                <input name="allowMutualBuddy" className="bothBuddyDenied" type="radio" id="r2"/>
                <label for="r2" style={{paddingLeft: "8px"}}>사용하지 않음</label>
            </div>
        </div>
        <div className="set-buddy-bottom">
            <ul>
                <li style={{listStyle: "disc"}}>사용하지 않음 선택 시, 다른 사람이 서로이웃 신청을 보낼 수 없습니다.</li>
                <li style={{listStyle: "disc"}}>기존 서로이웃은 유지됩니다.</li>
            </ul>
        </div>
        <div className="set-buddy-button">
            <input className="set-buddy-button-button" type="button" value="확인"/>
        </div>

        <div className="neighbor-requests">
            <div className="tab-menu">
                <button className="active">받은신청</button>
                <button>보낸신청</button>
                <button>안내메시지</button>
            </div>
            <div className="first-content">
                <div className='first-content-left'>
                    <button>수락</button>
                    <button>거절</button>
                </div>
            </div>
            <table className="request-table">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>신청한 사람</th>
                    <th>메시지</th>
                    <th>신청일</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                <tr className="empty-row">
                    <td colSpan="5">새로 들어온 이웃신청이 없습니다</td>
                </tr>
                </tbody>
            </table>
            <div className="first-content">
                <div className='first-content-left'>
                    <input type="checkbox" style={{marginLeft:"15px"}} id="r3" />
                    <label for="r3" className="mutualBuddyCheckbox">전체선택</label>
                    <button>수락</button>
                    <button>거절</button>
                </div>
            </div>
        </div>

    </div>
);
}
