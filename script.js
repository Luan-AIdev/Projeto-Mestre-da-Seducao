const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.cta-button').forEach(button => {
    observer.observe(button);
  });
});

//contador//
document.addEventListener("DOMContentLoaded", () => {
  let countdownElement = document.getElementById("contador");
  let countdownTime = 600; // 10 minutos (em segundos)
  
  const updateCountdown = () => {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (countdownTime > 0) {
      countdownTime--;
    } else {
      // Aqui você pode adicionar um efeito quando o contador chegar a zero, como uma mensagem
      countdownElement.textContent = "Oferta Expirada!";
    }
  };
  
  setInterval(updateCountdown, 1000); // Atualiza o contador a cada 1 segundo
});