import axios from 'axios';

const API_KEY = '45147494-75a7f96365cbfb286af0bc26b';
const BASE_URL = 'https://pixabay.com/api/?';

export async function fetchImages(query, page, perPage = 15) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,
                per_page: perPage,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}