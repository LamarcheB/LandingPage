/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
*/

const sections = document.querySelectorAll('section');
const navBarList = document.querySelector('#navbar__list');

// build the nav
function navBar() {
    for (let section of sections) {
        // Create the list item
        const li = document.createElement('li');
        // Create the li innertext via data-nav tag
        li.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
        // li.innerText = `${section.dataset.nav}`;
        li.classList.add("navBarListItem");
        li.id = `navItem-${section.id}`;

        // create an event listener to scroll to section
        li.addEventListener("click", function (e) {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
        // append li and links to navBarList
        navBarList.append(li);
    }
}

function activeSection() {
    // Create a scroller event
    window.addEventListener("scroll", function () {
        // Loop through all sections 
        for (let section of sections) {
            // get Bounding Client Rect for sections 
            const rect = section.getBoundingClientRect();
            // Select navItems by ID
            const navItem = document.querySelector(`#navItem-${section.id}`);
            // Determine when each section should is in focus and add/remove active section
            if (rect.top <= 10 && rect.bottom >= 150) {
                navItem.classList.add('navActiveSection');

            }
            else {
                navItem.classList.remove('navActiveSection');
            }
        }
    })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
navBar();

// Set sections as active
activeSection();




