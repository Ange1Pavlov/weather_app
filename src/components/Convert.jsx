import { format } from 'date-fns';

export const capitalizeText = (text) => text[0].toUpperCase() + text.slice(1);

export const convertDegrees = (kelvin) => {
  const degree = kelvin - 273.15;
  return degree.toFixed(1);
};

export const convertDistance = (meters) => {
  const kilometers = meters / 1000;
  return kilometers.toFixed(1);
};

export const convertTime = (time, newFormat) => format(time, newFormat);
