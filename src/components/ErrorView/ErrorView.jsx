import PropTypes from 'prop-types';
import errorImage from '../../images/404.png';
import styles from './ErrorView.module.scss';

const ErrorView = ({ texterror }) => {
  return (
    <>
      <div role="alert" className={styles.wrapper}>
        <img src={errorImage} width="550" alt="error" />
        <p text={texterror} className={styles.text}>
          {texterror}
        </p>
      </div>
    </>
  );
};

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;
