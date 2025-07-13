'use client';

import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import AddedNeighbors from '../component/AddedNeighbors';
import AddedMeNeighbors from '../component/AddedMeNeighbors';
import AddMutualNeighbor from '../component/AddMutualNeighbor';
import BlogBasicInfo from '../../edit-profile/BlogInfo';
import '../style.css';

export default function NeighborPage() {
  const [selectedTab, setSelectedTab] = useState('add');

  const renderContent = () => {
    switch (selectedTab) {
      case 'add':
        return <AddedNeighbors />;
      case 'addedMe':
        return <AddedMeNeighbors />;
      case 'addedMutual':
        return <AddMutualNeighbor />;
      case 'blogInfo':
        return <BlogBasicInfo />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="neighbor-container">
        <Sidebar setSelectedTab={setSelectedTab} />
        <div className="main-content">{renderContent()}</div>
      </div>
    </div>
  );
}
