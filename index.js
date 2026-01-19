import{a as c,S as f,i as p}from"./assets/vendor-CNqCr-V-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="54255948-743bb2e2e8edc610c07792dbd",h="https://pixabay.com";c.defaults.baseURL=h;function y(r){return c.get("/api/",{params:{q:r||"",image_type:"photo",key:m,orientation:"horizontal",safesearch:!0}}).then(i=>i.data)}const a=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a"),L=r=>r.map(({webformatURL:i,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:d})=>`
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
        <p class="disc-text">${n}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${d}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function b(r){a.insertAdjacentHTML("beforeend",L(r)),g.refresh()}function x(){a.innerHTML=""}function O(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}const l=r=>{p.error({message:r,closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"})},P=document.querySelector(".form");P.addEventListener("submit",$);function $(r){r.preventDefault();const i=r.target,{"search-text":{value:o}}=i.elements;if(!o.trim()){l("Please fill in the search field!");return}x(),O(),y(o.trim()).then(function(s){if(console.log(s),s.total===0){l("Sorry, there are no images matching your search query. Please try again!");return}b(s.hits)}).catch(function(s){l(s.message)}).finally(function(){S()})}
//# sourceMappingURL=index.js.map
