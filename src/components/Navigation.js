import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
 
import * as ROUTES from './routes';
import {useAuth} from '../contexts/AuthContext';
 
const Navigation = () => {
  const {currentUser, logout} = useAuth();
  console.log("current user in navigation", currentUser)
  return (

  <div className="navbar mb-4">
      <ul className="d-flex justify-content-start link">
        <li>
          <Link className="link mr-2 active" to={ROUTES.HOME}>Home</Link>
        </li>  
        <li>
          <Link className="link ml-4" to={ROUTES.BLOG}>Blog</Link>
        </li>
        <li>
          <Link className="link ml-4" to={ROUTES.CREATE_BLOG}>CreateBlog</Link>
        </li>
      </ul> 
      <ul>
          { currentUser ?  
          <li> 
            <Link className="link mr-4" onClick={logout}>LogOut</Link>
          </li> :
            <div className="d-flex justify-content-end link mr-4">
                <li>
                    <Link className="link mr-4" to={ROUTES.SIGN_UP}>SignUp</Link>
                  </li>
                  <li> 
                    <Link className="link mr-4" to={ROUTES.SIGN_IN}>Login</Link>
                  </li>
              </div>    
        }
      </ul>
  </div>
);
 }
export default Navigation;