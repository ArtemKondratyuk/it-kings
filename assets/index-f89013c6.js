(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const s={openReweuBtn:document.querySelector("[data-reweu-open]"),closeReweuBtn:document.querySelector("[data-reweu-close]"),reweu:document.querySelector("[data-reweu]")};s.openReweuBtn.addEventListener("click",o),s.closeReweuBtn.addEventListener("click",o);function o(){s.reweu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn.addEventListener("click",o),s.closeModalBtn.addEventListener("click",o);function o(){s.modal.classList.toggle("is-hidden")}})();(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open"),document.body.classList.toggle("no-scroll");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",n),l.addEventListener("click",n)})();$(".review-responsive").slick({dots:!0,arrows:!1,mobileFirst:!0,infinite:!1,speed:300,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".products-responsive").slick({dots:!0,infinite:!1,arrows:!1,mobileFirst:!0,adaptiveHeight:!0,speed:300,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});
