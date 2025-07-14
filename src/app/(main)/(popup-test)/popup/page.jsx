'use client';
import '../../(neighbor)/style.css';
import { insertNeighbor } from '@/src/app/(main)/(neighbor)/services/neighborApi';
import { useEffect } from 'react';
import useUserId from '@/src/lib/useUserId';

export default function NeighborPopupPage({}) {
  const userId = useUserId();

  const [targetInfo, setTargetInfo] = useState({ targetId: null, nickname: '' });

  useEffect(() => {
    const handleMessage = event => {
      // 보안 체크
      if (event.origin !== window.location.origin) return;

      const { targetId, nickname } = event.data;
      setTargetInfo({ targetId, nickname });
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleAdd = async () => {
    try {
      await insertNeighbor(userId, targetId);
      alert('이웃 추가 성공!');
      window.close(); // 팝업 닫기
    } catch (error) {
      const message = error.response?.data?.message;
      if (message === '이미 서로이웃입니다.') {
        alert('이미 서로 이웃입니다.');
      } else {
        console.error('이웃 추가 실패:', error);
        alert('이웃 추가에 실패했습니다.');
      }
    }
  };

  return (
    <div className="popup-container" style={{ padding: '30px', fontFamily: '나눔스퀘어' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>이웃추가</h2>
      <p className="popup-buddy-box">
        <strong style={{ color: '#00c73c' }}>{targetInfo.nickname}</strong>님을
        <label>
          <input type="radio" name="relation" defaultChecked /> 이웃
        </label>
        <label>
          <input type="radio" name="relation" /> 서로이웃
        </label>
        으로 추가합니다.
      </p>
      <p style={{ fontSize: '12px', color: '#777', lineHeight: '1.6' }}>
        이웃과 서로이웃은 무엇인가요?
        <br />
        이웃공개, 서로이웃공개 글은 누가 볼 수 있나요?
        <br />
        <strong style={{ color: '#777777' }}>블로그 이용 TIP 더보기&gt;</strong>
      </p>
      <div className="popup-bottom">
        <button className="popup-bottom-cancle" onClick={() => window.close()}>
          취소
        </button>
        <button className="popup-bottom-check" onClick={handleAdd}>
          확인
        </button>
      </div>
    </div>
  );
}
