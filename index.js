import{i as f,a,S as p}from"./assets/vendor-BkVuWn-o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const n=o=>{f.error({message:o,closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"})},m="54255948-743bb2e2e8edc610c07792dbd",g="https://pixabay.com";a.defaults.baseURL=g;function y(o){return a.get("/api/",{params:{q:o||"",image_type:"photo",key:m,orientation:"horizontal",safesearch:"true"}}).then(function(e){return e.data.total===0&&n("Sorry, there are no images matching your search query. Please try again!"),e.data.hits}).catch(function(e){return e.response?(n(e.response.status),console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?(n("error request"),console.log(e.request)):(n(e.message),console.log("Error",e.message)),[]})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=o=>o.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:s,comments:l,downloads:d})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${r}">
  <img
  class="gallery-image"
  src="${e}"
  alt="${i}"
  />
  </a>
   <ul class="discriptions">
      <li>
        <p class="disc-title">likes</p>
        <p class="disc-text">${t}</p>
      </li>
      <li>
        <p class="disc-title">views</p>
        <p class="disc-text">${s}</p>
      </li>
      <li>
        <p class="disc-title">comments</p>
        <p class="disc-text">${l}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${d}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function L(o){c.insertAdjacentHTML("beforeend",h(o)),new p(".gallery a").refresh()}function b(){c.innerHTML=""}function q(){u.style.display="inline-block"}function O(){u.style.display="none"}const S=document.querySelector(".form");S.addEventListener("submit",x);function x(o){o.preventDefault();const e=o.target,{"search-text":{value:r}}=e.elements;if(!r.trim()){console.log("empty input!"),n("Please fill in the search field!");return}b(),q(),y(r.trim()).then(i=>{O(),L(i)})}
//# sourceMappingURL=index.js.map
