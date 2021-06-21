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
    let scrollPoss = scrolled.top * 0.5;
    
        
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
        // console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.remove('bounce-4');
    })} 
    else if(earth < -41.85){
        // console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.add('bounce-4');
    })
    }else if(earth > -41.85 ){
        // console.log(earth);
    document.querySelectorAll('#flower1, #flower2, #flower3, #flower4').forEach((img) =>{
        img.classList.remove('bounce-4');
    })
    }


    // ############### parallax water ############### 

    let parallaxWater = document.querySelector('.parallaxWater');
    let scrolledWater = parallaxWater.getBoundingClientRect();
    let scrollWater = scrolledWater.top * 0.5 ;
        
    const backwater = document.querySelector(".waterline2");
    backwater.style.top = (scrollWater * 0.3) + "px";
        
    const backwater2 = document.querySelector(".waterline3");
    backwater2.style.top = (scrollWater * 0.4) + "px";
    console.log(scrollWater);

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



// ############### fire carousel launcher ###############

let fire = document.querySelector('.fire');
let buttonX = document.querySelector('.buttonX');
let scene = document.querySelector('.scene');
let sceneBG = document.querySelector('.flame');

fire.addEventListener('click', () => {
    if (fire.style.display="flex"){
        fire.style.display ='none';
        scene.style.display = 'flex';
        sceneBG.style.background = '#000000ab';
        sceneBG.style.position = 'fixed';
    }
}
)

buttonX.addEventListener('click', () => {
    if (fire.style.display="none"){
        fire.style.display ='flex';
        scene.style.display ='none';
        sceneBG.style.background = 'transparent';
        sceneBG.style.position = 'sticky';

    }

}
)

// ############### fire carousel ############### 
let carousel = document.querySelector('.carousel');
let cellCount = 6;
let selectedIndex = 0;
let cell = 1;
document.querySelector(`.cell${cell}`).style.display = 'block';

console.log(cell);

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
    if (cell <= 6 && cell != 1) {
        cell--;
       

    } else if (cell == 1) {
        document.querySelector(`.cell${cell}`).style.display = 'none';
        
        cell = 6;

    }
    // console.log(cell);
    console.log(cell);
    document.querySelector(`.cell${cell}`).style.display = 'block';
    document.querySelector(`.cell${cell + 1}`).style.display = 'none';
    document.querySelector(`.cell${cell - 1}`).style.display = 'none';


});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
    if (cell <= 5 ) {
        cell++;
    } else if (cell == 6) {
        document.querySelector(`.cell${cell}`).style.display = 'none';
        cell = 1;

    } else if (cell == 0) {
        cell = 1
    }
    // console.log(cell);
    console.log(cell);
    document.querySelector(`.cell${cell}`).style.display = 'block';
    document.querySelector(`.cell${cell - 1}`).style.display = 'none';
    document.querySelector(`.cell${cell + 1}`).style.display = 'none';


});


// ############### water line ############### 
 
const indexDrop = 13;
let waterline1 = document.querySelector('.waterline1');
let waterline2 = document.querySelector('.waterline2');
let waterline3 = document.querySelector('.waterline3');
let topValue;
let imgValue;
var i = 0;
function createImageNode(width, margin) {
    var img = document.createElement('img');
    img.src = `./public/img/water/water${imgValue}.png`;
    img.style.width = `${width}vw`;
    img.style.margin = `1vw ${margin}vw`;
    img.style.position = 'relative';
    img.style.top = `${topValue}px`;
    img.classList.add(`triangle${i}`);
    return img;
};
function rand(top) {
    topValue = Math.floor(Math.random() * `${top}`);
    imgValue = Math.floor(Math.random() * 3 + 1);
}
for (i = 0; i < indexDrop; i++){
    rand(60);
    waterline1.appendChild(createImageNode(11, -2));
    rand(73);
    waterline2.appendChild(createImageNode(8, -1.6));
    if (i%2 == 0) {
        rand(73);
        waterline2.appendChild(createImageNode(8, -1.6));
    };
    rand(75);
    waterline3.appendChild(createImageNode(6, -1.2));
    rand(75);
    waterline3.appendChild(createImageNode(6, -1.2));
};
// ############### water hover ###############
// const triangle = document.querySelector('.waterline1');
// let children = triangle.children;
// console.log(children);
