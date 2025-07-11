import { useEffect, useState } from 'react';
import {
  getMyReceivedNeighbors,
  insertNeighbor,
} from '@/src/app/(main)/(neighbor)/services/neighborApi';

export default function AddedMeNeighbors() {
  const userId = 1;
  const [neighbors, setNeighbors] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const mutualNeighbors = neighbors.filter(n => n.mutual);
  const mutualCount = mutualNeighbors.length;

  const handleCheck = id => {
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]));
    console.log('handle check', selectedIds);
  };

  const handleAdd = async targetIds => {
    try {
      await insertNeighbor(userId, targetIds);
      alert('추가 성공!');
      setSelectedIds([]);
      const res = await getMyReceivedNeighbors(userId);
      console.log('업데이트된 이웃 목록:', res.data);
      setNeighbors(res.data);
    } catch (error) {
      console.error('이웃추가실패:', error);
      alert('이웃추가에 실패했습니다.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyReceivedNeighbors(userId);
        setNeighbors(response.data);
        console.log('neighbor.id 값:', response.data);
      } catch (error) {
        console.error('이웃 목록 불러오기 실패:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="tab-title">나를 추가한 이웃</h1>
      <div className="neighbor-content">
        <div className="first-content">
          <div className="first-content-left">
            <button style={{ marginLeft: '0px' }}>서로이웃 신청</button>
            <button style={{ marginLeft: '0px' }}>이웃신청</button>
            <button style={{ marginLeft: '20px' }}>차단</button>
          </div>
          <div className="first-content-right">
            <span>오늘 명</span>
            <span>전체 명</span>
            <span>❤️서로이웃{mutualCount}명</span>
          </div>
        </div>
        <div className="neighbor-table">
          <div className="table-header">
            <input type="checkbox" style={{ marginLeft: '15px' }} />
            <select className="table-box">
              <option>나를 이웃으로 추가한 사람 전체</option>
            </select>
            <div className="header-label" style={{ textAlign: 'center', paddingLeft: '260px' }}>
              이웃추가
            </div>
            <span className="header-label" style={{ marginRight: '15px', paddingLeft: '80px' }}>
              추가일
            </span>
          </div>
        </div>
        {neighbors.map(neighbor => (
          <div key={neighbor.id} className="table-row">
            <input
              type="checkbox"
              checked={selectedIds.includes(neighbor.id)}
              onChange={() => {
                console.log(neighbor);
                handleCheck(neighbor.id);
              }}
            />
            <span className="table-box" style={{ width: '30px' }}>
              {neighbor.mutual ? '❤️' : '🖤'}
            </span>
            <div style={{ width: '360px' }}>
              <span className="table-box">{neighbor.nickname}</span>
              <span className="bar">|</span>
              <a href="" className="table-box status-message">
                {neighbor.profileIntro}
              </a>
            </div>
            <button
              className="button-neighbor-mutual"
              onClick={() => {
                console.log(neighbor);
                handleAdd(neighbor.id);
              }}
            >
              서로이웃신청
            </button>
            <button className="button-neighbor-alone" onClick={() => handleAdd(neighbor.id)}>
              이웃신청
            </button>
            <span
              className="header-label"
              style={{
                width: 'fit-content',
                fontSize: '10px',
                textAlign: 'right',
                marginLeft: '40px',
              }}
            >
              {neighbor.requestedAt}
            </span>
          </div>
        ))}
        <div className="first-content" style={{ borderTop: '1px solid #e1e1e1' }}>
          <div className="first-content-left">
            <input type="checkbox" style={{ marginLeft: '15px' }} />
            <button>서로이웃 신청</button>
            <button style={{ marginLeft: '0px' }}>아웃신청</button>
            <button style={{ marginLeft: '20px' }}>차단</button>
          </div>
        </div>
      </div>
    </>
  );
}
