
import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Shoes from './components/Shoes'
import Boots from './components/Boots'
import Footwear from './components/Footwear'

function Category() {
    return (
        <div>
        <Router>
        <nav className="flex3"> 
     
            <Link to ='/shoes'>Shoes</Link>
            <Link to ='/boots'>Boots</Link>
            <Link to ='/footwear'>Footwear</Link>
            </nav> 
        <Switch>
            <Route path ="/shoes" component={Shoes}/>
            <Route path ="/boots" component={Boots}/>
            <Route path ="/footwear" component={Footwear}/> 
        </Switch>
        </Router> 
        </div>
    )
}

export default Category
