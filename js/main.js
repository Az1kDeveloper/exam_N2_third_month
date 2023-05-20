function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0px";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-110%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      backtop.style.bottom = "80px";
    } else {
      backtop.style.bottom = "-80px";
    }
  }


  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:25,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        850:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('.owl-carouselll').owlCarouselll({
    rtl:true,
    loop:false,
    margin:32,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})