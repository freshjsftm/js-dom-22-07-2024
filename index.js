// Promise

// new Promise(executor)
// executor - function

const myPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve('All good! random = '+ random);
  } else {
    reject('Error! random = '+ random);
  }
});

myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
