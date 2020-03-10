import moment from 'moment';

function getDate(format) {
  return (date) => moment(new Date(date)).format(format); // `MMMM DD, YYYY`
}

export default getDate;
