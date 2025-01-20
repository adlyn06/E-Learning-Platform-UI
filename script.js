function showAlert(){
    alert("Submitted Successfully");
}

var popupoverlay = document.querySelector(".popup-overlay")
var coursepopup = document.querySelector(".course-popup")
// var coursepopup1 = document.querySelector(".course-popup1")


  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.dataset.target);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



var clickbtn = document.querySelector(".click-btn")
var clickbtn1 = document.querySelector(".click-btn1")
var clickbtn2 = document.querySelector(".click-btn2")
var clickbtn3 = document.querySelector(".click-btn3")
var clickbtn4 = document.querySelector(".click-btn4")
var clickbtn5 = document.querySelector(".click-btn5")
var clickbtn6 = document.querySelector(".click-btn6")
var clickbtn7 = document.querySelector(".click-btn7")
var clickbtn8 = document.querySelector(".click-btn8")
var clickbtn9 = document.querySelector(".click-btn9")
var clickbtn10 = document.querySelector(".click-btn10")
var clickbtn11 = document.querySelector(".click-btn11")

clickbtn.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn1.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn2.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn3.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn4.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn5.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn6.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn7.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn8.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn9.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn10.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})

clickbtn11.addEventListener("click",function() {
    popupoverlay.style.display="block"
    coursepopup.style.display="block"
})


var cancelbtn = document.querySelector(".cancel-btn")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    coursepopup.style.display="none"
})