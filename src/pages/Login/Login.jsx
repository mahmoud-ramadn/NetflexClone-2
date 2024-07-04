import './Login.css';
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { signup, login } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif"

const Login = () => {
  const [sign, setSign] = useState('Sign In');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (sign === 'Sign In') {
      await login(email, password);
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  };

  return (
    
      loading?<div className = "loading-Spinner">
      
    <img  src={netflix_spinner} alt="loading" />
      </div >:
    <div className='login'>
      <img src={logo} className='login-logo' alt="netflix" />
      <div className='login-form'>
        <h1>{sign}</h1>
        <form>
          {sign === "Sign Up" && (
            <input
              type="text"
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            value={email}
            type="email"
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={user_auth} type="submit">{sign}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === 'Sign In' ? (
            <p>New to Netflix?<span onClick={() => setSign('Sign Up')}> Sign Up Now</span></p>
          ) : (
            <p>Already have an account?<span onClick={() => setSign('Sign In')}> Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
