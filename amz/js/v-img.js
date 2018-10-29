!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e["vue-img"]=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7], .footer-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0.3); height: 50px; z-index: 9999; display: flex; align-items: center; } .header-v-img[data-v-5928e1c7] { justify-content: space-between; } .footer-v-img[data-v-5928e1c7] { bottom: 0; justify-content: center; height: 70px; /* scrolling thumbnails on mobile */ overflow-x: auto; } .footer-v-img img[data-v-5928e1c7] { width: 60px; height: 60px; cursor: pointer; -webkit-transition: transform 0.2s ease-out; transition: transform 0.2s ease-out; object-fit: cover; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .footer-v-img img.is-selected[data-v-5928e1c7] { transform: scale(1.1); } .footer-v-img img[data-v-5928e1c7]:not(:last-child) { margin-right: 7px; } .title-v-img[data-v-5928e1c7] { font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-5928e1c7], .buttons-v-img[data-v-5928e1c7] { width: 80px; font-family: 'Avenir', Helvetica, Arial, sans-serif; } .count-v-img[data-v-5928e1c7] { font-size: 15px; color: white; margin-left: 10px; } .buttons-v-img[data-v-5928e1c7] { margin-right: 10px; text-align: right; } .buttons-v-img span path[data-v-5928e1c7] { fill: #e5e6eb; -webkit-transition: fill 0.4s ease-in-out; transition: fill 0.4s ease-in-out; } .buttons-v-img span[data-v-5928e1c7] { cursor: pointer; color: #e5e6eb; font-size: 30px; -webkit-transition: color 0.4s ease-in-out; transition: color 0.4s ease-in-out; text-decoration: none; text-align: center; } .buttons-v-img span[data-v-5928e1c7]:not(:last-child) { margin-right: 8px; } .buttons-v-img span svg[data-v-5928e1c7] { height: 20px; width: 15px; } .buttons-v-img span:hover svg path[data-v-5928e1c7] { fill: white; } .buttons-v-img span[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: 'Avenir', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, 0.3); z-index: 1000; opacity: 0.3; -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var e={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.closed?e._e():n("div",{staticClass:"fullscreen-v-img",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.close(t)}}},[n("div",{staticClass:"header-v-img"},[n("span",{staticClass:"count-v-img"},[e.images.length>1?n("span",[e._v(e._s(e.currentImageIndex+1)+"/"+e._s(e.images.length)+" ")]):e._e()]),n("span",{staticClass:"title-v-img"},[e._v(e._s(e.titles[e.currentImageIndex]))]),n("div",{staticClass:"buttons-v-img"},[e.sourceButtons[e.currentImageIndex]?n("span",[n("a",{attrs:{href:e.images[e.currentImageIndex],target:"_blank"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 475.078 475.077"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 475.078 475.077","xml:space":"preserve"}},[n("path",{attrs:{d:"M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",fill:"#FFFFFF"}}),n("path",{attrs:{d:"M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",fill:"#FFFFFF"}})])])]):e._e(),n("span",{on:{click:e.close}},[e._v("×")])])]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.visibleUI&&1!==e.images.length?n("span",{staticClass:"prev-v-img",on:{click:e.prev}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"}})])]):e._e()]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[e.visibleUI&&1!==e.images.length?n("span",{staticClass:"next-v-img",on:{click:e.next}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"}})])]):e._e()]),e.thumbnails&&e.images.length>1?n("div",{staticClass:"footer-v-img"},e._l(e.images,function(t,i){return n("img",{key:i,class:{"is-selected":e.currentImageIndex==i},attrs:{src:t},on:{click:function(t){e.select(i)}}})})):e._e(),n("div",{staticClass:"content-v-img"},[n("img",{attrs:{src:e.images[e.currentImageIndex]},on:{click:e.next}})])],1)])},staticRenderFns:[],_scopeId:"data-v-5928e1c7",data:function(){return{images:[],titles:[],sourceButtons:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null,handlers:{},thumbnails:!1}},watch:{closed:function(e){e&&this.handlers.closed&&this.handlers.closed(),!e&&this.handlers.opened&&this.handlers.opened()}},methods:{fireChangeEvent:function(){this.handlers.changed&&this.handlers.changed(this.currentImageIndex)},close:function(){this.closed||(document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0)},next:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0,this.fireChangeEvent())},select:function(e){this.currentImageIndex=e},prev:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex>0?this.currentImageIndex--:this.currentImageIndex=this.images.length-1,this.fireChangeEvent())},showUI:function(){var e=this;this.closed||(clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout(function(){e.visibleUI=!1},3500))}},created:function(){var e=this;window.addEventListener("keyup",function(t){27!==t.keyCode&&81!==t.keyCode||e.close(),39!==t.keyCode&&76!==t.keyCode||e.next(),37!==t.keyCode&&72!==t.keyCode||e.prev()}),window.addEventListener("scroll",function(){e.close()}),window.addEventListener("mousemove",function(){e.showUI()})}},t=(function(){function e(e){this.value=e}function t(t){function n(a,o){try{var s=t[a](o),r=s.value;r instanceof e?Promise.resolve(r.value).then(function(e){n("next",e)},function(e){n("throw",e)}):i(s.done?"return":"normal",s.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":a.resolve({value:t,done:!0});break;case"throw":a.reject(t);break;default:a.resolve({value:t,done:!1})}(a=a.next)?n(a.key,a.arg):o=null}var a,o;this._invoke=function(e,t){return new Promise(function(i,s){var r={key:e,arg:t,resolve:i,reject:s,next:null};o?o=o.next=r:(a=o=r,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}),n=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},i=function(e,t,n){var i="pointer",a=t.arg||null,o=void 0,s=void 0,r=e.src,c=void 0,u=void 0,l={};return n.altAsTitle&&(c=e.alt),o=n.openOn,s=n.sourceButton,u=n.thumbnails,void 0!==t.value&&(i=t.value.cursor||i,a=t.value.group||a,o=t.value.openOn||o,r=t.value.src||r,c=t.value.title||c,l.opened=t.value.opened,l.closed=t.value.closed,l.changed=t.value.changed,void 0!==t.value.sourceButton&&(s=t.value.sourceButton),void 0!==t.value.thumbnails&&(u=t.value.thumbnails)),e.setAttribute("data-vue-img-src",r),a&&e.setAttribute("data-vue-img-group",a),c&&e.setAttribute("data-vue-img-title",c),s&&e.setAttribute("data-vue-img-source-button",s),u&&e.setAttribute("data-vue-img-thumbnails",u),r||console.error("v-img element missing src parameter."),e.style.cursor=i,{cursor:i,src:r,group:a,title:c,events:l,sourceButton:s,openOn:o,thumbnails:u}},a=function(a,o){var s=a.extend(e);o=t({altAsTitle:!1,sourceButton:!1,thumbnails:!1,openOn:"click"},o),a.directive("img",{update:function(e,t,n,a){var s=void 0,r=void 0;a.data.attrs&&n.data.attrs&&(r=a.data.attrs.src!==n.data.attrs.src,o.altAsTitle&&(s=a.data.attrs.alt!==n.data.attrs.alt));var c=t.oldValue!==t.value;(r||s||c)&&i(e,t,o)},bind:function(e,t){var r=i(e,t,o),c=window.vueImg;if(!c){var u=document.createElement("div");u.setAttribute("id","imageScreen"),document.querySelector("body").appendChild(u),c=window.vueImg=(new s).$mount("#imageScreen")}e.addEventListener(r.openOn,function(){var t=void 0;t=e.dataset.vueImgGroup?[].concat(n(document.querySelectorAll('img[data-vue-img-group="'+e.dataset.vueImgGroup+'"]'))):[e],a.set(c,"images",t.map(function(e){return e.dataset.vueImgSrc})),a.set(c,"titles",t.map(function(e){return e.dataset.vueImgTitle})),a.set(c,"sourceButtons",t.map(function(e){return"true"===e.dataset.vueImgSourceButton})),a.set(c,"thumbnails","true"===e.dataset.vueImgThumbnails),a.set(c,"currentImageIndex",t.indexOf(e)),a.set(c,"handlers",r.events),a.set(c,"closed",!1)})}})};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),a});
//# sourceMappingURL=v-img.js.map
