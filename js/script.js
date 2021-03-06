window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const rec = header.getBoundingClientRect();
    console.log(rec);
    const position = rec.bottom / window.innerHeight * 100;
    console.log(document.getElementsByClassName('slice'));
    document.querySelectorAll('.slice').forEach((div) => {
        div.style.height = `${position / 2}%`;
        if (position <= 1) {
            div.style.height = '0px';
        }
        console.log(`${position}%`);
    })
    
    let box = document.querySelector('.earth');
    // let height = box.clientHeight;
    // console.log(height);
    
    // window.addEventListener('scroll', el =>{
        let scrolled = box.getBoundingClientRect();
        let scrollPoss = scrolled.top *1.5;
        
        const background = document.querySelectorAll(".island12, .island13");
        // console.log(background);
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
        
        // console.log(scrollPoss);

        

}, false);
// })

$(document).ready(function()
{
    $("#flower1, #flower2, #flower3, #flower4").hover(
        function()
        {
            $(this).attr("src", "public/img/flowerOnce.gif");
        },
        function()
        {
            $(this).attr("src", "public/img/flowerFixed.gif");
        });
        // $("#flower1").tooltip({
        //     content: "Awesome title!"
        //   });
        //   $( "#flower1" ).tooltip( "option", "content", "Awesome title!" );
       
});
