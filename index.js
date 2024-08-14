const buttons = document.querySelectorAll('button');

// classList
// mouseenter      mouseover
// mouseleave      mouseout

for (const btn of buttons) {
  // console.dir(btn.classList);
  btn.classList.add('btn');
  btn.addEventListener('mouseover', () => {
    btn.classList.add('active');
  });
  btn.addEventListener('mouseout', () => {
    btn.classList.remove('active');
  });
  btn.addEventListener('click', () => {
    btn.classList.toggle('shadow');
  });
}
