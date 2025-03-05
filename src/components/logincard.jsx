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

    <div className=''>  
    <div>
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
          input 
        </div>
      </form>
    </div>
    </div>
  )
}
