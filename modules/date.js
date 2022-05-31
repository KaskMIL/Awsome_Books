import { DateTime } from './luxon.js';

const displayHour = (clock) => {
  setInterval(() => {
    const now = DateTime.now();
    const day = now.toLocaleString({
      month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
    clock.innerText = day;
  }, 1000);
};

export default displayHour;