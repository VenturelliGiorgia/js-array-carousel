const images = [
    "img/04.webp",
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/05.webp"
];

const sliderContainerEl = document.querySelector(".slider-container");

//stampa immagini presenti nell'array
for (let i = 0; i < images.length; i++) {


    sliderContainerEl.innerHTML += `<img src="${images[i]}" class="slider-img position-img no-active">`;
    const sliderImgEl = document.querySelector(".slider-img");

    if (i === 0) {
        sliderImgEl.classList.remove("no-active");
        sliderImgEl.classList.add("active");
    }
}

const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");
let currentImgIndex = 0;

btnNext.addEventListener("click", function () {
    console.log("Next  btn click");

    // prendo immagine corrente e la nascondo così da poter aggiornare il contatore e visualizzare la prossima immagine
    const oldImg = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);
    oldImg.classList.remove("no-active");
    oldImg.classList.add("active");


    // incrementato il contatore
    currentImgIndex++;

    const ultimoIndiceDisponibile = images.length - 1;

    //se l'indice va oltre l'ultima immagine disponibile vado all'ultimo elemento visualizzabile disponibile
    if (currentImgIndex > ultimoIndiceDisponibile) {
        currentImgIndex = ultimoIndiceDisponibile;
    }

    // aggiorno l'immagine
    sliderContainerEl.innerHTML += `<img src="${images[currentImgIndex]}" class="slider-img position-img active">`;

});

btnPrev.addEventListener("click", function () {
    console.log("Prev btn click");
    // prendo immagine corrente e la nascondo così da poter aggiornare il contatore e visualizzare l'immagine precedente
    const oldImg = document.querySelector(`.slider-container :nth-child(${currentImgIndex + 1})`);
    oldImg.classList.remove("no-active");
    oldImg.classList.add("active");

    // decremento il contatore
    currentImgIndex--;

    //se l'utente proverà ad andare prima della prima immagine non andrà in negativo
    if (currentImgIndex < 0) {
        currentImgIndex = 0;
    }

    // aggiorno l'immagine
    sliderContainerEl.innerHTML += `<img src="${images[currentImgIndex]}" class="slider-img position-img active">`;

});
