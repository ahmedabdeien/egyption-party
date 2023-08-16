$(".opneNav").click(function(){
    $(".navbar-home").animate({left: '0px'},500)
})
$(".close-nav").click(function(){
    $(".navbar-home").animate({left: '-50%'},500)    

})


$(".nav a").click(function(){
    let aHref = $(this).attr('href');
    let servicesOffset = $(aHref).offset.top;
    $('body,html').animate({scrollTo:servicesOffset},2000)
})

// ==========================================
// <!--======| section -> Details home |======-->

    $(".Details-ad").click(function(){
        if($(this).next(".Details-text").hasClass("active")){
            $(this).next(".Details-text").slideUp(600).removeClass("active")
        }
        else{
        $(".Details-text").slideUp(600).removeClass("active")
        $(this).next(".Details-text").slideDown(600).addClass("active")
        }
    });


 

// <!--======| section -> Duration home |======-->
const days = document.querySelector(".Days")
const hours = document.querySelector(".Hours")
const minutes = document.querySelector(".Minutes")
const seconds = document.querySelector(".Seconds")

 const years = "7 Jan 2024"
  
function countdown(){
    const yearDate = new Date(years);
    const currentDate = new Date();
    const totalSeconds = (yearDate - currentDate) / 1000;

    const daysEl = Math.floor(totalSeconds / 3600 / 24);
    const hoursEl = Math.floor(totalSeconds / 3600 ) % 24;
    const minutesEl = Math.floor(totalSeconds / 60) % 60;
    const secondsEl = Math.floor(totalSeconds) % 60;
    // console.log(daysEl, hoursEl, minutesEl, secondsEl);
    days.innerHTML = daysEl;
    hours.innerHTML =  formaTime(hoursEl);
    minutes.innerHTML = formaTime(minutesEl);
    seconds.innerHTML = formaTime(secondsEl);
}
function formaTime(a){
    return a<10 ? `0${a}` : a;
}
countdown()
setInterval(countdown, 1000)
// <!--======| section -> JOIN US home |======-->
let cont = document.querySelector(".cont-number")
let lineColor = document.querySelector(".line-color")
let input = document.querySelector(".input-text")
let formDiv = document.querySelector(".form-div")
let maxlength = input.getAttribute("maxlength")

cont.innerHTML = maxlength;
 
input.addEventListener("input",() => {
    cont.innerHTML = maxlength - input.value.length; 
    if(cont.innerHTML == 0){
      cont.classList.add("zero")  
      cont.innerHTML = 0+'!'
    }else{
        cont.classList.remove("zero")
    }
    lineColor.style.width = `${(input.value.length * 100) / maxlength}%`
})