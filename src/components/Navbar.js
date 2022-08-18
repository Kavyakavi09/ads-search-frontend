import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getAdsBySearch } from '../actions/product';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (search.trim()) {
      dispatch(getAdsBySearch(search));
      navigate(`/ads/search?searchQuery=${search || 'none'}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container px-4 px-lg-5'>
        <Link className='navbar-brand' to={'/'}>
          Ads Corner
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form
            className='mx-auto'
            onSubmit={(event) => {
              event.preventDefault();
            }}>
            <div className='input-group'>
              <button className='btn btn-warning searchBtn' type='submit'>
                <i
                  className='fa fa-search fa-lg'
                  aria-hidden='true'
                  onClick={handleSubmit}></i>
              </button>
              <input
                type={'search'}
                list={'search'}
                id={'searchBrand'}
                name={'searchBrand'}
                className='form-control fw-bold searchBox'
                placeholder='Search Your brand or company'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <datalist id='search'>
                <option value='Levis' />
                <option value='Salesforce' />
                <option value='Cotopaxi' />
                <option value='Netflix' />
                <option value='Valentino' />
                <option value='Curology' />
                <option value='Purple' />
              </datalist>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
