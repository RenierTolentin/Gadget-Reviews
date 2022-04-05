import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Registration.css'

const Registration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser (event) {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/registerUser', {
            method: `POST`,
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name: name,   
                birthdate: birthdate,
                phoneNumber: phoneNumber,
                email: email,
                username: username,
                password: password,
            }),
        })

        const data = await response.json();
        
        if(data.status === 'ok'){
            navigate('/LogIn');
        }
    }

    return ( 
        <div className="registration-group">
            <form onSubmit={registerUser}>
                <div className="registration-first-group">
                    <img src="/SVG/register.svg" alt="register" />
                </div>
                <div className="registration-second-group">
                    <label>Author name</label>
                    <input type="text" placeholder='(Ex. Tolentin, Renier C.)' onChange={(event)=> {setName(event.target.value)}}/>
                    
                    <label>Birthdate</label>
                    <input type="date" placeholder='' onChange={(event) => {setBirthdate(event.target.value)}}/>
                    
                    <label>Phone number</label>
                    <input type="text" placeholder='(Ex. 09111111111)' onChange={(event) => {setPhoneNumber(event.target.value)}}/>

                    <label>E-mail</label>
                    <input type="text" placeholder='pentagonygh.1996@gmail.com' onChange={(event) => {setEmail(event.target.value)}}/>

                    <label>Username</label>
                    <input type="text" placeholder='Your Username' onChange={(event) => {setUsername(event.target.value)}}/>

                    <label>Password</label>
                    <input type="password" placeholder='Your Password' onChange={(event) => {setPassword(event.target.value)}}/>
                
                    <button>Register</button>
                </div>
            </form>
        </div> 
    );
}
 
export default Registration;