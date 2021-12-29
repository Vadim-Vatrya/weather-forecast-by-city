import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import styles from './LoaderComponent.module.scss';

const LoaderComponent = () => {
  return (
    <>
      <div className={styles.LoaderSpinner}>
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    </>
  );
};

export default LoaderComponent;
