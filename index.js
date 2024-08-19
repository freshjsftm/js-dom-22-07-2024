const wrapper = document.getElementById('wrapper');
const btn = document.getElementById('btn');
wrapper.addEventListener('click', (event) => {
  console.log('click wrapper')
  // console.group();
  // console.log(event);
  // console.log(event.target); // елемент по якому клікнули
  // console.log(event.currentTarget); //елемент чия функція виконується
  // console.log(event.clientX, event.clientY);
  // console.log(event.offsetX, event.offsetY);
  // console.groupEnd();
});
// wrapper.click() // сгенерували штучно клік (подію)
btn.addEventListener('click', ()=>{
  console.log('click btn')
})