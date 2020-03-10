import moment from 'moment';

const MS_IN_ONE_SEC = 1000;
const SECS_IN_ONE_MINUTE = 60;

function getDuration(format) {
  return (duration) => {
    const start = new Date();
    const end = new Date(start.getTime() + (duration * MS_IN_ONE_SEC * SECS_IN_ONE_MINUTE)); // playtime without SECS_IN_ONE_MINUTE
    const difference = moment(end).diff(moment(start));

    return moment.utc(difference).format(format); // `H[h] mm[m]` - film duration // `HH:mm:ss` - playtime
  };
}

export default getDuration;
