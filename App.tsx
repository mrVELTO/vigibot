import React from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
// import { resetChat as resetGeminiChat } from './services/geminiService'; // No longer directly used by UI interaction

const App: React.FC = () => {
  const [chatKey, setChatKey] = React.useState(0); // Kept in case a programmatic reset is needed later

  // const handleClearChat = () => {
  //   resetGeminiChat(); // Reset the Gemini chat session
  //   setChatKey(prevKey => prevKey + 1); // Increment key to re-mount ChatInterface
  // };

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <ChatInterface key={chatKey} />
    </div>
  );
};

export default App;