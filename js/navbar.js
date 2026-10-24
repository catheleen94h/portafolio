document.addEventListener("DOMContentLoaded", () => {
    fetch('componentes/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenedor-navbar').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la navbar:', error));


  document.addEventListener("click", (e) => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("menu-links");
    if (toggle && links) {
        if (toggle.contains(e.target)) {
            links.classList.toggle("active");
        } else if (!links.contains(e.target)) {
            links.classList.remove("active");
        }
    }
});

});