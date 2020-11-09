import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
 
import Navigation from './Navigation';
import Home from './Home';
import Blog from './Blog';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from './Footer'


import * as ROUTES from './routes';


function App() {
  return (
      <Router>
          <Navigation/>
          <Switch>
              <Route path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.BLOG} component={Blog} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} /> 
              <Route path={ROUTES.SIGN_IN} component={SignIn} />
                 
        </Switch>
        <Footer/>
      
      </Router>
  )
}

export default App;
