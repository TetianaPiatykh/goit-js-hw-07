import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
     />
    </a>
    </div>
        `;
    }).join('');
}
const onGalleryItemClick = (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

   instance.show()
 }


galleryContainer.addEventListener('click', onGalleryItemClick)