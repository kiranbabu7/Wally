const APi_key = "563492ad6f9170000100000157130e94bd754d4b81beca8d4421471f";

const gallery = document.querySelector(".gallery");
console.log(gallery);
async function curatedphotos() {
  const response = await fetch("https://api.pexels.com/v1/curated?per_page=2", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: APi_key,
    },
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.photos);
  jsonResponse.photos.forEach((photo) => {
    console.log(photo.src.landscape);
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.innerHTML = `<p>${photo.photographer}<p/><img src='${photo.src.landscape}'></img>`;
    gallery.appendChild(imgContainer);
  });
}

curatedphotos();
