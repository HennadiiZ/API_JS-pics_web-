
// https://www.pexels.com
// https://www.pexels.com/ru-ru/api/new/
//API key: 563492ad6f917000010000015b13eef540a24bde9cb605b7aa59d050 


const auth = "563492ad6f917000010000015b13eef540a24bde9cb605b7aa59d050";
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const submitButton = document.querySelector('.submit-btn');
let searchValue;

// curl -H "Authorization: 563492ad6f917000010000015b13eef540a24bde9cb605b7aa59d050" \
// "https://api.pexels.com/v1/curated?per_page=1"
// "https://api.pexels.com/v1/curated?per_page=15&page=1"

async function curatedPhotos(){

    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=15&page=1", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth
      }
    });

    const data = await dataFetch.json();
    //console.log(data); // {page: 1, per_page: 15, photos: Array(15), total_results: 8000, next_page: 'https://api.pexels.com/v1/curated/?page=2&per_page=15'}
    //console.log(data.photos);
    data.photos.forEach(photo=>{
      const galleryImg = document.createElement('div');
      galleryImg.classList.add('gallery-img');
      galleryImg.innerHTML = `
      <img src=${photo.src.large}></img>
      <p>${photo.photographer}</p>
      `;
      gallery.append(galleryImg);
    })
}
curatedPhotos();