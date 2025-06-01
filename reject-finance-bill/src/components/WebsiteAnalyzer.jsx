import React from 'react';
// Removed: import { ArrowRightCircle } from 'lucide-react'; // Not needed for email button

const WebsiteAnalyzer = () => {
  // Removed: const handleAnalyze = () => { alert('Analyzing website: civicemail.netlify.app 🔍'); }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 rounded-2xl shadow-2xl text-white text-center">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
        Reject Finance Bill 2025
      </h2>
      <p className="mb-6 text-lg">
        Click below to send an email to the Parliament:
      </p>
      <a
        href="mailto:clerk@parliament.go.ke,financecommittee@parliament.go.ke?subject=Reject Finance Bill 2025&body=Dear Clerk of the National Assembly and Finance Committee,%0D%0A%0D%0AI strongly urge you to reject the Finance Bill 2025. It will cause more harm than good to the people of Kenya.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]"
        target="_blank"
        className="inline-flex items-center justify-center px-6 py-3 bg-black hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold shadow-lg text-white no-underline"
        rel="noopener noreferrer" // Added for security best practice with target="_blank"
      >
        Send Protest Email
      </a>
    </div>
  );
};

export default WebsiteAnalyzer;
