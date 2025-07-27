import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <UserProfile name="Henry" age={28} bio="React Developer from Kenya." />
      <UserProfile name="Alice" age={24} bio="UI/UX Designer from Nairobi." />
    </main>
  );
}

export default MainContent;
