'use client';
import '../../(neighbor)/style.css';
export default function NeighborPopupPage({ userId }) {
  return (
    <div className="popup-container" style={{ padding: '30px', fontFamily: '나눔스퀘어' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>이웃추가</h2>
      <p className="popup-buddy-box">
        <strong style={{ color: '#00c73c' }}></strong>님을
        <label>
          <input type="radio" name="relation" /> 이웃
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
        <button className="popup-bottom-check">확인</button>
      </div>
    </div>
  );
}
