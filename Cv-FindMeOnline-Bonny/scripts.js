document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    const overlay = document.getElementById('imagePopup');

    profilePic.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', function(event) {
        // if (event.target === overlay) {
            overlay.style.display = 'none';
        // }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const overlay = document.getElementById('popupOverlay');
    const closeButton = document.getElementById('closePopup');
    const popupContent = document.getElementById('popupContent');

    const sections = {
        summary: document.getElementById('summary-pop').innerHTML,
        experience: document.getElementById('experience-pop').innerHTML,
        education: document.getElementById('education-pop').innerHTML,
        skills: document.getElementById('skills-pop').innerHTML,
        projects: document.getElementById('projects-pop').innerHTML,
        contact: document.getElementById('contact-pop').innerHTML
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            popupContent.innerHTML = sections[sectionId];
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open'); // Toggle the 'open' class to show/hide the navigation links
}
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const hiddenContent = this.previousElementSibling;

            if (hiddenContent.style.maxHeight) {
                hiddenContent.style.maxHeight = null;
                this.textContent = 'Show More';
            } else {
                hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
                this.textContent = 'Show Less';
            }
        });
    });
});

