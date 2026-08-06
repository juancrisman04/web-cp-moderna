(function () {
    const {
        onReady,
        setupChatbot,
        setupHeroVideo,
        setupLazyMedia,
        setupReveal,
        setupSideMenu,
        setupSmoothAnchors,
        setupSubmenu
    } = window.CleanPel;

    onReady(() => {
        setupLazyMedia({ eagerCount: 4 });
        setupChatbot();
        setupSideMenu();
        setupSubmenu();
        setupSmoothAnchors();
        setupHeroVideo({ forceMuted: true });
        setupReveal('.solution-card, .team-member, .stat, .value-card, .alt-hero-text, .alt-hero-image, .proof-card, .process-card, .sector-card');
        setupCounters();
        setupCarousel('.brands-slider', { speed: 60, reverse: true });
        setupCarousel('.clients-slider', { speed: 60 });
    });

    function setupCounters() {
        const counters = document.querySelectorAll('.counter');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });

        counters.forEach((counter) => observer.observe(counter));
    }

    function animateCounter(counter) {
        const target = Number(counter.dataset.target || 0);
        const suffix = counter.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            counter.textContent = `${Math.ceil(target * progress)}${suffix}`;

            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    function setupCarousel(selector, { speed = 50, reverse = false } = {}) {
        const slider = document.querySelector(selector);
        if (!slider || slider.dataset.carouselReady === 'true') return;

        slider.dataset.carouselReady = 'true';
        slider.insertAdjacentHTML('beforeend', slider.innerHTML);

        const totalWidth = slider.scrollWidth / 2;
        if (!totalWidth) return;

        let position = reverse ? -totalWidth : 0;
        let previous = performance.now();

        function step(now) {
            const delta = (now - previous) / 1000;
            previous = now;
            position += (reverse ? speed : -speed) * delta;

            if (!reverse && position <= -totalWidth) position += totalWidth;
            if (reverse && position >= 0) position -= totalWidth;

            slider.style.transform = `translate3d(${position}px, 0, 0)`;
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }
}());
