import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef', minHeight: '60vh' }}>
      <UserProfile name="Alice" age={25} bio="Loves nature and long walks on the beach." />
      <UserProfile name="Bob" age={30} bio="Avid reader and mountain climber." />
    </main>
  );
}

export default MainContent;
