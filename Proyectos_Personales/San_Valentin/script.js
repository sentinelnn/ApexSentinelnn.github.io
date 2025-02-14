// Fecha objetivo
const targetDate = new Date('2025-02-14T12:00:00').getTime();

// Actualiza la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula los días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra los resultados
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Si la cuenta regresiva llega a cero
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡Es hora!";
        // Crear y mostrar el botón
        const button = document.createElement('button');
        button.innerText = "Abreme";
        button.onclick = () => window.location.href = 'loging/index.html';
        document.querySelector('.container').appendChild(button);
    }
}, 1000);
