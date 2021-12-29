import { useState, useEffect, useRef } from 'react';
import { Month, Weekday, Day } from '../../helpers/date';
import clock from '../../images/clock.png';
import styles from './DateTime.module.scss';

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => tick(), 1000);

    return () => {
      stop();
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }));
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src={clock}
        alt="time icon"
        width="38"
        height="38"
      />
      <div className={styles.wrapper}>
        <p className={styles.time}>{time}</p>
        <p className={styles.date}>
          {Weekday}, {Month} {Day}
        </p>
      </div>
    </div>
  );
}

export default Clock;
