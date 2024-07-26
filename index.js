const bigImg = document.getElementById('big');

//HTMLCollection
const smallImgs = document.getElementsByClassName('small');

//перебираємо колекцію  forof
// for (const element of HTMLCollection) {
//   element
// }

for (const smallImg of smallImgs) {
  smallImg.addEventListener('click', () => {
    bigImg.src = smallImg.src;
  });
}
