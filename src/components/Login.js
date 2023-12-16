import '../styles/Login.css'
import { Button, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {validateEmail,validatePassword} from '../utils/Validation'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {  addUser } from '../Store/userSlice';
import { Link } from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        let user = localStorage.getItem('user');
        if(user){
            dispatch(addUser(user));
            navigate("/");
            
        }
    },[])


    const loginDetails = (email,password) => {
        const payload = {
            "email": email,
            "password": password,
        }
        fetch("http://localhost:3001/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if(data && data.user && data.token){
                localStorage.setItem('user',JSON.stringify(data.user));
                localStorage.setItem('token',data.token);
                dispatch(addUser(JSON.stringify(data.user)));
                navigate("/");
              }else if(data.message){
                setError(data.message);
                
              }

            }).catch(error => {
                console.error('Fetch error:', error);
            });
    
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();

        const { email, password } = formData;
    
      
        if (!email.trim() || !validateEmail(email)) {
          setError('Please enter a valid email address');
          return;
        }
    
        if (!password.trim() || !validatePassword(password)) {
          setError('Password must be at least 7 characters long');
          return;
        }
    
        setError('');
        //make a api call 
        loginDetails(email,password);
    
    };


    return (
        <div className="Login_container">
        <div className="login_body">
            {error && <Alert variant="danger">{error}</Alert>}
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password" 
                value={formData.password} 
                onChange={handleInputChange}
              />
            </div>
            <div className='create_new_account'>
            <Link style={{ textDecoration: 'none', color: 'rgb(0, 170, 255)' }} to="/signup">New user ? Create a new Account</Link>
            </div>
           
            <Button
              className="submit_Btn"
              variant="outline-success"
              type="submit"
              onClick={submitLogin}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
}

export default Login;