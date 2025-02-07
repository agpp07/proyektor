document.addEventListener('DOMContentLoaded', () => {
    // Sakura animation script
    const sakuraContainer = document.createElement('div');
    sakuraContainer.classList.add('sakura-container');
    document.body.appendChild(sakuraContainer);

    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
        sakuraContainer.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 5000);
    }

    setInterval(createSakura, 300);
});


//swiper js
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

// Flip Card Logic
document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped'); // Toggle class 'flipped' saat card diklik
        });
    });
});

