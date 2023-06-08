//? Alte Methode

// const image1 = document.querySelector('.bild-1');
// const image2 = document.querySelector('.bild-2');
// const image3 = document.querySelector('.bild-3');
// const title1 = document.querySelector('.title-1');
// const title2 = document.querySelector('.title-2');
// const title3 = document.querySelector('.title-3');
// const bsc1 = document.querySelector('.bsc-1');
// const bsc2 = document.querySelector('.bsc-2');
// const bsc3 = document.querySelector('.bsc-3');
// const rating1 = document.querySelector('.rating-1');
// const rating2 = document.querySelector('.rating-2');
// const rating3 = document.querySelector('.rating-3');
// const preis1 = document.querySelector('.preis-1');
// const preis2 = document.querySelector('.preis-2');
// const preis3 = document.querySelector('.preis-3');
// const stock1 = document.querySelector('.stock-1');
// const stock2 = document.querySelector('.stock-2');
// const stock3 = document.querySelector('.stock-3');

// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
//         image1.setAttribute("src", data.products[0].thumbnail);
//         image2.setAttribute("src", data.products[1].thumbnail);
//         image3.setAttribute("src", data.products[2].thumbnail);
//         title1.innerHTML = `${data.products[0].title}`
//         title2.innerHTML = `${data.products[1].title}`
//         title3.innerHTML = `${data.products[2].title}`
//         bsc1.innerText = `${data.products[0].description}`;
//         bsc2.innerText = `${data.products[1].description}`;
//         bsc3.innerText = `${data.products[2].description}`;
//         rating1.innerText = `${data.products[0].rating}`;
//         rating2.innerText = `${data.products[1].rating}`;
//         rating3.innerText = `${data.products[2].rating}`;
//         preis1.innerText = `${data.products[0].price}`;
//         preis2.innerText = `${data.products[1].price}`;
//         preis3.innerText = `${data.products[2].price}`;
//         stock1.innerText = `${data.products[0].stock}`;
//         stock2.innerText = `${data.products[1].stock}`;
//         stock3.innerText = `${data.products[2].stock}`;

//     })
//     .catch(error => console.log(error));

// ---------------------------------------------------------------------

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let produkt = "";
    data.products.map((values) => {
      produkt += `
            <div class="produkt" id="${values.id}" onclick="popUp(), getId(this.id)">
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
                            <i class="fa-solid fa-dollar-sign"></i>
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
    console.log(produkt);
    document.querySelector(".container").innerHTML += produkt;
  })
  .catch((error) => console.log(error));

function hide() {
  console.log("blend aus");
  document.querySelector(".pop-up").remove();
}

function popUp() {
  console.log("zeig");
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
            <h3>Preis: <span>${data.products[targetId - 1].price}</span></h3>
            <h3>Beurteilung: <span>${
              data.products[targetId - 1].rating
            }</span></h3>
            <h3>Auf Lager: <span>${
              data.products[targetId - 1].stock
            }</span></h3>
            <h3>Firma: <span>${data.products[targetId - 1].brand}</span></h3>
            <h3>Kategorie: <span>${
              data.products[targetId - 1].category
            }</span></h3>
          </div>
          <button onclick="hide()">Jetzt Kaufen</button>
        </div>
      </div>
      `;
      document.querySelector(".container").innerHTML += popUp;
      console.log(targetId);
    });
}
