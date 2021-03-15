import settings from './settings/index';

const { BASE_URL, API_KEY, PER_PAGE } = settings;

export default class ImagesApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  async fetchImages() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&per_page=${PER_PAGE}&orientation=horizontal&page=${this.page}`;
    const response = await fetch(url);
    const { hits } = await response.json();
    this.incrementPage();
    return hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
