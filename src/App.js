import React, { useState, useEffect } from 'react';

import Spinner from './components/Spinner/Spinner';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
    
    const [productsState, setProductsState] = useState([])

    const hasProducts = productsState.length > 0;

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(productsArray => {
            const newProductsState = productsArray.map(product => product.title)
            setProductsState(newProductsState)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                hasProducts ? <SearchBar products={productsState}/> : <Spinner />
            }
        </div>
    )
}

export default App;