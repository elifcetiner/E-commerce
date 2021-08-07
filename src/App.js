import React from 'react';
/* import Products from './components/Products/Products'; 
   import NavBar from '/.components/NavBar/NavBar'; 

Instead of importing all of them separately, we can combine them and write them as follows. */
import {Products , Navbar} from './components';

const App = () => {
    return (
        <div>
        <Navbar/>
        <Products/>         
        </div>
    )
}

export default App
