import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Home from './components/Home'
import Category from './Category'
import Products from './Products'
import AdminArea from './AdminArea'
import './Navbar.css';
function Assemble() {
    return (
        <div>
        <Router>
        <nav className="flex3"> 
        <Link to ='/Home' >Home</Link> 
            <Link to ='/category' >Category</Link>
            <Link to ='/products' >products</Link>
            <Link to ='/adminArea' >AdminArea</Link>
        </nav>
        <Switch>
        <Route path ="/category" component={Category}/>
        <Route path ="/products" component={Products}/>
        <Route path ="/home" component={Home}/>
        <Route path ="/adminarea" component={AdminArea}/>
        </Switch>
        </Router>
        </div>
    )
}

export default Assemble
