const queryParams = new URLSearchParams(window.location.search);
const name1 = queryParams.get("name");
const image = queryParams.get("image");

const planet = document.getElementById("planet");

if (name1 && image) {
  planet.innerHTML = `
          <h2>${name1}</h2>
          <img src="${decodeURIComponent(image)}" alt="${name1}">
      `;
} else {
  planet.innerHTML = `<b>Planet details not found.</b>`;
}
