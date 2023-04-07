import './App.css';
import ThemeProvider from './contexts/themeContext';
import DevFinderApp from './components/DevFinderApp';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Loading from './components/Loading';
import UserProfile from './components/UserProfile';
import axios from 'axios';

import { useState } from 'react';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  // (no need for useEffect() here because it's handled by the event)
  const onSearchUser = async user => {
    if (user) setUser('');
    setloading(true);
    const resUser = await axios.get(`${BASE_URL}${user}`);
    setloading(false);
    setUser(resUser.data);
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
          {user && <UserProfile user={user} />}
        </DevFinderApp>
      </ThemeProvider>
    </>
  );
}

export default App;
