const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider_section")
let sliderSectionLast = sliderSection[sliderSection.length-1]

const btnRight = document.querySelector("#btnslide_right")
const btnLeft = document.querySelector("#btnslide_left")

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Nextimg(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0]
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s"
    setTimeout(function(){
        slider.style.transition="none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft="-100%"
    },1000)
}

function Afterimg(){
    let sliderSection = document.querySelectorAll(".slider_section")
    let sliderSectionLast = sliderSection[sliderSection.length-1]
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s"
    setTimeout(function(){
        slider.style.transition="none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft="-100%"
    },1000)
}

btnRight.addEventListener('click',function(){Nextimg()})
btnLeft.addEventListener('click',function(){Afterimg()})

setInterval(function(){
    Nextimg()
},6000)