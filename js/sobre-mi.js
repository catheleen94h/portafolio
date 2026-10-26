
document.getElementById('btn-descargar-cv').addEventListener('click', () => {
    const enlace = document.createElement('a');
    enlace.href = 'assets/docs/CV - Diana Hinestroza-10-26.pdf';
    enlace.download = 'CV - Diana Hinestroza-10-26.pdf';
    enlace.click();
});

document.getElementById('btn-proyectos').addEventListener('click', () => {
    const enlace = document.createElement('a');
    enlace.href = 'componentes/proyectos.html';
    enlace.click();
});