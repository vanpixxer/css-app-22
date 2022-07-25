/* get access to DOM element - ie. select the backdrop of the modal */
var backdrop = document.querySelector('.backdrop');

/* change .backdrop style from none to visible */
/*backdrop.style.display = 'block';*/

var modal = document.querySelector('.modal');
/* create event listener for the 'Choose Plan' buttons */
var selectPlanButtons = document.querySelectorAll('.plan button');
/* we need to loop through the array of 3 buttons and execute an action for each of them */
for (var i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        //modal.className = 'open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}
/* now when you click one of the 'Choose Plan' buttons the modal appears */
/* next we need a way to remove the modal  by clicking the 'No!' button */
var modalNoButton = document.querySelector(".modal__action--negative");

/*backdrop.addEventListener("click", closeModal); */
if (modalNoButton) {
     modalNoButton.addEventListener("click", closeModal);
}


function closeModal() {
   // backdrop.style.display = "none";
    //modal.style.display = "none";
    if (modal) {
      modal.classList.remove('open');
    }  
    backdrop.classList.remove('open');
}



/* open and close hamburger menu */
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

backdrop.addEventListener('click', function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open');
     backdrop.classList.add('open');
})