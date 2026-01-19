import{a as n,S as p,i as m}from"./assets/vendor-CNqCr-V-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="54255948-743bb2e2e8edc610c07792dbd",y="https://pixabay.com";n.defaults.baseURL=y;function g(r){return n.get("/api/",{params:{q:r||"",image_type:"photo",key:h,orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new p(".gallery a"),b=r=>r.map(({webformatURL:i,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:f})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
  <img
  class="gallery-image"
  src="${i}"
  alt="${s}"
  />
  </a>
   <ul class="discriptions">
      <li>
        <p class="disc-title">likes</p>
        <p class="disc-text">${e}</p>
      </li>
      <li>
        <p class="disc-title">views</p>
        <p class="disc-text">${t}</p>
      </li>
      <li>
        <p class="disc-title">comments</p>
        <p class="disc-text">${a}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${f}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function x(r){u.insertAdjacentHTML("beforeend",b(r)),L.refresh()}function O(){u.innerHTML=""}function S(){d.classList.remove("is-hidden")}function c(){d.classList.add("is-hidden")}const l=r=>{m.error({message:r,closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"})},P=document.querySelector(".form");P.addEventListener("submit",$);function $(r){r.preventDefault();const i=r.target,{"search-text":{value:o}}=i.elements;if(!o.trim()){l("Please fill in the search field!");return}O(),S(),g(o.trim()).then(function(s){if(c(),s.data.total===0){l("Sorry, there are no images matching your search query. Please try again!");return}x(s.data.hits)}).catch(function(s){c(),l(s.message)})}
//# sourceMappingURL=index.js.map
