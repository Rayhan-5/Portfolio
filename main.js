
function openNav() {
  document.getElementById("nav").style.width = "256px";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}

let typed = new Typed('#autotype',{
  strings:['RAYHAN','a STUDENT','a DEVELOPER','a DESIGNER'],
  typeSpeed:150,
  backSpeed:150,
  loop:true
  
});


function color() {
  
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//let container = document.querySelector('dgyy')

//container.style.backgroundColor='#'+randomColor
container.style.transition='0.5s'

}

color() 
setInterval(function () {
color()
},1000)

//skil progress bars

function html() {
  var elem = document.getElementById("html");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

  

function css() {
  var elem = document.getElementById("css");   
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function js() {
  var elem = document.getElementById("js");   
  var width = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function py() {
  var elem = document.getElementById("py");   
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }

}
function java() {
  var elem = document.getElementById("java");   
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }

}
html()
js()
css()
py()
java()

setInterval(()=>{
  html()
js()
css()
py()
java()
},5000)

//Time section
function somyo() {
  

let mytime = new Date();
let h = mytime.getHours();
let m = mytime.getMinutes();
let s = mytime.getSeconds();

if (h==0) {
  h=12
}
if (h>12) {
  h=h-12
}
h=(h<10)? '0'+h:h
m=(m<10)? '0'+m:m
s=(s<10)? '0'+s:s


document.getElementById('h').innerHTML=h + ' :'
document.getElementById('m').innerHTML=m + ' :'
document.getElementById('s').innerHTML=s
}
somyo()
setInterval(()=>{
somyo()
  
},1000);

//'Active nav'
ScrollReveal({
  rest:true,
  distance:'60px',
  duration :1500,
  delay:200
})

ScrollReveal().reveal('#info',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.information li',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.skil ',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.imgdiv ',{ delay: 200, origin:'right' });
ScrollReveal().reveal('#gallary ',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.profile-card ',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.head ',{ delay: 200, origin:'top' });
ScrollReveal().reveal('.main-btn',{ delay: 200, origin:'left' });
ScrollReveal().reveal('.foter-social',{ delay: 200, origin:'left' });
