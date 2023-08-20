import './App.css';
import ThemeProvider from './contexts/themeContext';
import DevFinderApp from './components/DevFinderApp';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Loading from './components/Loading';
import Error from './components/Error';
import UserProfile from './components/UserProfile';
import axios from 'axios';

import { useState } from 'react';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  // (no need for useEffect() here because the side effect is handled by the event)
  const onSearchUser = async user => {
    try {
      if (user) setUser(''); // default: display only search bar, no profile
      setLoading(true);
      const resUser = await axios.get(`${BASE_URL}${user}`);
      if (!resUser.status === 200) {
        throw new Error('error...');
      }

      setUser(resUser.data);
      console.log(resUser.status); // 200
    } catch (error) {
      console.log(error.message); // Network Error
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ThemeProvider>
        <DevFinderApp>
          <Header />
          <SearchForm
            user={user}
            onSearchUser={onSearchUser}
          />
          {loading && <Loading />}
          {!loading && !error && user && <UserProfile user={user} />}
          {error && <Error message={error} />}
        </DevFinderApp>
      </ThemeProvider>
    </>
  );
}

export default App;
