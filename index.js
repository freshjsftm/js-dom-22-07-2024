const root = document.getElementById('root');

function loadImage(path, alt) {
  const image = document.createElement('img');
  image.src = path;
  return new Promise((resolve, reject) => {
    image.addEventListener('load', () => {
      image.alt = alt;
      resolve(image);
    });
    image.addEventListener('error', () => {
      reject(new Error('invalid path'));
    });
  });
}

const path =
  'https://sb.ecobnb.net/app/uploads/sites/3/2021/09/Progetto-senza-titolo-3.jpg';
const alt = 'sea';
loadImage(path, alt)
  .then((pic) => root.append(pic))
  .catch((err) => root.append(err.message));
