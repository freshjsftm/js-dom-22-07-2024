const wrapper = document.getElementById('wrapper');
const block = document.getElementById('block');
// console.dir(block);
// wrapper.addEventListener('mousemove', (event)=>{
//   block.style.left = event.clientX + 'px';
//   block.style.top = event.clientY + 'px';
// })

let x = 0;
let y = 0;
const step = 5;

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    x-=step;
  }
  if (event.key === 'ArrowRight') {
    x+=step;
  }
  if (event.key === 'ArrowUp') {
    y-=step;
  }
  if (event.key === 'ArrowDown') {
    y+=step;
  }
  block.style.left = x + 'px';
  block.style.top = y + 'px';
});
