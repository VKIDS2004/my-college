let homePage = document.getElementById("home-page-container");
let departmentPage = document.getElementById("departments-page-container");
let aboutPage = document.getElementById("about-page-container");
let contactPage = document.getElementById("contact-page-container");

let homeBtn = document.getElementById("homeLink");
let departmentBtn = document.getElementById("departmentLink");
let aboutBtn = document.getElementById("aboutLink");
let contactBtn = document.getElementById("contactLink");

function allHidecontainers(){
    homePage.classList.add("hidden");
    departmentPage.classList.add("hidden");
    aboutPage.classList.add("hidden");
    contactPage.classList.add("hidden");
}

function removeAllActive(){
    homeBtn.classList.contains("active-page")&&homeBtn.classList.remove("active-page");
    departmentBtn.classList.contains("active-page")&&departmentBtn.classList.remove("active-page");
    aboutBtn.classList.contains("active-page")&&aboutBtn.classList.remove("active-page");
    contactBtn.classList.contains("active-page")&&contactBtn.classList.remove("active-page");
}

window.addEventListener("load",switchpage('Home'))


function switchpage(action){
    allHidecontainers();
    removeAllActive();

    switch (action) {
        case "Home":
            document.title = action;
            homePage.classList.remove("hidden");
            homeBtn.classList.add("active-page");
            break;
        case  "Department":
            document.title = action;
            departmentPage.classList.remove("hidden");
            departmentBtn.classList.add("active-page")
            break;
        
        case "About":
            document.title = action;
            aboutPage.classList.remove("hidden");
            aboutBtn.classList.add("active-page");
            break;
        case "Contact":
            document.title = "Contact"
            contactPage.classList.remove("hidden");
            contactBtn.classList.add("active-page");
            break;
    }
}

let a =document.getElementsByClassName("respon-nav")[0];
let b =document.getElementsByClassName("layout_model")[0];

function openModel(){
    b.classList.add("open");
    a.classList.add("open-nav");
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' ) {
            closeModel();
        }
      });
       
}

function closeModel(){
    a.classList.remove("open-nav");
    b.classList.remove("open");
   

}
function nav_bar_res(){
    if(a.classList.contains("open-nav")){
       closeModel();
    }
    else{
        openModel();
    }
}


// const hgt = document.getElementById("body").getBoundingClientRect().height;
// // b.height = height;
// document.getElementById("layout").height = hgt;

  

