export const months = [
  {
    id: 0, value: 'January'
  },
  {
    id: 1, value: 'February'
  },
  {
    id: 2, value: 'March'
  },
  {
    id: 3, value: 'April'
  },
  {
    id: 4, value: 'May'
  },
  {
    id: 5, value: 'June'
  },
  {
    id: 6, value: 'July'
  },
  {
    id: 7, value: 'August'
  },
  {
    id: 8, value: 'September'
  },
  {
    id: 9, value: 'October'
  },
  {
    id: 10, value: 'November'
  },
  {
    id: 11, value: 'December'
  },
];

export let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const leapDate = year => {
  if (year % 4 === 0) {
    ListofDays[1] = 29;
    return ListofDays;
  }
  ListofDays[1] = 28;
  return ListofDays;
};

let startYear = 1900;
export const endYear = new Date().getFullYear();

export const years = [];

while (startYear <= endYear) {
  years.push(startYear);
  startYear++;
}