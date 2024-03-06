let MenuBtnMobileEl = document.getElementById("Menu-btn-Mobile"); // this selects caret down.
let MenuBtnMobileElOpenBoolean = false;
let mobileMenuNavEl = document.getElementById("mobile-menu-nav") // this id is of class mobile menu container.

MenuBtnMobileEl.addEventListener("click",()=>{
    if(MenuBtnMobileElOpenBoolean){
        // mobileMenuNavEl.style.display="none";
        mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolean=false;
    }
    else{
        // mobileMenuNavEl.style.display="block";
        mobileMenuNavEl.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolean=true;
    }
})

let mobileNavcloseEl = document.getElementById("mobile-Nav-close")

mobileNavcloseEl.addEventListener("click",()=>{
    // mobileMenuNavEl.style.display="none";
    mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileElOpenBoolean=false;
})

/* Tutorial-btn */

const NestedNavigationContainer = document.getElementById("nested-navigation-container_id"); 
let TutorialEl = document.getElementById("Tutorial-btn");

TutorialEl.addEventListener("click", () => {
    // alert('tutorial-btn clicked');
    TutorialEl.classList.toggle("bg-black");
    TutorialEl.classList.toggle("text-white");
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden");
});

/* xmark_nested_navigation_container */

let xmark = document.getElementById("xmark_nested_navigation_container");

xmark.addEventListener("click", ()=> {
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden");
});
