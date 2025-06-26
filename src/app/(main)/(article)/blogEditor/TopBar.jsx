import React from 'react';
import './TopBar.css';

const TopBar = ({ onPublish }) => (
    <div className="top-bar">
        <div className="top-bar__logo">
            <img src="/image/article/logo/nblog.png" alt="N Blog" />
            <span></span>
        </div>
        <button className="top-bar__publish" onClick={onPublish}>발행</button>
    </div>
);

export default TopBar;
