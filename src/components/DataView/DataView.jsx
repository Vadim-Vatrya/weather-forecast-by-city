import DateTime from '../DataTime';

import temperature from '../../images/temperature.png';
import wind from '../../images/wind.png';
import humidityIcon from '../../images/humidity.png';

import styles from './DataView.module.scss';

const DataView = ({
  weatherData: {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    description,
    icon,
    speed,
  },
}) => {
  return (
    <>
      <main className={styles.box}>
        <DateTime />
        <h1 className={styles.title}>
          Weather in {name}, {country}
        </h1>
        <div className={styles.wrapper}>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="Weather icon"
            // width="40"
            // height="40"
            className={styles.icon}
          />
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.wrapper}>
          <img
            src={temperature}
            alt="Thermometer"
            // width="40"
            // height="40"
            className={styles.icon}
          />
          <ul className={styles.description}>
            <li>
              <b>Feels like:</b> {feels_like} °С
            </li>
            <li>
              <b>Current:</b> {temp} °С
            </li>
            <li>
              <b>High:</b> {temp_max} °С
            </li>
            <li>
              <b>Low:</b> {temp_min} °С
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <img
            src={wind}
            alt="Wind Speed"
            // width="40"
            // height="40"
            className={styles.icon}
          />
          <p className={styles.description}>
            <b>Wind Speed:</b> {speed} м/с
          </p>
        </div>
        <div className={styles.wrapper}>
          <img
            src={humidityIcon}
            alt="Humidity"
            // width="40"
            // height="40"
            className={styles.icon}
          />
          <p className={styles.description}>
            <b>Humidity:</b> {humidity} %
          </p>
        </div>
      </main>
    </>
  );
};

export default DataView;
