import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (query.trim === '') {
      return toast.info('😱 Please enter a value for search city!');
    }

    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <>
      <header className={styles.input}>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input}
            autoComplete="off"
            autoFocus
            value={query}
            type="text"
            placeholder="Search city..."
            onChange={({ target }) => setQuery(target.value)}
          />
        </form>
        <button type="submit" className={styles.btn}>
          <span className={styles.label}>Search</span>
        </button>
      </header>
    </>
  );
};

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
