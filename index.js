import{a as d,S as m,i as c}from"./assets/vendor-BAvAuoY_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const p="52839565-5f9bdab0af4c39050e16b40ec",h="https://pixabay.com/api/";function y(e){const t={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(h,{params:t}).then(i=>i.data.hits).catch(i=>{throw console.error("Error fetching images from Pixabay:",i),new Error("Failed to fetch images from Pixabay.")})}const s=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(e){const t=e.tags.split(",").slice(0,3).join(",");return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}" 
    data-alt="${t}">  
        <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${t}"
            width="360"
            />
        <div class="info">
            <p class="info-item"><b>Likes</b> ${e.likes}</p>
            <p class="info-item"><b>Views</b> ${e.views}</p>
            <p class="info-item"><b>Comments</b> ${e.comments}</p>
            <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
        </div>
    </a>
    </li>`}function L(e){if(!s){console.error("Gallery container not found in DOM!");return}const t=e.map(b).join("");s.insertAdjacentHTML("beforeend",t),g.refresh()}function w(){s&&(s.innerHTML="")}function E(){n&&n.classList.remove("is-hidden")}function f(){n&&n.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(e){e.preventDefault();const t=e.currentTarget.elements["search-text"].value.toLowerCase().trim();if(t===""){c.error({title:"Error",message:"Enter a search term",position:"topRight"});return}w(),E(),y(t).then(i=>{f(),i.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(i)}).catch(i=>{f(),c.error({title:"Error",message:"Failed to fetch images. Please check your network connection.",position:"topRight"}),console.error("Error:",i.message)}).finally(()=>{u.reset()})}
//# sourceMappingURL=index.js.map
