!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t),window.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.getElementById("popup-btn"),t=document.querySelector(".overlay"),s=document.querySelector(".main"),r=document.querySelector(".custom");e.addEventListener("click",()=>{t.style.display="none",s.style.display="none",r.style.display="flex";for(const e of r.children)e.style.display="block"})}(),function(){let e=document.getElementById("ready"),t=document.querySelector(".main-cards-item-active").cloneNode(!0),s=document.querySelector(".main-cards"),r=document.getElementById("name"),n=document.getElementById("age"),l=document.getElementsByName("sex"),i=document.getElementById("select"),o=document.getElementById("bio"),d=document.querySelector(".skin"),c=document.querySelector(".clothes"),a=document.querySelector(".hair"),u=document.querySelector("#person-skin"),h=document.querySelector("#person-clothes"),g=document.querySelector("#person-hair");t.querySelector(".sex").textContent;class m{constructor(e){this.prev=e.querySelector(".prev"),this.next=e.querySelector(".next"),this.slides=e.getElementsByTagName("li"),this.sliders=e.querySelectorAll("ul"),this.slider=this.sliders[0],this.slider.style.transition="all 1s",this.sliderIndex=1,this.pos=0,this.len=4,this.sex="Мужской"}checkSex(){"Мужской"==this.sex?(this.sex="Женский",this.sliderIndex=1,this.slider.style.transform="translateX(0px)",this.slider.classList.add("hidden"),this.slider=this.sliders[1],this.slider.classList.remove("hidden"),this.pos=0,this.slider.style.transform="translateX(0px)",u.style.backgroundImage=`url(img/skin/skin-${this.sliderIndex+3}.png)`,h.style.backgroundImage=`url(img/clothes/construct/clothes-${this.sliderIndex+3}.png)`,g.style.backgroundImage=`url(img/hair/construct/hair-${this.sliderIndex+3}.png)`,console.log(this.slider)):"Женский"==this.sex&&(this.sex="Мужской",this.sliderIndex=1,this.slider.style.transform="translateX(0px)",this.slider.classList.add("hidden"),this.slider=this.sliders[0],this.slider.classList.remove("hidden"),this.slider.style.transform="translateX(0px)",this.pos=0,u.style.backgroundImage=`url(img/skin/skin-${this.sliderIndex}.png)`,h.style.backgroundImage=`url(img/clothes/construct/clothes-${this.sliderIndex}.png)`,g.style.backgroundImage=`url(img/hair/construct/hair-${this.sliderIndex}.png)`,console.log(this.slider))}nextSlide(){this.sliderIndex>=this.len-1?this.sliderIndex=1:this.sliderIndex++,console.log(this.sliderIndex),this.pos==164*(2-this.len)&&(this.pos=164),this.pos-=164,this.slider.style.transform=`translateX(${this.pos}px)`}prevSlide(){this.sliderIndex<=1?this.sliderIndex=this.len-1:this.sliderIndex--,0==this.pos&&(this.pos=164*(1-this.len)),console.log(this.sliderIndex),this.pos+=164,this.slider.style.transform=`translateX(${this.pos}px)`}}l.forEach(e=>{e.addEventListener("change",()=>{"Мужской"==y.sex?(y.sex="Женский",y.sliderIndex=1,y.slider.style.transform="translateX(0px)",y.pos=0,u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex+3}.png)`,console.log(y.slider)):"Женский"==y.sex&&(y.sex="Мужской",y.sliderIndex=1,y.slider.style.transform="translateX(0px)",y.pos=0,u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex}.png)`,console.log(y.slider)),p.checkSex(),x.checkSex()})});let y=new m(d);console.log(y.slider),y.next.addEventListener("click",()=>{y.nextSlide(),"Мужской"==y.sex?u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex}.png)`:"Женский"==y.sex&&(u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex+3}.png)`)}),y.prev.addEventListener("click",()=>{y.prevSlide(),"Мужской"==y.sex?u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex}.png)`:"Женский"==y.sex&&(u.style.backgroundImage=`url(img/skin/skin-${y.sliderIndex+3}.png)`)});let p=new m(a);console.log(p.slider),p.next.addEventListener("click",()=>{p.nextSlide(),"Мужской"==p.sex?g.style.backgroundImage=`url(img/hair/construct/hair-${p.sliderIndex}.png)`:"Женский"==p.sex&&(g.style.backgroundImage=`url(img/hair/construct/hair-${p.sliderIndex+3}.png)`)}),p.prev.addEventListener("click",()=>{p.prevSlide(),"Мужской"==p.sex?g.style.backgroundImage=`url(img/hair/construct/hair-${p.sliderIndex}.png)`:"Женский"==p.sex&&(g.style.backgroundImage=`url(img/hair/construct/hair-${p.sliderIndex+3}.png)`)});let x=new m(c);console.log(x.slider),x.next.addEventListener("click",()=>{x.nextSlide(),"Мужской"==x.sex?h.style.backgroundImage=`url(img/clothes/construct/clothes-${x.sliderIndex}.png)`:"Женский"==x.sex&&(h.style.backgroundImage=`url(img/clothes/construct/clothes-${x.sliderIndex+3}.png)`)}),x.prev.addEventListener("click",()=>{x.prevSlide(),"Мужской"==x.sex?h.style.backgroundImage=`url(img/clothes/construct/clothes-${x.sliderIndex}.png)`:"Женский"==x.sex&&(h.style.backgroundImage=`url(img/clothes/construct/clothes-${x.sliderIndex+3}.png)`)}),e.addEventListener("click",()=>{document.querySelector(".custom").style.display="none",document.querySelector(".main").style.display="block",s.children[0].classList.remove("main-cards-item-active"),s.insertBefore(t,s.children[1]),t.querySelector(".name").innerHTML=r.value,t.querySelector(".age").innerHTML=n.value,l.forEach(e=>{e.checked&&(t.querySelector(".sex").innerHTML=e.value)}),t.querySelector(".bio").innerHTML=o.value,t.querySelector(".views").innerHTML=i.options[i.selectedIndex].value,t.querySelector(".photo").classList.remove("photo-1"),t.querySelector(".photo").appendChild(document.querySelector(".person"))})}()})}]);