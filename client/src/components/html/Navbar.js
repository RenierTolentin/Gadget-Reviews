import '../css/Navbar.css';
import {Link} from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return ( 
        <nav>
            <ul>
                <li><a href="/">GADGET'S DATA</a></li>
                <li><Link to="./LogIn" onClick={handleClick} className={click ? 'sign-in-hide' : 'sign-in-show'}>Sign-In</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;