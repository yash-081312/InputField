import React, { useState } from 'react';
import { InputField } from './components/InputField';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UI Components Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A modern React component library with TypeScript and TailwindCSS
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Examples */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Basic Examples
            </h2>
            
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              errorMessage={emailError}
              invalid={!!emailError}
              helperText="We'll never share your email with anyone else"
              required
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle={true}
              helperText="Password must be at least 8 characters"
              required
            />

            <InputField
              label="Search"
              placeholder="Search for something..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              showClearButton={true}
            />
          </div>

          {/* Variants and States */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Variants & States
            </h2>

            <InputField
              label="Filled Variant"
              placeholder="Filled input example"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputField
              label="Ghost Variant"
              placeholder="Ghost input example"
              variant="ghost"
            />

            <InputField
              label="Loading State"
              placeholder="This field is loading..."
              loading={true}
              value="Loading..."
            />

            <InputField
              label="Disabled State"
              placeholder="This field is disabled"
              disabled={true}
              value="Disabled value"
            />
          </div>
        </div>

        {/* Size Examples */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Size Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Small Size"
              placeholder="Small input"
              size="sm"
            />
            <InputField
              label="Medium Size"
              placeholder="Medium input"
              size="md"
            />
            <InputField
              label="Large Size"
              placeholder="Large input"
              size="lg"
            />
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Interactive Demo
          </h2>
          <div className="space-y-4">
            <InputField
              label="Interactive Input"
              placeholder="Type something to see validation..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              showClearButton={true}
              helperText="This input validates as you type"
              errorMessage={username.length > 0 && username.length < 3 ? 'Username must be at least 3 characters' : ''}
              invalid={username.length > 0 && username.length < 3}
            />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Current value: "{username}"
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>Built with React, TypeScript, TailwindCSS, and Storybook</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
