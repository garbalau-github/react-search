import React, { useState, useEffect } from 'react';

import Spinner from './Spinner/Spinner';
import SearchBar from '../components/SearchBar/SearchBar';

const App = () => {
    
    const [productsState, setProductsState] = useState([])

    const hasProducts = productsState.length > 0;

    useEffect (() => {

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(productsArray => {
            const newProductsState = productsArray.map((product) => {
                return product.title;
            })
            setProductsState(newProductsState)
        })

    }, [])

    return (
        <div>
            <div>
                {
                   hasProducts ? <SearchBar products={productsState}/> : <Spinner />
                }
            </div>
        </div>
    )
}

export default App;