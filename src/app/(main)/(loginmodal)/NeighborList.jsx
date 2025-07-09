export default function NeighborList({ neighbors }) {
  return (
    <div className="alert-card">
      <h3 style={{ margin: '0px' }}>전체 이웃</h3>
      <hr style={{ color: '#aaa' }} />
      {!neighbors || neighbors.length === 0 ? (
        <p>등록된 이웃이 없습니다.</p>
      ) : (
        <div className="neighbor-list">
          {neighbors.map(neighbor => (
            <div key={neighbor.id} className="neighbor-card">
              <img
                src={neighbor.profileImageUrl}
                alt={neighbor.nickname}
                className="profile-image"
              />
              <span>{neighbor.nickname}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
