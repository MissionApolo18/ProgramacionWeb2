function showPlatformContent() {
    const platform = document.getElementById('platform').value;
    const xboxContent = document.getElementById('xbox-content');
    const pspContent = document.getElementById('psp-content');
    const nintendoContent = document.getElementById('nintendo-content');

    // Ocultar todas las secciones
    xboxContent.style.display = 'none';
    pspContent.style.display = 'none';
    nintendoContent.style.display = 'none';

    // Mostrar la sección correspondiente
    if (platform === 'xbox') {
        xboxContent.style.display = 'block';
    } else if (platform === 'psp') {
        pspContent.style.display = 'block';
    } else if (platform === 'nintendo') {
        nintendoContent.style.display = 'block';
    }
}
