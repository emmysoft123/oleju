

$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 20) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});

$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});
});

// javascript for the background
let btn = document.getElementById('women');
let btn1 = document.getElementById('initial');
let btn2 = document.getElementById('innovation');
let divide = document.getElementById('women_text');
let divide1 = document.getElementById('initial_text');
let divide2 = document.getElementById('innovation_text');
btn.addEventListener('click',() => {
  if (divide.style.display === 'none'){
divide.style.display ='block';
  }
  else{
    divide.style.display ='none';
  }
})
btn1.addEventListener('click',() => {
if (divide1.style.display === 'none'){
divide1.style.display ='block';
}
else{
  divide1.style.display ='none';
}
})

btn2.addEventListener('click',() => {
if (divide2.style.display === 'none'){
divide2.style.display ='block';
}
else{
  divide2.style.display ='none';
}
})
