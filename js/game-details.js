const star1 = document.querySelector("#Star1")
const star2 = document.querySelector("#Star2")
const star3 = document.querySelector("#Star3")
const star4 = document.querySelector("#Star4")
const star5 = document.querySelector("#Star5")

star1.addEventListener('mouseenter', (e)=>{
    star1.style.background = "url(img/Star7.png)";
})
star1.addEventListener('mouseleave', (e)=>{
    star1.style.background = "url(img/Star10.png)";
})

star2.addEventListener('mouseenter', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
})
star2.addEventListener('mouseleave', (e)=>{
    star1.style.background = "url(img/Star10.png)";
    star2.style.background = "url(img/Star10.png)";
})

star3.addEventListener('mouseenter', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
})
star3.addEventListener('mouseleave', (e)=>{
    star1.style.background = "url(img/Star10.png)";
    star2.style.background = "url(img/Star10.png)";
    star3.style.background = "url(img/Star10.png)";
})

star4.addEventListener('mouseenter', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
    star4.style.background = "url(img/Star7.png)";
})
star4.addEventListener('mouseleave', (e)=>{
    star1.style.background = "url(img/Star10.png)";
    star2.style.background = "url(img/Star10.png)";
    star3.style.background = "url(img/Star10.png)";
    star4.style.background = "url(img/Star10.png)";
})

star5.addEventListener('mouseenter', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
    star4.style.background = "url(img/Star7.png)";
    star5.style.background = "url(img/Star7.png)";
})
star5.addEventListener('mouseleave', (e)=>{
    star1.style.background = "url(img/Star10.png)";
    star2.style.background = "url(img/Star10.png)";
    star3.style.background = "url(img/Star10.png)";
    star4.style.background = "url(img/Star10.png)";
    star5.style.background = "url(img/Star10.png)";
})

star1.addEventListener('click', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star10.png)";
    star3.style.background = "url(img/Star10.png)";
    star4.style.background = "url(img/Star10.png)";
    star5.style.background = "url(img/Star10.png)";
})
star2.addEventListener('click', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star10.png)";
    star4.style.background = "url(img/Star10.png)";
    star5.style.background = "url(img/Star10.png)";
})
star3.addEventListener('click', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
    star4.style.background = "url(img/Star10.png)";
    star5.style.background = "url(img/Star10.png)";
})
star4.addEventListener('click', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
    star4.style.background = "url(img/Star7.png)";
    star5.style.background = "url(img/Star10.png)";
})
star5.addEventListener('click', (e)=>{
    star1.style.background = "url(img/Star7.png)";
    star2.style.background = "url(img/Star7.png)";
    star3.style.background = "url(img/Star7.png)";
    star4.style.background = "url(img/Star7.png)";
    star5.style.background = "url(img/Star7.png)";
})