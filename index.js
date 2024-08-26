const root = document.getElementById('root');

const btnSubscribe = document.createElement('button');
btnSubscribe.textContent = 'Subscribe now!';
root.append(btnSubscribe);

// відтермінований запуск
// setTimeout(функція, часВМіліСекундах)

const idTimeout = setTimeout(
  () => {
  const removeSubscribe = () => {
    document.querySelector('.subscribe').remove();
  };
  const subscribe = document.createElement('div');
  subscribe.classList.add('subscribe');
  const close = document.createElement('span');
  close.textContent = 'X';
  close.addEventListener('click', removeSubscribe);
  const h2 = document.createElement('h2');
  h2.textContent = 'Subscribe to our email newsletter';
  const form = document.createElement('form');
  form.className = 'subscribe-form';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'Subscribe';
  button.addEventListener('click', removeSubscribe);
  subscribe.append(close, h2, form);
  form.append(input, button);
  root.append(subscribe);
}, 5000);

btnSubscribe.addEventListener('click', ()=>{
  clearTimeout(idTimeout)
})

// викликає код з певним інтервалом
// setInterval
