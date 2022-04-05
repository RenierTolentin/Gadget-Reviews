import { useState } from 'react';
import '../css/Registration.css'
const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function LogIn (event) {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/LogIn', {
            method: `POST`,
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })

        const data = await response.json();

        if(data.user){
            localStorage.setItem('token', data.user )
            alert("Login Sucessful");
            window.location.href = '/Dashboard';
        }else {
            alert("Login unsucessfull")
            window.location.href = '/LogIn';
        }
        console.log(data);
    }

    return ( 
        <div className="registration-group">
            <form onSubmit={LogIn}>
                <div className="registration-first-group">
                    <img className='adjust' src="/SVG/log-in.svg" alt="register" />
                </div>
                <div className="registration-second-group">
                <label>E-mail</label>
                    <input type="text" placeholder='pentagonygh.1996@gmail.com' onChange={(event) => {setEmail(event.target.value)}}/>

                    <label>Password</label>
                    <input type="password" placeholder='Your Password' onChange={(event) => {setPassword(event.target.value)}}/>
                
                    <button>Register</button>
                </div>
            </form>
        </div> 
    );
}
 
export default Registration;