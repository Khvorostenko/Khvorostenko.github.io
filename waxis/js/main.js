function CustomSelect(a){function b(a){g.contains(a.target)||f()}function c(a,b){g.querySelector(".title").innerHTML=a;let c=new CustomEvent("select",{bubbles:!0,detail:{title:a,value:b}});g.dispatchEvent(c)}function d(){h?f():e()}function e(){g.classList.add("open"),document.addEventListener("click",b),h=!0}function f(){g.classList.remove("open"),document.removeEventListener("click",b),h=!1}let g=a.elem;g.onclick=function(a){"title"==a.target.className?d():"LI"==a.target.tagName&&(c(a.target.innerHTML,a.target.dataset.value),f())};let h=!1}let oneSelect=new CustomSelect({elem:document.getElementById("one-select")}),twoSelect=new CustomSelect({elem:document.getElementById("two-select")}),threeSelect=new CustomSelect({elem:document.getElementById("three-select")}),fourSelect=new CustomSelect({elem:document.getElementById("four-select")}),countBuy=50;const oneChild=document.getElementById("oneChild"),twoChild=document.getElementById("twoChild"),threeChild=document.getElementById("threeChild"),fourChild=document.getElementById("fourChild");for(let a,b=1;countBuy>=b;b++)a=document.createElement("li"),a.innerHTML=b,oneChild.append(a);for(let a,b=1;countBuy>=b;b++)a=document.createElement("li"),a.innerHTML=b,twoChild.append(a);for(let a,b=1;countBuy>=b;b++)a=document.createElement("li"),a.innerHTML=b,threeChild.append(a);for(let a,b=1;countBuy>=b;b++)a=document.createElement("li"),a.innerHTML=b,fourChild.append(a);