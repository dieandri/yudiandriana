// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Tutup menu saat link diklik (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ===== FORM KONTAK =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Ambil data dari form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validasi sederhana
        if (!name || !email || !message) {
            showMessage('⚠️ Semua field harus diisi!', '#fef2f2', '#991b1b');
            return;
        }

        // Simulasi pengiriman berhasil
        showMessage(
            '✅ Pesan berhasil dikirim! Terima kasih ' + name + ', saya akan segera merespons.',
            '#d1fae5',
            '#065f46'
        );

        // Reset form
        contactForm.reset();

        // Hapus pesan setelah 5 detik
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    });
}

function showMessage(text, bgColor, textColor) {
    formMessage.innerHTML = `
        <div style="
            background: ${bgColor};
            color: ${textColor};
            padding: 14px 20px;
            border-radius: 12px;
            font-weight: 500;
            text-align: center;
        ">
            ${text}
        </div>
    `;
}

// ===== SCROLL ANIMASI (deteksi elemen masuk layar) =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ===== CONSOLE GREETING =====
console.log('🚀 Website Portofolio Dideandi');
console.log('💻 Dibuat dengan ❤️ menggunakan HTML, CSS, & JavaScript');
console.log('📧 Hubungi: dideandi@email.com');