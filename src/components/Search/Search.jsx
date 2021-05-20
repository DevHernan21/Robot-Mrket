import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Badge } from '@material-ui/core';

const Search = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <div>
        <input
          type="text"
        ></input>
        <IconButton arial-label='Search a Robot' color='items' type='submit'>
            <Badge  color='secondary'>
                <SearchIcon />
            </Badge>
        </IconButton>        
      </div>
    </form>
  );
}

export default Search;