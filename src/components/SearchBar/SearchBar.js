import React, { useState, useEffect } from "react";

import './SearchBar.css';

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => setSearchValue(e.target.value);

    const clearInput = () => {
        if (!searchValue) {
            alert('Please, type something!')
        } else {
            setSearchValue('🧠bye🧠bye🧠');
            setTimeout(() => {
                setSearchValue('');
            }, 250)
        }
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        console.log(product);
        return product.toLowerCase().split('').reverse().join()
                        .includes(searchValue.split('').reverse().join())
    })

    return (
        <div className='search-bar'>
            <input style={{  marginTop: '20px'  }} type='text' value={ searchValue } onChange={ handleInputChange }/>
            {
                shouldDisplayButton && <button onClick={ clearInput } className='search-clear-btn'>Clear</button>
            }
            <div style={{  marginTop: '20px'  }}>
                { 
                    filteredProducts.map((product, index) => (
                        <li key={ index }>
                            { product }
                        </li>
                    )) 
                }
            </div>
        </div>
    )
}

export default SearchBar;