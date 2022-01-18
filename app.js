const APi_key = "563492ad6f9170000100000157130e94bd754d4b81beca8d4421471f"; //pexels api key
const input = document.querySelector(".search-bar");
const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
let query; //user input

//Updates user query
input.addEventListener("input", (e) => (query = e.target.value));

//Search
form.addEventListener("submit", function (e) {
  e.preventDefault();
  Searchphotos(query);
});

//Fetches data from API
async function fetchdata(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: APi_key,
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}

//Adds generated images to page
function generatephotos(data) {
  data.photos.forEach((photo) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.innerHTML = `<p>${photo.photographer}<p/><img src='${photo.src.landscape}'></img>`;
    gallery.appendChild(imgContainer);
  });
}

//by default loads popular images in site
async function curatedphotos() {
  data = await fetchdata("https://api.pexels.com/v1/curated?per_page=2");
  generatephotos(data);
}

async function Searchphotos(query) {
  data = await fetchdata(
    `https://api.pexels.com/v1/search?query=${query}&per_page=3`
  );
  gallery.innerHTML = "";
  generatephotos(data);
}

curatedphotos();
