//ps: foi feito pelo deepseek 
// Função para alternar entre modo claro e escuro
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Salvar preferência no localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Verificar preferência de tema ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  // Verificar tema salvo
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
      document.body.classList.add('dark-mode');
  }
  
  // Atualizar ano no footer
  document.getElementById('ano-atual').textContent = new Date().getFullYear();
  
  // Definir data de validade das promoções (7 dias a partir de hoje)
  const validade = new Date();
  validade.setDate(validade.getDate() + 7);
  document.getElementById('data-validade').textContent = validade.toLocaleDateString('pt-BR');
  
  // Adicionar evento ao formulário de contato
  document.getElementById('form-contato').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envio do formulário
      const nome = document.getElementById('nome').value;
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
      this.reset();
  });
  // Adicionar eventos aos botões de compra na seção de bonecas
document.querySelectorAll('#bonecas .btn-comprar').forEach(btn => {
  btn.addEventListener('click', function() {
      const produtoNome = this.closest('.produto-card').querySelector('h3').textContent;
      const preco = this.closest('.produto-card').querySelector('.preco-atual').textContent;
      
      alert(`Você adicionou ${produtoNome} no valor de ${preco} ao carrinho!`);
      
      // Aqui você poderia adicionar lógica para adicionar ao carrinho de compras
  });
});

// Efeito de hover nos cards de produto
document.querySelectorAll('.produto-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});
  
  // Adicionar eventos aos botões de compra
  const botoesCompra = document.querySelectorAll('.btn-comprar');
  botoesCompra.forEach(botao => {
      botao.addEventListener('click', function() {
          const produto = this.parentElement.querySelector('.destaque').textContent;
          alert(`Você adicionou ${produto} ao carrinho!`);
      });
  });
  
  // Simular carregamento de produtos (poderia ser uma API real)
  setTimeout(() => {
      console.log('Produtos carregados com sucesso!');
  }, 1000);
  
  // Controle do vídeo
  const video = document.getElementById('video-loja');
  if (video) {
      video.addEventListener('play', function() {
          console.log('O vídeo começou a tocar');
      });
      
      video.addEventListener('pause', function() {
          console.log('O vídeo foi pausado');
      });
  }
  
  // Efeito de hover nas categorias
  const categorias = document.querySelectorAll('#lista-categorias li');
  categorias.forEach(categoria => {
      categoria.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.transition = 'transform 0.3s';
      });
      
      categoria.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
      });
  });
});