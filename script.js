document.addEventListener("DOMContentLoaded", () => {
  // === INTERSECTION OBSERVER ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('.cta-button').forEach(button => {
    observer.observe(button);
  });

  // === CONTADOR ===
  const countdownElement = document.getElementById("contador");
  let countdownTime = 600; // 10 minutos em segundos

  const updateCountdown = () => {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      countdownElement.textContent = "Oferta Expirada!";
    }
  };

  setInterval(updateCountdown, 1000);
});