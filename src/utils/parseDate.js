// Utility to parse the date
const addLeadingZero = number => {
  const needsZero = number < 10;
  return needsZero ? `0${number}` : number;
};

const toAmPm = (hour, isPm) => {
  const newHour = isPm && hour > 12 ? hour - 12 : hour;
  return newHour;
};

export const parseDate = date => {
  const day = date.getDate();
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = date.getHours();
  const isPm = hour > 11 && hour < 24;
  const convertedHour = addLeadingZero(toAmPm(hour, isPm));
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const amPm = isPm ? 'PM' : 'AM';
  const parsedDate = `${year}-${month}-${day} at ${convertedHour}.${minutes}.${seconds} ${amPm}`;

  return parsedDate;
};
