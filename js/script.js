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
    });
        const background2 = document.querySelectorAll(".island1, .island2");
    background2.forEach((img) => {
        img.style.top = (scrollPoss * 2) + "px";
    });
        const background3 = document.querySelectorAll(".island3, .island7");
    background3.forEach((img) => {
        img.style.top = (scrollPoss * 2.5) + "px";
    });
        const background4 = document.querySelectorAll(".island4, .island8");
    background4.forEach((img) => {
        img.style.top = (scrollPoss * 3) + "px";
    });
        const background5 = document.querySelectorAll(".island5, .island9, .island10");
    background5.forEach((img) => {
        img.style.top = (scrollPoss * 3.5) + "px";
    });
        const background6 = document.querySelectorAll(".island6, .island11");
    background6.forEach((img) => {
        img.style.top = (scrollPoss * 4) + "px";
    });
    const cloud = document.querySelector(".clouds");
    cloud.style.top = (scrollPoss * 0.5) + "px";    
    
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

    const parallaxWater = document.querySelector('.parallaxWater');
    let scrolledWater = parallaxWater.getBoundingClientRect();
    let water = scrolledWater.top * 0.5 ;
        
    const backwater = document.querySelector(".waterline2");
    backwater.style.top = (water * 0.3) + "px";
        
    const backwater2 = document.querySelector(".waterline3");
    backwater2.style.top = (water * 0.4) + "px";
    // console.log(Water);

    // ############### parallax air ############### 
    let mountain1 = document.querySelector(".mountain1");
    const mountain2 = document.querySelector(".mountain2");
    const mountain3 = document.querySelector(".mountain3");
    const mountain4 = document.querySelector(".mountain4");
    const parallaxAir = document.querySelector(".air");
    let scrollAir = parallaxAir.getBoundingClientRect();
    let air = scrollAir.top;

    const parallaxWord = document.querySelector('.parallaxWord')
    let word = scrollAir.top / 10;
    
    console.log(air);
    console.log(word+'word');
    if (air < 0 && air > -950) {
        mountain1.style.paddingLeft = Math.abs(air * 0.4) + 'px';
        mountain2.style.paddingLeft = Math.abs(air) + 'px';
        mountain3.style.paddingRight = Math.abs(air * 0.2) + 'px';
        mountain4.style.paddingRight = Math.abs(air) + 'px';
    } else if (air < -950) {
        air = -950;
        parallaxWord.style.bottom = ((Math.abs(word )-200)) + 'vh';
    }

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

// console.log(cell);

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
    // console.log(cell);
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
    let div = document.createElement('div') ;
    let img = document.createElement('img');
    img.src = `./public/img/water/water${imgValue}.png`;
    img.style.width = `${width}vw`;
    img.style.margin = `1vw ${margin}vw`;
    div.style.position = 'relative';
    div.style.top = `${topValue}px`;
    div.classList.add('tooltip',`triangle${i}`);
    div.appendChild(img);
    return div;
};
function createIconNode(div) {
    let icon = document.createElement('div');
    icon.style.background = `url("./public/img/water/icon/icon${i}.png")`;
    icon.style.position = 'absolute';
    icon.style.top = '27px';
    icon.style.left = '10px';
    icon.style.width = '5vw';
    icon.style.height = '5vw';
    icon.style.backgroundSize = 'cover';
    icon.style.backgroundPosition = 'center';
    icon.classList.add('icon', `icon${i}`);

    div.prepend(icon);
    // console.log(top);
    return div;
}
function createTooltipNode(div) {
    let toolTip = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    
    h1.innerHTML = 'toto'
    p.innerHTML = 'coucou';
    toolTip.classList.add('tooltiptext', 'waterInfo');
    toolTip.append(h1, p);
    div.appendChild(toolTip);
    return div;
}
function rand(top) {
    topValue = Math.floor(Math.random() * `${top}`);
    imgValue = Math.floor(Math.random() * 3 + 1);
}
for (i = 0; i < indexDrop; i++){
    let div = waterline1.lastChild;
    rand(60);
    waterline1.appendChild(createImageNode(11, -2));
    if (div == null) {
        div = waterline1.firstChild;
        createIconNode(div);
        createTooltipNode(div);
    } else {
        div = waterline1.lastChild;
        createIconNode(div);
        createTooltipNode(div);
    }
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
    // console.log(topValue);
};
