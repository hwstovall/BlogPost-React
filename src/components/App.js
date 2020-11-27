import React from 'react';
import { HashRouter ,Route, Switch} from 'react-router-dom';
 
import Navigation from './Navigation';
import Home from './Home';
import Blog from './Blog';
import CreateBlog from './CreateBlog'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from './Footer'


import * as ROUTES from './routes';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
      <AuthProvider>
        <HashRouter>
            <Navigation/>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.BLOG} component={Blog} />
                <Route path={ROUTES.CREATE_BLOG} component={CreateBlog}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp} /> 
                <Route path={ROUTES.SIGN_IN} component={SignIn} />               
          </Switch>
            <Footer/> 
        </HashRouter>
      </AuthProvider>
  )
}

export default App;
