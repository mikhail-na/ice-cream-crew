!function(){var e,t,o,n,c,d,a,l;e="data-modal-open",t="data-modal-close",o="is-hidden",n=[],document.querySelectorAll("[".concat(e,"]")).forEach((function(o){var c={opener:o,modal:document.getElementById(o.getAttribute(e))};c.modal&&(c.close=c.modal.querySelector("[".concat(t,"]")),n.push(c))})),n.forEach((function(e){e.opener.addEventListener("click",(function(){e.modal.classList.remove(o)})),e.close.addEventListener("click",(function(){e.modal.classList.contains(o)||e.modal.classList.add(o)}))})),c=document.querySelector(".js-menu-container"),d=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),l=function(){var e="true"===d.getAttribute("aria-expanded")||!1;d.setAttribute("aria-expanded",!e),c.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},d.addEventListener("click",l),a.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(c.classList.remove("is-open"),d.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.fdf46fcc.js.map
