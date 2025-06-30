'use client';
import { useState } from 'react';
import DeleteConfirmModal from '../component/DeleteConfirmModal';
// import axios from 'axios';

export default function AddedNeighbors() {
    const [activeTab, setActiveTab] = useState('list');
    // const [selectedIds, setSelectedIds] = useState([]);
    const [showDeletePopup,setShowDeletePopup] = useState(false);
    const [deleteOption,setDeleteOption] = useState('all');
    const dummyNeighbors = [
        {
            id: 1,
            name: '블로거A',
            introduceBlog:'오늘보다 더 나은 내일을 사는 사람',
            group: '기본 그룹',
            mutualNeighbor:true,
            newPostAlarm: true,
            latestPostDate: '2025-06-27',
            addedAt: '2025-06-25',
        },
        {
            id: 2,
            name: '블로거B',
            introduceBlog:'3대 500이하는 HDEX 금지',
            group: '운동친구',
            mutualNeighbor: false,
            newPostAlarm: false,
            latestPostDate: '2025-06-20',
            addedAt: '2025-06-22',
        }
    ];

    // const handleConfirm = async () => {
    //     await axios.post('/api/neighbors/delete', {
    //         neighborIds: selectedIds,
    //         deleteOption: deleteOption,
    //     });
    //     setShowDeletePopup(false);
    //     // 목록 새로고침 등
    // };

    return (
        <div className="neighbor-content">
            <h1 className="tab-title">내가 추가한 이웃</h1>
            <div className="neighbor-tabs">
                <button onClick={() => setActiveTab('list')} className={activeTab === 'list' ? 'active' : ''}>이웃목록</button>
                <button onClick={() => setActiveTab('group')} className={activeTab === 'group' ? 'active' : ''}>이웃그룹</button>
                <button onClick={() => setActiveTab('add')} className={activeTab === 'add' ? 'active' : ''}>이웃추가</button>
            </div>
            <div className="grey-line"></div>
                <div className="first-content">
                    <div className='first-content-left'>
                        <button>그룹이동</button>
                        <button>새글소식 설정</button>
                        <button>삭제</button>
                        <button style={{marginLeft:"20px"}}>열린이웃(RSS) 추가</button>
                    </div>
                    <div className="first-content-right">
                        <span>정렬된 이웃 {dummyNeighbors.length}명</span>
                        <span className="select-box">이웃 추가순</span>
                    </div>
                </div>
            <div className="neighbor-table">
                <div className="table-header">
                    <input type="checkbox" style={{marginLeft:"15px"}}/>
                    <select className="table-box"><option>그룹전체</option></select>
                    <select className="table-box"><option>이웃전체</option></select>
                    <div className="flex-spacer" style={{textAlign:"center",paddingLeft:"50px"}}>이웃</div>
                    <select className="table-box"><option>새글소식전체</option></select>
                    <span className="header-label">최근 글</span>
                    <span className="header-label" style={{marginLeft:"15px"}}>이웃가입일</span>
                </div>
            </div>
            {dummyNeighbors.map((neighbor) => (
              <div key={neighbor.id} className="table-row">
                  <input type="checkbox" style={{ marginLeft: "15px" }} />
                  <span className="table-box">{neighbor.group}</span>
                  <span className="table-box">{neighbor.mutualNeighbor ? "❤️ 서로이웃" : "🖤️이웃" }</span>
                  <div style={{width:"210px", marginLeft:"10px"}}>
                    <span className="table-box">{neighbor.name}</span>
                    <span className="bar">|</span>
                    <a  href=""className='table-box status-message'>{neighbor.introduceBlog}</a>
                  </div>
                  <span className="table-box" style={{marginLeft:"107px"}}>{neighbor.newPostAlarm ? 'ON' : 'OFF'}</span>
                  <span className="header-label" style={{fontSize:"10px",width:"fit-content"}}>{neighbor.latestPostDate}</span>
                  <span className="header-label" style={{width:"fit-content",fontSize: "10px",textAlign:"right"}}>{neighbor.addedAt}</span>
              </div>
            ))}

            <div className="first-content" style={{borderTop:"1px solid #e1e1e1"}}>
                    <div className='first-content-left'>
                        <input type="checkbox" style={{marginLeft:"15px"}}/>
                        <button>그룹이동</button>
                        <button>새글소식 설정</button>
                        <button onClick={()=>setShowDeletePopup(true)}>삭제</button>
                        <button style={{marginLeft:"20px"}}>열린이웃(RSS) 추가</button>
                        {showDeletePopup && (
                          <DeleteConfirmModal
                            onClose={() => setShowDeletePopup(false)}
                            // onConfirm={handleConfirm}
                            deleteOption={deleteOption}
                            setDeleteOption={setDeleteOption}
                          />
                        )}
                    </div>
                </div>
        </div>
    );
}
