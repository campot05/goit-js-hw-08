// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createItemGallery(galleryItems));

galleryEl.addEventListener('click', onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
}

function createItemGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
		  <img
			 class="gallery__image"
			 src="${preview}"
			 data-source="${original}"
			 alt="${description}"
		  />
		</a>
	 </div>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  /* options */
});
