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


/*
const arrayImg =   [
    "img/01.jpg",   // 0
    "img/02.jpg",   // 1
    "img/03.jpg",   // 2
    "img/04.jpg",   // 3
    "img/05.jpg",   // 4
];
*/

let attiva = 0;

const imgDom = document.querySelector('.wrapper-img');
// Creo i div con le immagini nell'HTML
for (let i = 0; i < arrayImg.length; i++ ){
    imgDom.innerHTML += `<div class="img">
                            <h1>${arrayImg[i].title}</h1>
                            <p>${arrayImg[i].description}</p>
                            <img src="${arrayImg[i].url}"/>
                        </div>`;
}


const imgList = document.getElementsByClassName('img');


imgList[attiva].classList.add('show');



const downDom = document.querySelector('.down');

downDom.addEventListener('click',
    function () {   
        

        imgList[attiva].classList.remove('show');

        attiva++;

        if(attiva >= imgList.length){
            attiva = 0;
        }

        imgList[attiva].classList.add('show');


        

        
        /*
        upDom.classList.remove('none');
        if (attiva == imgList.length - 1){
            downDom.classList.add('none');
        }
        */
        
    }
);


const upDom = document.querySelector('.up');

upDom.addEventListener('click',
    function () {

        
        imgList[attiva].classList.remove('show');
        attiva--;

        if(attiva < 0){
            attiva = 4;

        }

        imgList[attiva].classList.add('show');


/*
        downDom.classList.remove('none');
        if (attiva == 0){
            upDom.classList.add('none');
        }
*/

    }
);