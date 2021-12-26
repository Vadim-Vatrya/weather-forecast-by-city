import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onHadleSubmit }) => {
  const [query, setQuery] = useState('');
};

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
