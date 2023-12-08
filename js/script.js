let main_menu = document.querySelector('.menu_bar')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})


$('.banner_row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:false,
    nextArrow:false,
    dots:false,
  });


  $('.team_row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-chevron-left paa"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right naa"></i>',
  });

  $('.counter').counterUp({
    delay: 10,
    time: 10000
});


let back_to_top = document.querySelector('.back_to_top')
console.log(back_to_top)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    back_to_top.classList.add('go_top')
  } else {
    back_to_top.classList.remove('go_top')
  }
})

back_to_top.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })

})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay:true,
  prevArrow:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// =================pre loader ==================

$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });}
  }, 1);});


// ======================pre loader======================
// ======================text animation===================
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Hello",
  "Everyone",
  "Welcome",
  "To",
  "Our",
  "Resturant",
  "Eat",
  "&",
  "Enjoy",
  ":)",

];

const morphTime = 1;
const cooldownTime = .50;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}
function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1500;
  time = newTime;
  cooldown -= dt;
  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }
      doMorph();
  } else {
      doCooldown();
  }
}
animate();
// text animation==========================
// text animation=======================
var words = ['Hello everyone', 'welcome to', 'Our Resturant'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
