import { galleryItems } from './gallery-items.js';
const container = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
// Change code below this line
console.log(galleryItems);

