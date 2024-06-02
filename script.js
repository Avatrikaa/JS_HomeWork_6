const cardContainer = document.querySelector(".destination");
fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${post.name}</h2>
        <img src="${post.image}" alt="planet"/>
      `;
      card.addEventListener("click", () => {
        window.open(
          `./newPage.html?name=${encodeURIComponent(
            post.name
          )}&image=${encodeURIComponent(post.image)}`,
          "_blank"
        );
      });
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
