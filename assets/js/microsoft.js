// Making sure document is loaded
document.addEventListener("DOMContentLoaded", function() { 
    
    // Getting  Menu Dropdown Variables
    var allMicrosoftItem = document.querySelector("#all-microsoft");
    var allMicrosoftBtn = allMicrosoftItem.querySelector(".menu-has__children--link");
    var allMicrosoftSubmenu = allMicrosoftItem.querySelector(".menu-submenu");



    // Search Popup Variables
        // Search Buttons
        var searchItem = document.querySelector(".microsoft-search__button");
        var searchBtn = searchItem.querySelector("a");

    var nav = document.querySelector(".microsoft-header__nav");
    var miscellaneous = document.querySelector(".microsoft-header__miscellaneous");
    var form = document.querySelector(".microsoft-header__form");
    var input = document.querySelector(".microsoft-input");
    var cancel = document.querySelector(".form-cancel");

        // Search Mobile Buttons
        var mobileSearchBtn = document.querySelector(".microsoft-header__mobile--search");
        var mobileBtnContainer = document.querySelector(".microsoft-header__mobile");

    // Mobile Menu Dropdown Variables
    var mobileDropdownLinks = document.querySelectorAll(".microsoft-mobile__link.menu-has__children--link");
    var mobileBtn = document.querySelector(".microsoft-header__mobile--button");
    var mobileMenu = document.querySelector(".microsoft-mobile__menu");


    // Preventing form from submitting
 

    // Mobile Menu Functionality

    mobileBtn.addEventListener("click",()=>{
        if(mobileMenu.classList.contains("open")){
            closeMobileMenu();
        }else{
            openMobileMenu();
        }
    })


 

    // Mobile Dropdown Functionality
    mobileDropdownLinks.forEach((link)=>{
        link.addEventListener("click",()=>{
            var mobileMenu = link.parentElement.querySelector(".microsoft-mobile__submenu");
            if(mobileMenu.classList.contains("open")){
                closeMobileDropdown(link,mobileMenu);
            }else{
                openMobileDropdown(link,mobileMenu);
            }
        });
    });







    // Menu Dropdown Functionality
    allMicrosoftBtn.addEventListener("click",()=>{
        if(allMicrosoftSubmenu.classList.contains("closed")){
           openSubmenu();
        }else{
           closeSubmenu();
        }
    });





    // Search Popup Functionality
    searchBtn.addEventListener("click",()=>{
       openSearchbar();
    });
    mobileSearchBtn.addEventListener("click",(e)=>{
        openSearchbar();
    })
    cancel.addEventListener("click",()=>{
        closeSearchbar();
    })
    // End of Search Popup Functionality






    document.addEventListener("click",(e)=>{
        // Closing Submenu if outside is clicked
        if(allMicrosoftItem !== e.target && !allMicrosoftItem.contains(e.target)){
            closeSubmenu();
        }
        // closing Searchbar if outside is clicked
        if(form !== e.target && !form.contains(e.target) && searchBtn !== e.target && mobileSearchBtn !== e.target){
             closeSearchbar();
        }
        // Closing Mobile menu if outside is clicked
       if(mobileMenu !== e.target && !mobileMenu.contains(e.target) && mobileBtn !== e.target){
            closeMobileMenu();
        } 
    });






    /***** FUNCTIONS  *****/
    // Function to open search bar
    function openSearchbar(){
        form.classList.add("open");
        nav.classList.add("search-display");
        miscellaneous.classList.add("search-display");
        mobileBtnContainer.classList.add("search-display");
        input.focus();
        
    }
    // Function to close search bar
    function closeSearchbar(){
        form.classList.remove("open");
        nav.classList.remove("search-display");
        miscellaneous.classList.remove("search-display");
        mobileBtnContainer.classList.remove("search-display");
        input.blur();
    }





  
    // Function to close Submenu
    function closeSubmenu(){
        allMicrosoftBtn.classList.remove("focused");
        allMicrosoftSubmenu.classList.remove("opened");
        allMicrosoftSubmenu.classList.add("closed");
    }
    // Function to open Submenu
    function openSubmenu(){
        allMicrosoftBtn.classList.add("focused");
        allMicrosoftSubmenu.classList.remove("closed");
        allMicrosoftSubmenu.classList.add("opened");
    }



    // Function to open mobile dropdown
    function openMobileDropdown(link,mobileMenu){
        // Closing all open dropdowns before opening new one
        mobileDropdownLinks.forEach((mobile)=>{
            var menu = mobile.parentElement.querySelector(".microsoft-mobile__submenu");
            closeMobileDropdown(mobile,menu);
        })
        mobileMenu.classList.add("open");
        var openIcon = " <path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/>";
        link.querySelector("svg").innerHTML = openIcon;
    }
    // Function to close mobile dropdown 
    function closeMobileDropdown(link,mobileMenu){
        mobileMenu.classList.remove("open");
        var closeIcon = "  <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>";
        link.querySelector("svg").innerHTML = closeIcon;
    }
    
  


    // Function to open mobile menu
    function openMobileMenu(){
        var closeIcon = "<path fill-rule='evenodd' d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>";
        mobileMenu.classList.add("open");
        mobileBtn.querySelector("svg").innerHTML = closeIcon;
    }

    // Function to close mobile menu
    function closeMobileMenu(){
        var openIcon = "<path fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/>";
        mobileMenu.classList.remove("open");
        mobileBtn.querySelector("svg").innerHTML = openIcon;
    }


});