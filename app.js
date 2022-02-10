var ctainers;
function initDrawers() {
  ctainers = document.querySelectorAll(".ctainer");
  setHeights();
  wireUpTriggers();
  window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
  ctainers.forEach(ctainer => {
    let content = ctainer.querySelector(".content");
    content.removeAttribute("aria-hidden");
    let heightOfContent = content.getBoundingClientRect().height;
    ctainer.style.setProperty("--containerHeight", `${heightOfContent}px`);
    setTimeout(e => {
      ctainer.classList.add("height-is-set");
      content.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

function wireUpTriggers() {
  ctainers.forEach(ctainer => {
    let btn = ctainer.querySelector(".trigger");
    let content = ctainer.querySelector(".content");
    btn.addEventListener("click", () => {
      ctainer.setAttribute(
        "data-drawer-showing",
        ctainer.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
      );
      content.setAttribute(
        "aria-hidden",
        content.getAttribute("aria-hidden") === "true" ? "false" : "true"
      );
    });
  });
}


 const burger = document.querySelector('.hamburger')
 const closebtn = document.querySelector('.close-btn')
 const nav = document.querySelector('.nav-mob')

 burger.addEventListener ('click', openNav); 

 closebtn.addEventListener('click', closeNav)

function openNav(e) {
    e.preventDefault()
    nav.classList.replace('hidden','flex')
}
function closeNav(e) {
    e.preventDefault()
    nav.classList.replace('flex', 'hidden')
}





let tabBtns = document.querySelectorAll('.list-title');
tabBtns.forEach(function(tabBtn, index){
  tabBtn.addEventListener('click', function(){
     let currentTabData = document.querySelector('.gallery-image[data-tab-content="' + this.dataset.tabTrigger + '"]');

      // remove classess
      document.querySelector('.gallery-image.is-open').classList.remove('is-open');
      document.querySelector('.list-title.is-active').classList.remove('is-active');

      // add classes
      currentTabData.classList.add('is-open');
      this.classList.add('is-active');
  });
});




  




