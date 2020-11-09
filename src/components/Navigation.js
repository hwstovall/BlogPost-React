import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
 
import * as ROUTES from './routes';
 
const Navigation = () => (
  <div className="navbar mb-4">
      <ul className="d-flex justify-content-start link">
        <li>
          <Link className="link mr-2 active" to={ROUTES.HOME}>Home</Link>
        </li>  
        <li>
          <Link className="link ml-4" to={ROUTES.BLOG}>Blog</Link>
        </li>
      </ul> 
      <ul className="d-flex justify-content-end link mr-4">
        <li>
            <Link className="link mr-4" to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
        <li> 
          <Link className="link mr-4" to={ROUTES.SIGN_IN}>Login</Link>
        </li>
      </ul>
  </div>
);
 
export default Navigation;