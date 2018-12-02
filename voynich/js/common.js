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


let pages = new Vue({
    el:'#app',
    data(){
        return{
           look: true
        }
    },
    components: {
        firstPartner: {
            template: `
            <div class="partners">
            <h2>Working hard most of the time is just not enough, but work diligently</h2>
            <p>Massa ipsum odio convallis ligula consectetuer, sagittis gravida est faucibus laoreet semper sapien curabitur. Sociis ullamcorper aenean ullamcorper parturient fames consequat. Aptent faucibus, placerat penatibus maecenas scelerisque mi turpis. Pharetra tempus id velit lobortis est eu fermentum placerat accumsan quis suspendisse.
    
                Fusce, ante nec commodo pulvinar Tempus cum litora tincidunt porttitor quis litora class consectetuer mus eleifend mauris netus. Sodales et ornare sociosqu. Odio aptent erat velit adipiscing consequat. Senectus purus ac.
                
                Duis placerat morbi dictumst dictumst nonummy quis nonummy enim ornare turpis non eros aliquam convallis etiam risus eros. Proin. Ipsum integer cursus. Arcu nec ullamcorper dictum vulputate hendrerit.</p>
          </div>
            `
        },
        secondPartner: {
            template:`
            <div class="partners">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore, ut aspernatur, quibusdam nulla vitae maxime suscipit voluptate pariatur temporibus, veniam veritatis cupiditate iste aliquam. Quasi consectetur excepturi natus dicta!</p>
          </div>
            `
        }
    },
    methods:{
    }
})

let menu = new Vue({
  el:'#menu-burger',
  data(){
    return{
      menu: [
        {name:'about', href:'#about'},
        {name:'products', href:'#products'},
        {name:'pages', href:'#pages'},
        {name:'contact', href:'#contact'}
      ],
      showMenu: false
    }
  },
  mounted() {
    window.onscroll = function () {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 400) {
        document.getElementById('anchor').style.cssText = ' transition: 1.5s; display: block;';
    
      } else {
          document.getElementById('anchor').style.display = '';
      }
    }
  },
})

