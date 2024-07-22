console.dir(document);
const h1 = document.getElementById('main-title');
h1.className = 'heading';
h1.textContent = 'hi from javascript!';
h1.title = 'title for main title';
console.dir(h1);
const word = 'image';
const img = document.getElementById(word);
console.dir(img);
console.log(img);
img.src =
  'https://www.earth.com/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2023%2F06%2F16080040%2Fsea-turtle_3medium-960x640.jpg&w=3840&q=75';
img.alt = 'turtle';
img.width = 400;
img.height = 400;
img.style.objectFit = 'cover';

// забрати кнопку
// для кнопки зробити розмір - 200px х 70px
// замінити текст на click me, please
const btn = document.getElementById('btn');
console.dir(btn);
btn.style.height = '70px';
btn.style.width = '200px';
btn.textContent += ', please';
