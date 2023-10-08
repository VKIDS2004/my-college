let homePage = document.getElementById("home-page-container");
let departmentPage = document.getElementById("departments-page-container");
let aboutPage = document.getElementById("about-page-container");
let contactPage = document.getElementById("contact-page-container");

let homeBtn = document.getElementsByClassName("homeLink");
let departmentBtn = document.getElementsByClassName("departmentLink");
let aboutBtn = document.getElementsByClassName("aboutLink");
let contactBtn = document.getElementsByClassName("contactLink");

let responNav =document.getElementsByClassName("respon-nav")[0];
let layoutModel =document.getElementsByClassName("layout_model")[0];


function allHidecontainers(){
    homePage.classList.add("hidden");
    departmentPage.classList.add("hidden");
    aboutPage.classList.add("hidden");
    contactPage.classList.add("hidden");
}

function removeAllActive(){
for(let i =0;i<2;i++){
    homeBtn[i].classList.contains("active-page")&&homeBtn[i].classList.remove("active-page");
    departmentBtn[i].classList.contains("active-page")&&departmentBtn[i].classList.remove("active-page");
    aboutBtn[i].classList.contains("active-page")&&aboutBtn[i].classList.remove("active-page");
    contactBtn[i].classList.contains("active-page")&&contactBtn[i].classList.remove("active-page");
}
}

function openModel(){
    layoutModel.classList.add("open");
    responNav.classList.add("open-nav");
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' ) {
            closeModel();
        }
      });
       
    //   const hgt = document.getElementById("body").getBoundingClientRect().height;
    // layoutModel.style.height = `${hgt}px`;
      
}

function closeModel(){
    responNav.classList.remove("open-nav");
    layoutModel.classList.remove("open");
}

window.addEventListener("load",switchpage('Home'))


function switchpage(action){
    allHidecontainers();
    removeAllActive();

    
    switch (action) {
        case "Home":
            document.title = action;
            homePage.classList.remove("hidden");
            homeBtn[0].classList.add("active-page");
            homeBtn[1].classList.add("active-page");
            closeModel();
            break;
        case  "Department":
            document.title = action;
            departmentPage.classList.remove("hidden");
            departmentBtn[0].classList.add("active-page");
            departmentBtn[1].classList.add("active-page");
            closeModel();
            break;
        
        case "About":
            document.title = action;
            aboutPage.classList.remove("hidden");
            aboutBtn[0].classList.add("active-page");
            aboutBtn[1].classList.add("active-page");
            closeModel();
            break;
        case "Contact":
            document.title = "Contact"
            contactPage.classList.remove("hidden");
            contactBtn[0].classList.add("active-page");
            contactBtn[1].classList.add("active-page");
            closeModel();
            break;
        }
        
    
}


function nav_bar_res(){
    if(responNav.classList.contains("open-nav")){
       closeModel();
    }
    else{
        openModel();
    }
}



// b.height = height;
// document.getElementById("layout").height = hgt;

  

