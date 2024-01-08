// Show Menu
const ShowMenu = (toggleId, navbarId, bodyId) => {
    const Toggle = document.getElementById(toggleId);
    const Navbar = document.getElementById(navbarId);
    const BodyGap = document.getElementById(bodyId);

    if (Toggle && Navbar) {
        Toggle.addEventListener('click', () => {
            Navbar.classList.toggle('show');
            Toggle.classList.toggle('rotate');
            BodyGap.classList.toggle('expander');
        });
    }
}
ShowMenu('nav-toggle', 'navbar', 'body');

// Link Active Color
const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));