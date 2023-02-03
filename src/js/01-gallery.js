import { galleryItems } from './gallery-items.js';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems){
return galleryItems.map(({preview, original, description})=>{
return `<a class='gallery__link' href='${original}'>
<img class='gallery__image' src ='${preview}' alt ='${description}'>
</a>`;}).join('');
}

const gallery = new SimpleLightbox('.gallery a', {
captions: true,
captionsData: 'alt',
captionDelay: 250,
});