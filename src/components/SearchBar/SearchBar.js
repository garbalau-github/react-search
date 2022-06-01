import React, { useState } from 'react';

import {
  SearchBarStyle,
  SearchBarInputStyle,
  SearchBarProductsStyle,
  SearchClearButtonStyle,
} from './SearchBar.style';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => setSearchValue(e.target.value);

  const clearInput = () => setSearchValue('');

  const shouldDisplayButton = searchValue.length > 0;

  const filteredProducts = props.products.filter((product) => {
    return product.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <SearchBarStyle>
      <p>Search for keywords</p>
      <>
        <SearchBarInputStyle
          type='text'
          value={searchValue}
          onChange={handleInputChange}
        />
        {shouldDisplayButton && (
          <SearchClearButtonStyle onClick={clearInput}>
            Clear
          </SearchClearButtonStyle>
        )}
      </>
      <SearchBarProductsStyle>
        {filteredProducts.map((product, idx) => (
          <li key={idx}> {product} </li>
        ))}
      </SearchBarProductsStyle>
    </SearchBarStyle>
  );
};

export default SearchBar;
