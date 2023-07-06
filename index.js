const loadImages1 = function () {
  allCardsCol = document.querySelectorAll(".col-md-4");
  allCardsCol.forEach((card) => {
    card.classList.remove("d-none");
  });
  fetch("https://api.pexels.com/v1/search?query=universe", {
    headers: {
      Authorization: "dmyiKqetzF0pVseF7ShFPVTbTKsaqZy8aM38ibZ90XFFOJ5VuXjW21Kt",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })

    .then((data) => {
      console.log(data);
      allCardsSVG = document.querySelectorAll(".card img");
      console.log(allCardsSVG);
      allCardsSVG.forEach((img, i) => {
        img.setAttribute("src", data.photos[i].src.portrait);
      });
      const allHideButtons = document.querySelectorAll(".hide-button");
      allHideButtons.forEach((button) => {
        button.innerText = "Hide";
        button.addEventListener("click", () => {
          button.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
            "d-none"
          );
        });
        const ids = document.querySelectorAll("small");
        ids.forEach((el, i) => {
          el.innerText = data.photos[i].id;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const loadImages2 = function () {
  allCardsCol = document.querySelectorAll(".col-md-4");
  allCardsCol.forEach((card) => {
    card.classList.remove("d-none");
  });
  fetch("https://api.pexels.com/v1/search?query=planet", {
    headers: {
      Authorization: "dmyiKqetzF0pVseF7ShFPVTbTKsaqZy8aM38ibZ90XFFOJ5VuXjW21Kt",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })

    .then((data) => {
      console.log(data);
      allCardsSVG = document.querySelectorAll(".card img");
      allCardsSVG.forEach((img, i) => {
        img.setAttribute("src", data.photos[i].src.portrait);
      });
      const allHideButtons = document.querySelectorAll(".hide-button");
      allHideButtons.forEach((button) => {
        button.innerText = "Hide";
        button.addEventListener("click", () => {
          button.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
            "d-none"
          );
        });
      });
      const ids = document.querySelectorAll("small");
      ids.forEach((el, i) => {
        el.innerText = data.photos[i].id;
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

const firstButton = document.querySelector(".btn-primary");
const secondaryButton = document.querySelector(".btn-secondary");

firstButton.addEventListener("click", loadImages1);
secondaryButton.addEventListener("click", loadImages2);

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", () => {
  allCardsCol = document.querySelectorAll(".col-md-4");
  allCardsCol.forEach((card) => {
    card.classList.remove("d-none");
  });
  fetch("https://api.pexels.com/v1/search?query=" + searchInput.value, {
    headers: {
      Authorization: "dmyiKqetzF0pVseF7ShFPVTbTKsaqZy8aM38ibZ90XFFOJ5VuXjW21Kt",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })

    .then((data) => {
      console.log(data);
      allCardsSVG = document.querySelectorAll(".card img");
      allCardsSVG.forEach((img, i) => {
        img.setAttribute("src", data.photos[i].src.portrait);
      });
      const allHideButtons = document.querySelectorAll(".hide-button");
      allHideButtons.forEach((button) => {
        button.innerText = "Hide";
        button.addEventListener("click", () => {
          button.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
            "d-none"
          );
        });
      });
      const ids = document.querySelectorAll("small");
      ids.forEach((el, i) => {
        el.innerText = data.photos[i].id;
      });
    })

    .catch((err) => {
      console.log(err);
    });
});
