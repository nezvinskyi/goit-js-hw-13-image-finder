export default function getRefs() {
  return {
    searchForm: document.getElementById('search-form'),
    gallery: document.querySelector('.gallery'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    sentinel: document.getElementById('sentinel'),
    searchWrapper: document.querySelector('.search-wrapper'),
    logoContainer: document.querySelector('.logo-container'),
  };
}
