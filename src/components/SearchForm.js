import '../styles/SearchForm.css';
import { BsSearch } from 'react-icons/bs';

// import { useContext } from 'react';
// import { ThemeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

import { useState, useRef, useEffect } from 'react';

const SearchForm = ({ onSearchUser, user }) => {
  const { theme } = useTheme();
  // console.log('theme from SEARCH FORM:', theme);

  const [input, setInput] = useState('');

  // useRef to set focus on input field when loading and re-rendering
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [user]);

  const handleChange = e => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input !== '') {
      onSearchUser(input);
      // console.log(input);
      setInput('');
    }
  };

  return (
    <form
      className={`search-form ${theme}`}
      onSubmit={handleSubmit}>
      <label
        className='input-label'
        htmlFor='search'>
        <BsSearch
          className='search-icon'
          aria-label='search Github username'
        />
      </label>

      <input
        className={`search-input ${theme}`}
        type='text'
        ref={inputRef}
        id='search'
        placeholder='Search Github username...'
        value={input}
        onChange={handleChange}
      />
      <button
        className='search-btn'
        type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
