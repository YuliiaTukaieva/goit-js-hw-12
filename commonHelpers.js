import{a as g,S as p,i}from"./assets/vendor-60645f60.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const y="45147494-75a7f96365cbfb286af0bc26b",b="https://pixabay.com/api/?";async function w(t,r,n=15){try{return(await g.get(b,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n}})).data}catch(s){throw console.error("Error fetching images:",s),s}}function L(t,r){const n=t.map(e=>`
        <div class="photo-card">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${e.likes}</p>
                <p class="info-item"><b>Views</b> ${e.views}</p>
                <p class="info-item"><b>Comments</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
            </div>
        </div>
    `).join("");r.insertAdjacentHTML("beforeend",n),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const v=document.querySelector("#search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".load-more"),f=document.querySelector(".loading");let a=1,d="";const m=15;v.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements.query.value.trim(),a=1,u.innerHTML="",c.classList.add("hidden"),d===""){i.error({position:"topRight",messageColor:"white",backgroundColor:"red",title:"Error",message:"Search field cannot be empty!"});return}await h()});c.addEventListener("click",h);async function h(){try{f.classList.remove("hidden");const t=await w(d,a,m);if(t.hits.length===0&&a===1){i.warning({position:"topRight",messageColor:"white",backgroundColor:"Maroon",title:"Warning",message:"No images found. Please try another query."});return}L(t.hits,u),a+=1,a>Math.ceil(t.totalHits/m)?(c.classList.add("hidden"),i.info({position:"topRight",messageColor:"white",backgroundColor:"Cyan",title:"Info",message:"We're sorry, but you've reached the end of search results."})):c.classList.remove("hidden"),C()}catch(t){t.response?i.error({position:"topRight",messageColor:"white",backgroundColor:"Salmon",title:"Error",message:"An error occurred. Please try again."}):i.error({position:"topRight",messageColor:"white",backgroundColor:"Salmon",title:"Error",message:"NETWORK error. Please check your internet connection and try again."})}finally{f.classList.add("hidden")}}function C(){const{height:t}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
