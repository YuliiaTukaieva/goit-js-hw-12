import{a as h,S as p}from"./assets/vendor-00b21d7e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="45147494-75a7f96365cbfb286af0bc26b",g="https://pixabay.com/api/?";async function b(t,o,n=15){try{return(await h.get(g,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}catch(s){throw console.error("Error fetching images:",s),s}}function L(t,o){const n=t.map(e=>`
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
    `).join("");o.insertAdjacentHTML("beforeend",n),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const v=document.querySelector("#search-form"),d=document.querySelector(".gallery"),a=document.querySelector(".load-more"),f=document.querySelector(".loading");let i=1,l="";const u=15;v.addEventListener("submit",async t=>{t.preventDefault(),l=t.target.elements.query.value.trim(),i=1,d.innerHTML="",a.classList.add("hidden"),l!==""&&await m()});a.addEventListener("click",m);async function m(){try{f.classList.remove("hidden");const t=await b(l,i,u);if(t.hits.length===0&&i===1){alert("No images found. Please try a different query.");return}L(t.hits,d),i+=1,i>Math.ceil(t.totalHits/u)?(a.classList.add("hidden"),alert("We're sorry, but you've reached the end of search results.")):a.classList.remove("hidden"),w()}catch(t){console.error(t)}finally{f.classList.add("hidden")}}function w(){const{height:t}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
