import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
    </a>
    </li>
        `;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

galleryContainer.addEventListener('click', lightbox)

