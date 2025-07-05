import React from 'react';

function Dashboard() {
  const discussions = [
    { id: 1, user: 'Ram', content: 'माझ्या गव्हाच्या पिकावर कीड आली आहे, उपाय सांगा.' },
    { id: 2, user: 'Ravi', content: 'ನಾನು ಟೊಮಾಟೋ ಬೆಳೆದಿದ್ದೇನೆ, ಮಾರುಕಟ್ಟೆಯ ಬೆಲೆ ಏನು?' }
  ];

  const translateText = (text) => {
    // Placeholder for translation API call
    return `TRANSLATED: ${text}`;
  };

  const moderate = (text) => {
    // Placeholder for AI moderation
    return text.includes('कीड') ? '⚠️ Pest issue detected' : '✅ Safe';
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Farmer Discussion Forum</h1>
      <div className="space-y-4">
        {discussions.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{post.user}</h3>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-green-600 mt-2">{translateText(post.content)}</p>
            <p className="text-sm text-red-500">Moderation: {moderate(post.content)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
