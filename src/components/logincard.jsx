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

    <div className="min-h-50 flex items-center justify-center">  
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full mx-4 border-2 border-white/20 shadow-lg "> 
      <h2>Welcome</h2>
      <form action="">
        {/* Form */}
        {/* enter email */}
          <div>
            <label className="">email</label>
            <input 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className=''
            placeholder="Enter your email" 
            />
          </div>
        {/* enter password */}
        <div>
          <label className="">password</label>
          <div>
          <input 
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=""
          placeholder="Enter your password" 
          />
          <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className=""
          >{showPassword ? '👁️' : '👁️🗨️'}
          </button>
          </div>
        </div>
          <div className=''>
            <button className=''>
              <div className=''>
                <span className=''></span>
              </div>
              <span className=''></span>
            </button>
          </div>
      </form>
    </div>
    </div>
  )
}
