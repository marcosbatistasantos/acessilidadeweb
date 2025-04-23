const toggleContrastButton = document.getElementById('toggle-contrast');
const toggleDarkModeButton = document.getElementById('toggle-darkmode');

// Função para ativar/desativar o alto contraste
toggleContrastButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Função para ativar/desativar o modo escuro
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});