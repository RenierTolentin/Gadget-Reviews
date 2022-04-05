import '../css/Dashboard.css';
import jwt from "jsonwebtoken";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/Dashboard/RecentBlogs')
            .then((response)=>{
                setRecentBlogs(response.data)
            })
    }, []);
        
    async function showDetails () {
        const req = await fetch('http://localhost:3001/Dashboard', {
            headers: {
                'x-access-token': localStorage.getItem('token'), 
            },
        })
        const data = await req.json()
        if(data.status === 'ok'){
            setUsername(data.username);
        }else{
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');   
        if(token){
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem('token');
                navigate('/LogIn');
            }else{
                showDetails();
            }
        }
    }, [navigate]);

    return ( 
        <div className="dashboard-group">
            <form action="">
                <div className='first-dashboard-group'>
                    <h3>Hello <span>{username}</span></h3>
                </div>

                <div className='second-dashboard-group'>
                    <h1>Recently updated blogs</h1>
                    {recentBlogs.map((recentBlog) => {
                        return  <div key={recentBlog._id } className='child'>
                                    <Link to="#" /*to={`${path + recentBlog._id}`}*/>
                                            <h3>{recentBlog.title}</h3>
                                            <p>{recentBlog.snippet}</p>
                                            <img src={`/uploadedImages/${recentBlog.phoneImage}`} alt="..." />
                                    </Link>
                                </div>  
                    })}
                </div>

                <div className='third-dashboard-group'>
                    <Link to="#">Register</Link>
                </div>
            </form>
        </div>
    );
}
 
export default Dashboard;