export default function LoginCard() {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Form submission handler (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    // Main container with glassmorphism styling
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full mx-4 border-2 border-white/20 shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500"
              >
                {showPassword ? '👁️' : '👁️🗨️'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </button>

          {/* Social Login */}
          <div className="flex items-center justify-center">
            <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 hover:border-white/30 transition-all">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">G</span>
              </div>
              <span className="text-white text-sm">Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
{/*
import {useState} from 'react';

export const Logincard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', {email, password});
  };
  return (
    <div className='flex items-center justify-center min-h-screen'>  
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-center mb-4'>Welcome</h2>
        <form onSubmit={handleSubmit}>
          
          <div className='mb-4'>
            <label className='block mb-2'>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              placeholder="Enter your email" 
            />
          </div>
          
          <div className='mb-4'>
            <label className='block mb-2'>Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              placeholder="Enter your password" 
            />
          </div>
          <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded'>Login</button>
        </form>
      </div>
    </div>
  )
}
*/}