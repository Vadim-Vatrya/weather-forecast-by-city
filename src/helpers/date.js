import { Months, Weekdays } from './day-array';

// Data info
const date = new Date();
export const Month = Months[date.getMonth()];
export const Weekday = Weekdays[date.getDay()];
export const Day = date.getDate();
