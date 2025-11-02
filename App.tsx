
import React from 'react';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
}

// Mock data for users
const users: User[] = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=jane.doe@example.com',
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=john.smith@example.com',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=alice.j@example.com',
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=bob.brown@example.com',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    email: 'charlie.d@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=charlie.d@example.com',
  },
  {
    id: 6,
    name: 'Diana Miller',
    email: 'diana.m@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=diana.m@example.com',
  },
  {
    id: 7,
    name: 'Ethan Wilson',
    email: 'ethan.w@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=ethan.w@example.com',
  },
  {
    id: 8,
    name: 'Fiona Garcia',
    email: 'fiona.g@example.com',
    imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=fiona.g@example.com',
  },
];

// UserCard component
const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50">
      <img
        src={user.imageUrl}
        alt={`Profile picture of ${user.name}`}
        className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700 object-cover"
        aria-hidden="true"
      />
      <h2 className="text-xl font-bold text-white" aria-label={`User name: ${user.name}`}>{user.name}</h2>
      <p className="text-gray-400" aria-label={`User email: ${user.email}`}>{user.email}</p>
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-900 text-white font-sans p-4 sm:p-8" role="main">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            User Directory
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Meet our amazing team.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto" role="list">
        {users.map(user => (
          <div key={user.id} role="listitem">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
