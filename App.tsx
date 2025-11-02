
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white font-sans">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Hello World
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Welcome to your first React & Tailwind CSS application.
        </p>
      </div>
    </main>
  );
};

export default App;
