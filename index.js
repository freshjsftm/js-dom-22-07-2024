const root = document.getElementById('root');

// викликає код з певним інтервалом
// setInterval(function, timeInMs)

let count = 0;
const idInterval = setInterval(() => {
  console.log(count);
  count++;
  if (count > 10) {
    clearInterval(idInterval);
  }
}, 1000);

