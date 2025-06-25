function SympathyItem({blogger}) {
    return (
        <div className="sympathy-item" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            border: '1px solid #ddd'
        }}>
            <img
                src={blogger.profileImage}
                alt={blogger.name}
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }}
            />
            <div>
                <a href="#" style={{fontWeight: 'bold'}}>{blogger.name}</a>
                <span style={{fontSize: '12px', color: '#666'}}>{blogger.description}</span>
            </div>
            <button>+ 이웃추가</button>
        </div>
    );
}

export default SympathyItem;