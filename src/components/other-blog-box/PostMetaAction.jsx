import React, { useState } from 'react';
import './PostMetaAction.css';

export default function MetaActions({ onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="post-meta-actions">
      <button className="copy-url">URL 복사</button>

      <button className="neighbor-button">+이웃추가</button>
    </div>
  );
}
