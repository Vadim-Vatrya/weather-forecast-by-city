import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Container from './components/Container';
import WeatherBoard from './components/WeatherBoard';
import SearchBar from './components/SearchBar';

// import './scss/_main.scss';

function App() {
  const [query, setQuery] = useState('');
  const handleSubmite = newSearch => {
    setQuery(newSearch);
  };

  return (
    <>
      <Container>
        <SearchBar onHandleSubmit={handleSubmite} />
        <WeatherBoard name={query} />
        <ToastContainer autoClose={3700} position="bottom-center" />
      </Container>
    </>
  );
}

export default App;
