import{a,i as n}from"./assets/vendor-rn7jRtGp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u="54255948-743bb2e2e8edc610c07792dbd",d="https://pixabay.com";a.defaults.baseURL=d;function f(s){return a.get("/api/",{params:{q:s||"",image_type:"photo",key:u,orientation:"horizontal",safesearch:"true"}}).then(function(r){return r.data.total===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,close:!1,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutLeft"}),r.data.hits}).catch(function(r){console.log(r)})}const p=document.querySelector(".gallery"),m=s=>s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:c,downloads:l})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
  <img
  class="gallery-image"
  src="${r}"
  alt="${o}"
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
        <p class="disc-text">${c}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${l}</p>
      </li>
    </ul>
  </li>
  `).join(" ");function y(s){p.insertAdjacentHTML("beforeend",m(s))}const g=document.querySelector(".form");g.addEventListener("submit",h);function h(s){s.preventDefault();const r=s.target,{"search-text":{value:i}}=r.elements;if(!i.trim()){console.log("empty input!");return}f(i.trim()).then(o=>{y(o)})}
//# sourceMappingURL=index.js.map
