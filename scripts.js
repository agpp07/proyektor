document.addEventListener('DOMContentLoaded', () => {
    const sakuraContainer = document.createElement('div');
    sakuraContainer.classList.add('sakura-container');
    document.body.appendChild(sakuraContainer);

    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
        sakura.style.backgroundImage = 'url("gambar/sakura-petal.png")';
        sakura.style.backgroundSize = 'contain';
        sakura.style.width = '30px'; // Sesuaikan ukuran sesuai gambar
        sakura.style.height = '30px'; // Sesuaikan ukuran sesuai gambar
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


document.addEventListener("DOMContentLoaded", function() {
    const sakuraContainer = document.getElementById('sakura-container');

    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');

        // Atur posisi awal bunga sakura secara acak
        sakura.style.left = Math.random() * window.innerWidth + 'px';

        // Atur durasi animasi secara acak antara 5 hingga 15 detik
        sakura.style.animationDuration = Math.random() * 10 + 5 + 's';

        // Tambahkan bunga sakura ke container
        sakuraContainer.appendChild(sakura);

        // Hapus bunga sakura setelah animasi selesai
        sakura.addEventListener('animationend', function() {
            sakura.remove();
        });
    }

    // Buat bunga sakura setiap 300ms
    setInterval(createSakura, 300);
});


document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    // Fungsi untuk memutar musik setelah interaksi pengguna
    function playMusic() {
        audio.play().then(() => {
            console.log('Musik berhasil diputar.');
        }).catch(error => {
            console.log('Gagal memutar musik:', error);
        });
    }

    // Memutar musik setelah pengguna mengklik di mana saja di halaman
    document.body.addEventListener('click', () => {
        playMusic();
    });

    // Memutar musik setelah pengguna melakukan scroll
    window.addEventListener('scroll', () => {
        playMusic();
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
