const arrayImg = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
]; 

let attiva = 0;
const barDom = document.querySelector('.bar-down');

const imgDom = document.querySelector('.wrapper-img');
// Creo i div con le immagini nell'HTML
for (let i = 0; i < arrayImg.length; i++ ){
    barDom.innerHTML += `<div class="card"><img src="${arrayImg[i].url}"/></div>`
    imgDom.innerHTML += `<div class="img">
                            <h2>${arrayImg[i].title}</h2>
                            <p>${arrayImg[i].description}</p>
                            <img src="${arrayImg[i].url}"/>
                        </div>`;
}



const imgList = document.getElementsByClassName('img');
const opacityDom = document.getElementsByClassName('card')


imgList[attiva].classList.add('show');
opacityDom[attiva].classList.add('opacity');


let clock = setInterval(function () {
    right()
}, 2000);


const downDom = document.querySelector('.down');

downDom.addEventListener('click',
    function () {   
        right()   
    }
);

const upDom = document.querySelector('.up');

upDom.addEventListener('click',
    function () {
        left()
    }
);


//funzioni movimento destra sinistra
function left(){
    opacityDom[attiva].classList.remove('opacity');
    imgList[attiva].classList.remove('show');
    attiva--;
    if(attiva < 0){
        attiva = 4;
    }
    opacityDom[attiva].classList.add('opacity');
    imgList[attiva].classList.add('show');
}

function right(){
    opacityDom[attiva].classList.remove('opacity');
    imgList[attiva].classList.remove('show');
    attiva++;
    if(attiva >= imgList.length){
        attiva = 0;
    }
    opacityDom[attiva].classList.add('opacity');
    imgList[attiva].classList.add('show'); 
}

