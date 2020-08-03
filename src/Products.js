import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Nike from './components/Nike'
import Us from './components/Us'
import  Adidas from './components/Adidas'
import LeeCooper from './components/LeeCooper'
function Products() {
    return (
        <div>
        <Router>
            <nav className="flex3"> 
            <p>Products</p>
                <Link to ='/nike'>Nike</Link>
                <Link to ='/us'>Us</Link>
                <Link to ='adidas'>Adidas</Link>
                <Link to ='/leecooper'>LeeCooper</Link>
                <p>Please select a product :</p>
            </nav>
            <Switch>
                <Route path ="/nike" component={Nike}/>
                <Route path ="/us" component={Us}/>
                <Route path ="/adidas" component={Adidas}/>
                <Route path ="/leeCooper" component={LeeCooper}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Products
