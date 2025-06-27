'use client';
import { useState } from 'react';

export default function AddedNeighbors() {
    const [activeTab, setActiveTab] = useState('list');


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
                        <span>정렬된 이웃 명</span>
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
                    <span className="header-label" style={{marginRight:"15px"}}>이웃가입일</span>
                </div>
            </div>
                <div className="first-content" style={{borderTop:"1px solid #e1e1e1"}}>
                    <div className='first-content-left'>
                        <input type="checkbox" style={{marginLeft:"15px"}}/>
                        <button>그룹이동</button>
                        <button>새글소식 설정</button>
                        <button>삭제</button>
                        <button style={{marginLeft:"20px"}}>열린이웃(RSS) 추가</button>
                    </div>
                </div>
        </div>
    );
}
