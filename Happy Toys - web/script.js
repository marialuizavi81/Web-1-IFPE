// Configurações globais
const CONFIG = {
    carousel: {
      autoPlay: true,
      interval: 5000
    }
  };
  
  // Função principal quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initDynamicContent();
    initContactForm();
    initProductInteractions();
    initVideoControls();
    initCategoryHover();
    initCarousel();
  });
  
  // Tema claro/escuro
  function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
  
    themeToggle.addEventListener('click', toggleTheme);
    
    // Aplicar tema salvo
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  // Conteúdo dinâmico
  function initDynamicContent() {
    // Ano atual no footer
    const yearElement = document.getElementById('ano-atual');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Data de validade das promoções
    const validityElement = document.getElementById('data-validade');
    if (validityElement) {
      const validityDate = new Date();
      validityDate.setDate(validityDate.getDate() + 7);
      validityElement.textContent = validityDate.toLocaleDateString('pt-BR');
    }
  }
  
  // Formulário de contato
  function initContactForm() {
    const form = document.getElementById('form-contato');
    if (!form) return;
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('nome').value;
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    });
  }
  
  // Interações com produtos
  function initProductInteractions() {
    // Botões de compra
    document.querySelectorAll('.btn-comprar').forEach(btn => {
      btn.addEventListener('click', function() {
        const productCard = this.closest('.produto-card, .carrossel-item');
        const productName = productCard?.querySelector('h3')?.textContent;
        const price = productCard?.querySelector('.preco-atual, .preco')?.textContent;
        
        if (productName && price) {
          alert(`Você adicionou ${productName} (${price}) ao carrinho!`);
          // Aqui você pode adicionar a lógica para o carrinho de compras
        }
      });
    });
  
    // Efeito hover nos produtos
    document.querySelectorAll('.produto-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Controles de vídeo
  function initVideoControls() {
    const video = document.getElementById('video-loja');
    if (!video) return;
  
    video.addEventListener('play', () => console.log('Vídeo iniciado'));
    video.addEventListener('pause', () => console.log('Vídeo pausado'));
  }
  
  // Efeito hover nas categorias
  function initCategoryHover() {
    document.querySelectorAll('#lista-categorias li').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
    });
  }
  
  // Carrossel de produtos
  function initCarousel() {
    const carousel = document.querySelector('.carrossel');
    if (!carousel) return;
  
    const items = document.querySelectorAll('.carrossel-item');
    const prevBtn = document.querySelector('.carrossel-btn.anterior');
    const nextBtn = document.querySelector('.carrossel-btn.proximo');
    const dotsContainer = document.querySelector('.carrossel-indicadores');
    
    let currentIndex = 0;
    let itemWidth = items[0].offsetWidth + 20; // Largura do item + gap
    let autoplayInterval;
  
    // Criar indicadores
    items.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('carrossel-indicador');
      if (index === 0) dot.classList.add('ativo');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer?.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.carrossel-indicador');
  
    // Função para navegar entre slides
    function goToSlide(index) {
      currentIndex = (index + items.length) % items.length;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      
      // Atualizar indicadores
      dots.forEach((dot, i) => {
        dot.classList.toggle('ativo', i === currentIndex);
      });
    }
  
    // Eventos dos botões
    prevBtn?.addEventListener('click', () => {
      resetAutoplay();
      goToSlide(currentIndex - 1);
    });
  
    nextBtn?.addEventListener('click', () => {
      resetAutoplay();
      goToSlide(currentIndex + 1);
    });
  
    // Iniciar autoplay
    function startAutoplay() {
      if (CONFIG.carousel.autoPlay) {
        autoplayInterval = setInterval(() => {
          goToSlide(currentIndex + 1);
        }, CONFIG.carousel.interval);
      }
    }
  
    // Resetar autoplay
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
  
    // Pausar autoplay no hover
    const container = document.querySelector('.carrossel-container');
    container?.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    container?.addEventListener('mouseleave', startAutoplay);
  
    // Atualizar ao redimensionar
    window.addEventListener('resize', () => {
      itemWidth = items[0].offsetWidth + 20;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });
  
    // Iniciar
    startAutoplay();
  }