const moment = require('moment');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    // use moment.js to convert this date format 2024-09-05 19:06:48.84+10 to 09/05/2024
    return moment(date).format('DD/MM/YYYY');
  },

  parse_date: (date) => {
  // use moment.js to convert this date format 13/05/2024 to 2024-05-13 19:06:48.84+10
  return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  },

  times: (n, block) => {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};
