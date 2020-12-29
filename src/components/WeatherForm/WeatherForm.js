import React from 'react';

export const WeatherForm = () => (
  <form role='search' action="/" method="get">
    <label htmlFor='header-search'>
      <span className='visually-hidden'>Search</span>
    </label>

    <input type='text' id='header-search'/>

    <button type='submit'>
      <span className='visually-hidden'>Submit Search</span>
    </button>
  </form>
);
