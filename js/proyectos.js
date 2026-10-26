// Filtros de la página de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.filtro');
    const tarjetas = document.querySelectorAll('.tarjeta-proyecto');

    function filtrar(categoria) {
        let indiceVisible = 0;

        tarjetas.forEach((tarjeta) => {
            const coincide = categoria === 'todos' || tarjeta.dataset.categoria === categoria;

            // Limpia la animación anterior para poder repetirla
            tarjeta.classList.remove('reaparece');

            if (coincide) {
                tarjeta.classList.remove('oculta');

                // Fuerza un "reflow" para reiniciar la animación de entrada
                void tarjeta.offsetWidth;

                // Entrada escalonada: cada tarjeta aparece un poco después de la anterior
                tarjeta.style.animationDelay = `${indiceVisible * 0.1}s`;
                tarjeta.classList.add('reaparece');
                indiceVisible++;
            } else {
                tarjeta.classList.add('oculta');
            }
        });
    }

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            // Actualiza el botón activo
            botones.forEach((b) => {
                b.classList.remove('activo');
                b.setAttribute('aria-pressed', 'false');
            });
            boton.classList.add('activo');
            boton.setAttribute('aria-pressed', 'true');

            filtrar(boton.dataset.filtro);
        });
    });
});