/*
//Array con i percorsi delle Immagini
let slideImages = [
    "../assets/img/01.webp",
    "../assets/img/02.webp",
    "../assets/img/03.webp",
    "../assets/img/04.webp",
    "../assets/img/05.webp",
]
let activeImage = 0
//Ciclo selezione Immagini
for (let i = 0; i < slideImages.length; i++) {
    imgContainer.innerHTML +=
    `<div class="imgContainer">
        <img class="imgCarousel" src="${slideImages[i]}">
    </div>`
}
document.getElementsByClassName('imgContainer')[activeImage].classList.add('active');
//Collego bottone prossima immagine
let next = document.getElementById("arrowButton");
    next.addEventListener('click', function () {
    
    document.querySelector('.imgContainer.active').classList.remove('active');
    document.getElementsByClassName('imgContainer')[activeImage].classList.add('active');
    if (activeImage === slideImages.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }
}
)
*/

//Creo la Variabile con le Immagini
let slides = [
    {
        image: '../assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '../assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '../assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '../assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '../assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Immagine Attiva
let imgActive = 0;

//Seleziono gli elementi nella DOM
let slidesEl = document.querySelector(".slides");
let prevEl = document.querySelector(".prev");
let nextEl = document.querySelector(".next");

//Inserisco le Immagini
for (i = 0; i < slides.length; i++) {

    let slidesCol = slides[i].image;
    let imgEl = `<img class="imgCarousel ${i === imgActive ? 'active' : ''} " src=${slidesCol} alt="Carousel">`;

    slidesEl.insertAdjacentHTML("beforeend", imgEl);

};

//Collego Click ai Bottoni
nextEl.addEventListener("click", function(){

    //Cambiare imgActive e sposto classe Active
        //Selezionare l'Img Attiva 
            //Rimuovi la classe Active e dalla all'Img Seguente
    let activeSlide = document.querySelector(".slides > img.active");
    activeSlide.classList.remove("active");
    imgActive++;
    let slidesAll = document.getElementsByClassName("imgCarousel");
    let nextSlide = slidesAll[imgActive];
    nextSlide.classList.add("active");
});

prevEl.addEventListener("click", function(){

    //Cambiare imgActive e sposto classe Active
        //Selezionare l'Img Attiva 
            //Rimuovi la classe Active e dalla all'Img Seguente
    let activeSlide = document.querySelector(".slides > img.active");
    activeSlide.classList.remove("active");
    imgActive--;
    let slidesAll = document.getElementsByClassName("imgCarousel");
    let nextSlide = slidesAll[imgActive];
    nextSlide.classList.add("active");
});