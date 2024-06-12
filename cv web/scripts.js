document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profile-pic');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const enlargedImg = document.createElement('img');
    enlargedImg.src = profile-pic.src;
    overlay.appendChild(enlargedImg);

    profilePic.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});

//display the content in overlay 
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header ul li a');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlayContent');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId).innerHTML;
            overlayContent.innerHTML = targetContent;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
