const h2Block = document.querySelector('#block > h2');
//console.dir(h2Block);
h2Block.style.color = 'white';

//console.dir(document.getElementsByClassName('btn'));

const btnsBlock = document.querySelectorAll('#block > .btn');

btnsBlock.forEach((element) => {
  element.style.backgroundColor = 'yellow';
});
for (const element of btnsBlock) {
  element.style.fontSize = '16px';
}

/*
querySelectorAll зібрати усі li і додати на них клік і по кліку змінювати текст всередині li на 'WoW'
*/

const lis = document.querySelectorAll('#block>ol>li');
console.dir(lis);
lis.forEach(li => {
  li.addEventListener('click', ()=>{
    li.textContent = 'WoW';
  })
});

/*
першому пункту списку зробити фон рожевим pink
останньому пункту списку зробити фон рожевим pink
 */


document.querySelector('#block > ol > li:first-child').style.backgroundColor = 'pink';


document.querySelector('#block > ol > li:last-child').style.backgroundColor = 'pink';