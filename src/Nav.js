import './App.css';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";


function Nav() {
const navStyle={
    color:"white"
}
const { id } = useParams();
console.log(id);
  return (
    <div>
        {/* <nav>
        <Link style={navStyle} to="/">
          <h3>Public Notes</h3>
        </Link>
            <ul className='nav-links'>
                <Link style={navStyle} to="/about">
                    <li>Notes</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>User</li>
                </Link>    
            </ul>
        </nav> */}
    </div>
  );
}

export default Nav;
