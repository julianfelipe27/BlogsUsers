import React  from  'react'
import  { Route, Link, Switch, BrowserRouter as Router } from  'react-router-dom'
import   Home  from '../components/Home/Home'
import  Users  from '../components/User/Users'
import  UserInfo from '../components/User/UserInfo'
import  UserInfo2 from '../components/User/Userinfo2'
import NotFound from  '../components/NotFound'
import Posts from './../components/Posts/List'

const routing = (
    <Router>
    <nav className='navbar navbar-expand-lg navbar-light bg-primary' >
    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav m-auto '>
            <li className='nav-item mr-3 text-dark'>
                <Link to="/" className='text-light'>Home</Link>
            </li >
            <li className='nav-item text-dark'>
                <Link to="/users" className='text-light'>Users</Link>
            </li>
        </ul>
        </div>
    </nav>
    <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/userapi/:id/:name" component={UserInfo2} />
        <Route path="/user/:id/:name" component={UserInfo} />
        <Route path="/user/:id" component={UserInfo} />
        <Route path="/users" component={Users} />
        <Route path='/posts' component={Posts}></Route>
        <Route component={NotFound} />
    </Switch>
    </Router>
)

export default routing 