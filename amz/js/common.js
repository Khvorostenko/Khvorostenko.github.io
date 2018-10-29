Vue.component('modal', {
  template: '#modal-template'
})

let vm = new Vue({
  el: '#vm-head',
  data: {
    showModal: false
  }
});

// ===============================================================
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

// ====================================================================
// let numb = {score:0}; 
// let howTattoo = document.getElementById("howTattoo");


// let tween = TweenLite.to(numb, 2, {score:8929, onUpdate:showScore})


// function showScore() {
//   howTattoo.innerHTML = numb.score.toFixed(0);
// }

//=============================================================================

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.getElementById('panel-menu').style.cssText = "transition: 1.5s;   background: rgba(1,4,5,0.9);"

  } else {
    document.getElementById('panel-menu').style.background = '';
  }
  if (scrolled > 600) {
    let numb = {
      score: 0
    };
    let howTattoo = document.getElementById("howTattoo");


    let tween = TweenLite.to(numb, 2, {
      score: 8929,
      onUpdate: showScore
    })


    function showScore() {
      howTattoo.innerHTML = numb.score.toFixed(0);
    }
  }
};

// ========================================================================

let appImg = new Vue({
  el: '#app-img'
})

let menuBurger = new Vue({
  el: '#menu-burger',
  data: {
    showMenu: false,
    menu: [{
        href: '#about',
        name: 'О нас'
      },
      {
        href: '#portfolio',
        name: 'Портфолио'
      },
      {
        href: '#forWork',
        name: 'Этапы работы'
      },
      {
        href: '#team',
        name: 'Команда'
      },
      {
        href: '#price',
        name: 'Цены'
      }
    ]
  }
})