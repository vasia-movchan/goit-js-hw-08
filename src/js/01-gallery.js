// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGaleryItemMarkup = (preview, original, description) =>
  `<a class="gallery__item" style="display: contents;" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const galeryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc + createGaleryItemMarkup(preview, original, description),
  ''
);

gallery.insertAdjacentHTML('beforeend', galeryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Change code below this line

console.log(galleryItems);
