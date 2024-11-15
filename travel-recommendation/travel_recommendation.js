// Atualiza o relógio
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
} 


// Inicializa o relógio
setInterval(updateClock, 1000);
updateClock();

// Funções de busca
function executeSearch() {
  alert('Funcionalidade de busca em desenvolvimento.');
}

function clearResults() {
  document.getElementById('searchInput').value = '';
  alert('Resultados limpos.');
}
 // Adicionando animação ao aparecer
const aboutItems = document.querySelectorAll('.about-item');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    aboutItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            item.classList.add('fade-in');
        } else {
            item.classList.remove('fade-in');
        }
    });
});
 
// Adicionando funcionalidade ao formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Coletando os dados do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const date = document.getElementById('date').value;

  // Exibindo os dados em um alerta (ou você pode enviar para um servidor)
  alert(`Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}\nData: ${date}`);

  // Limpa o formulário após o envio
  this.reset();
});
