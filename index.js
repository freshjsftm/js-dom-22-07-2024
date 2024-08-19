const wrapper = document.getElementById('wrapper');
const btn = document.getElementById('btn');

wrapper.addEventListener('click', (event) => {
  console.log('click wrapper');
  event.target.style.color = 'red';
});

btn.addEventListener('click', (event) => {
  event.stopPropagation(); // виконує лише поточну функцію
  console.log('click btn');
});
