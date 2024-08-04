import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images, gallery) {
    const markup = images.map(image => `
        <div class="photo-card">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${image.likes}</p>
                <p class="info-item"><b>Views</b> ${image.views}</p>
                <p class="info-item"><b>Comments</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
            </div>
        </div>
    `).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();
}