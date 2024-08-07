import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');
const loadingIndicator = document.querySelector('.loading');

let currentPage = 1;
let currentQuery = '';
const perPage = 15;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    currentQuery = e.target.elements.query.value.trim();
    currentPage = 1;
    gallery.innerHTML = '';
    loadMoreButton.classList.add('hidden');
    if (currentQuery === '') {iziToast.error({ position: 'topRight', messageColor:  'white', backgroundColor: 'red', title: 'Error', message: 'Search field cannot be empty!',
});
return;
}

    await handleFetchImages();
});

loadMoreButton.addEventListener('click', handleFetchImages);

async function handleFetchImages() {
    try {
        loadingIndicator.classList.remove('hidden');
        const data = await fetchImages(currentQuery, currentPage, perPage);

        if (data.hits.length === 0 && currentPage === 1) {
            iziToast.warning({position: 'topRight', messageColor:  'white', backgroundColor: 'Maroon',
                title: 'Warning',
                message: 'No images found. Please try another query.',
              });
            return;
        }

        renderImages(data.hits, gallery);
        currentPage += 1;

        if (currentPage > Math.ceil(data.totalHits / perPage)) {
            loadMoreButton.classList.add('hidden');
            iziToast.info({position: 'topRight', messageColor:  'white', backgroundColor: `Cyan`,
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
              });
            
        } else {
            loadMoreButton.classList.remove('hidden');
        }


        smoothScroll();
    } catch (error) {
        if (!error.response) {
                iziToast.error({position: 'topRight', messageColor:  'white', backgroundColor: 'Salmon',
                title: 'Error',
                message: 'NETWORK error. Please check your internet connection and try again.',
                });
            } else {
                iziToast.error({position: 'topRight', messageColor:  'white', backgroundColor: 'Salmon',
                title: 'Error',
                message: 'An error occurred. Please try again.',
            });
        }
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

function smoothScroll() {
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

