window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const rec = header.getBoundingClientRect();
    // console.log(rec);
    const position = rec.bottom / window.innerHeight * 100;
    // console.log(document.getElementsByClassName('slice'));
    document.querySelectorAll('.slice').forEach((div) => {
        div.style.height = `${position / 2}%`;
        if (position <= 1) {
            div.style.height = '0px';
            document.querySelector('.nameTitle').style.display = 'none';
        }else if(position > 1){
            document.querySelector('.nameTitle').style.display = 'block';

        }
        // console.log(`${position}%`);
    })
// ############### parallax earth ############### 
    let box = document.querySelector('.parallaxEarth');
    let scrolled = box.getBoundingClientRect();
    let scrollPoss = scrolled.top *0.5;
        
        const background = document.querySelectorAll(".island12, .island13");
        background.forEach((img) => {
            img.style.top = (scrollPoss) + "px";
        })
        const background2 = document.querySelectorAll(".island1, .island2");
        background2.forEach((img) => {
            img.style.top = (scrollPoss*2) + "px";
        })
        const background3 = document.querySelectorAll(".island3, .island7");
        background3.forEach((img) => {
            img.style.top = (scrollPoss*2.5) + "px";
        })
        const background4 = document.querySelectorAll(".island4, .island8");
        background4.forEach((img) => {
            img.style.top = (scrollPoss*3) + "px";
        })
        const background5 = document.querySelectorAll(".island5, .island9, .island10");
        background5.forEach((img) => {
            img.style.top = (scrollPoss*3.5) + "px";
        })
        const background6 = document.querySelectorAll(".island6, .island11");
        background6.forEach((img) => {
            img.style.top = (scrollPoss*4) + "px";
        })
        const cloud = document.querySelector(".clouds");
        cloud.style.top = (scrollPoss*0.5) + "px";    
    
    
    let earth = scrolled.top;
    
    if(earth < -150){
        console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.remove('bounce-4');
    })} 
    else if(earth < -41.85){
        console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.add('bounce-4');
    })
    }else if(earth > -41.85 ){
        console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.remove('bounce-4');
    })}
}, false);

// ############### flower animation ############### 

$(document).ready(function(){
    $("#flower1, #flower2, #flower3, #flower4").hover(
        function()
        {
            $(this).attr("src", "public/img/earth/flowerOnce.gif");
        },
        function()
        {
            $(this).attr("src", "public/img/earth/flowerFixed.gif");
        });
});

// let box = document.querySelector('.fire');
// let scrolled = box.getBoundingClientRect();

// ############### fire carousel launcher ###############
let fire = document.querySelector('.fire');
let buttonX = document.querySelector('.buttonX');
let scene = document.querySelector('.scene');
fire.addEventListener('click', () => {
    if (fire.style.display="flex"){
        fire.style.display ='none';
        scene.style.display ='flex';
    }
}
)

buttonX.addEventListener('click', () => {
    if (fire.style.display="none"){
        fire.style.display ='flex';
        scene.style.display ='none';
    }
}
)

// ############### fire carousel ############### 
let carousel = document.querySelector('.carousel');
let cellCount = 6;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

let triangle =document.querySelector('.carousel__cell');
console.log(triangle);

// ############### water line ############### 
 
const indexDrop = 13;
let waterlineA = document.querySelector('.waterline1');
let topValue;
let imgValue;
function createImageNode() {
    var img = document.createElement('img');
    img.src = `./public/img/water/water${imgValue}.png`;
    img.style.width = '10em';
    img.style.margin = " 1vw -2vw 1vw -2vw ";
    img.style.position = 'relative';
    img.style.top = `${topValue}px`
   
    return img;
};

for (var i = 0; i < indexDrop; i++){
    topValue = Math.floor(Math.random() * 60);
    imgValue = Math.floor(Math.random() * 3 + 1);
    waterlineA.appendChild(createImageNode());

    console.log(imgValue);

};