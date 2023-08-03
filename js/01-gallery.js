import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerImgClick)
function handlerImgClick(evt) {
    
    if (evt.target === evt.currentTarget) {
        return
    }
    
    evt.preventDefault();
    const instance = basicLightbox.create(`<img width="1400" height="900" src="${evt.target.dataset.source}">
`, {
	onShow: (instance) => {document.addEventListener('keydown', closeModal)},
	
	onClose: (instance) => {document.removeEventListener('keydown', closeModal)}
})
    instance.show();
    function closeModal(evt) {
        if (evt.code !== 'Escape') {
        return
        }
        instance.close();
}        
    
}
