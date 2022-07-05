let movies = [
{
   name: "Falcon and the winter soilder",
   des: 
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis repellendus ex sint at blanditiis corporis tempore dolore dolor?",
   image: "images/slider 1.PNG"
},
{
    name: "Loki",
    des: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis repellendus ex sint at blanditiis corporis tempore dolore dolor?",
    image: "images/slider 2.PNG"
 },
 {
    name: "Falcon and the winter soilder",
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis repellendus ex sint at blanditiis corporis tempore dolore dolor?",
    image: "images/slider 3.PNG"
 },
 {
    name: "Falcon and the winter soilder",
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis repellendus ex sint at blanditiis corporis tempore dolore dolor?",
    image: "images/slider 4.PNG"
 },
 {
    name: "Falcon and the winter soilder",
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis repellendus ex sint at blanditiis corporis tempore dolore dolor?",
    image: "images/slider 5.PNG"
 }
];

const our = document.querySelector('.our');
let sliders = [];

let slideIndex=0;
const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

// create DOM elements

let slide= document.createElement('div');
let imgElement= document.createElement('img');
let content= document.createElement('div');
let h1= document.createElement('h1');
let p= document.createElement('p');


// attaching element

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
our.appendChild(slide);


// image setting

imgElement.src=movies[slideIndex].image;
slideIndex++;

// setting classname 

slide.className= "slider";
content.className= "slide-content";
h1.className= "movie-title";
p.className= "movie-description";

sliders.push(slide);

if (sliders.length) {
    sliders[0].style.marginLeft = 'calc(-${100*(sliders.length - 2)}% -${30*(sliders.length - 2)}px)';
}
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 300);

//video card
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () =>{
        let video= item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () =>{
        let video= item.children[1];
        video.pause();
    });
});

//card sliders
let cardContainers = [...document.querySelectorAll('.card-conatiner')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let conatinerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += conatinerWidth - 200;
    })
    pretBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= conatinerWidth + 200;
    })
})