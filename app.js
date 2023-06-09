fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    let produkt = "";
    data.products.map((values) => {
      produkt += `
            <div class="produkt" id="${values.id}" onclick="getId(this.id)">
                <div class="top-produkt">
                    <img src="${values.thumbnail}" alt="" class="produkt-bild">
                </div>
                <div class="produkt-info" id="${values.id}">
                    <h2>${values.title}</h2>
                    <p class="beschreibung">${values.description}</p>
                    <div class="eigenschaften">
                        <div class="bewertung">
                            <i class="fa-solid fa-star"></i>
                            <p>${values.rating}</p>
                        </div>
                        <div class="preis">
                        <i class="fa-solid fa-money-bill-1"></i>
                            <p>${values.price}</p>
                        </div>
                        <div class="verfugbar">
                            <i class="fa-solid fa-box"></i>
                            <p>${values.stock}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    document.querySelector(".container").innerHTML += produkt;
  })
  .catch((error) => console.log(error));

function hide() {
  document.querySelector(".pop-up").remove();
}

function getId(targetId) {
  console.log(targetId);
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let popUp = "";
      popUp += `
      <div class="pop-up">
        <img
          src="${data.products[targetId - 1].thumbnail}"
          alt=""
          class="pop-up-bilder"
        />
        <div class="pop-up-info">
          <h1 class="pop-up-title">${data.products[targetId - 1].title}</h1>
          <p class="pop-up-bsc">
            ${data.products[targetId - 1].description}
          </p>
          <div class="infos">
            <div class="info-text"><i class="fa-solid fa-money-bill-1"></i><h3>Preis: <span>${
              data.products[targetId - 1].price
            }$</span></h3></div>
            <div class="info-text"><i class="fa-solid fa-star pop-up-star"></i><h3>Beurteilung: <span>${
              data.products[targetId - 1].rating
            }</span></h3></div>
            <div class="info-text"><i class="fa-solid fa-box"></i><h3 class="lager">Auf Lager: <span>${
              data.products[targetId - 1].stock
            }</span></h3></div>
            <div class="info-text"><i class="fa-solid fa-building"></i><h3 class="firma">Firma: <span>${
              data.products[targetId - 1].brand
            }</span></h3></div>
            <div class="info-text"><i class="fa-solid fa-bars"></i><h3>Kategorie: <span>${
              data.products[targetId - 1].category
            }</span></h3></div>
          </div>
          <button onclick="hide()">Jetzt Kaufen</button>
        </div>
      </div>
      `;
      document.querySelector(".container").innerHTML += popUp;
    });
}
