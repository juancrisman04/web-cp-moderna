(function () {
    const SELECTORS = {
        chatbot: '.chatbot',
        popup: '#chatPopup',
        mobileChatContainer: '#mobileChatContainer',
        sideMenu: '#side-menu',
        menuToggle: '#menuToggle',
        menuClose: '#menu-close',
        submenuToggle: '.submenu-toggle',
        submenu: '#submenu',
        submenuBack: '.submenu-back'
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback, { once: true });
            return;
        }

        callback();
    }

    function toggleChat() {
        const popup = document.querySelector(SELECTORS.popup);
        if (!popup) return;

        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }

    function showAnswer(questionNumber) {
        const answer = document.getElementById(`answer${questionNumber}`);
        if (!answer) return;

        document.querySelectorAll('.answer').forEach((item) => {
            if (item !== answer) item.style.display = 'none';
        });

        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }

    function setupChatbot() {
        const chatbot = document.querySelector(SELECTORS.chatbot);
        const popup = document.querySelector(SELECTORS.popup);
        const mobileContainer = document.querySelector(SELECTORS.mobileChatContainer);
        if (!chatbot || !popup || !mobileContainer) return;

        const mq = window.matchMedia('(max-width: 768px)');

        const move = () => {
            if (mq.matches) {
                if (chatbot.parentElement !== mobileContainer) mobileContainer.appendChild(chatbot);
                chatbot.style.display = 'flex';
                chatbot.style.position = '';
                chatbot.style.bottom = '';
                chatbot.style.right = '';
                return;
            }

            if (chatbot.parentElement !== document.body) document.body.appendChild(chatbot);
            chatbot.style.position = 'fixed';
            chatbot.style.bottom = '30px';
            chatbot.style.right = '40px';
        };

        move();
        mq.addEventListener?.('change', move);
        window.addEventListener('resize', debounce(move, 150), { passive: true });

        document.addEventListener('click', (event) => {
            if (!chatbot.contains(event.target) && popup.style.display === 'block') {
                popup.style.display = 'none';
            }
        });
    }

    function setupSideMenu() {
        const menuToggle = document.querySelector(SELECTORS.menuToggle);
        const sideMenu = document.querySelector(SELECTORS.sideMenu);
        const menuClose = document.querySelector(SELECTORS.menuClose);
        if (!sideMenu) return;

        menuToggle?.addEventListener('click', () => sideMenu.classList.add('active'));
        menuClose?.addEventListener('click', () => sideMenu.classList.remove('active'));
    }

    function setupHeaderState() {
        const header = document.querySelector('.header');
        if (!header) return;

        const update = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
        update();
        window.addEventListener('scroll', update, { passive: true });
    }

    function setupLeadModal() {
        if (document.getElementById('leadModal')) return;

        document.body.insertAdjacentHTML('beforeend', `
            <div class="lead-modal" id="leadModal" aria-hidden="true">
                <div class="lead-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="leadModalTitle">
                    <button class="lead-modal__close" type="button" aria-label="Cerrar modal">&times;</button>
                    <div class="lead-modal__grid">
                        <div class="lead-modal__aside">
                            <span class="modal-kicker"><i class="fa-solid fa-bolt"></i> Respuesta comercial</span>
                            <h2 id="leadModalTitle">Armemos una propuesta para tu institución.</h2>
                            <p>Contanos qué necesitás y un asesor de Clean Pel te contacta con una recomendación concreta de productos, reposición y servicio.</p>
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Diagnóstico según rubro y consumo.</li>
                                <li><i class="fa-solid fa-check"></i> Presupuesto por WhatsApp.</li>
                                <li><i class="fa-solid fa-check"></i> Instalación de dispensadores en comodato.</li>
                            </ul>
                        </div>
                        <form class="lead-modal__form" id="leadForm">
                            <label>Nombre y empresa
                                <input type="text" name="name" placeholder="Ej: Ana - Sanatorio Centro" required>
                            </label>
                            <label>Teléfono
                                <input type="tel" name="phone" placeholder="+54 341..." required>
                            </label>
                            <label>Necesidad principal
                                <select name="need">
                                    <option>Productos de higiene institucional</option>
                                    <option>Dispensadores y servicio técnico</option>
                                    <option>Reposición programada</option>
                                    <option>Máquinas de limpieza</option>
                                    <option>Capacitación o asesoramiento</option>
                                </select>
                            </label>
                            <label>Mensaje
                                <textarea name="message" placeholder="Contanos cantidad de baños, rubro, zona o productos de interés."></textarea>
                            </label>
                            <button class="btn-submit" type="submit">
                                <i class="fa-brands fa-whatsapp"></i> Enviar por WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `);

        const modal = document.getElementById('leadModal');
        const form = document.getElementById('leadForm');
        const closeButton = modal.querySelector('.lead-modal__close');
        const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const open = (event) => {
            event?.preventDefault();
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            modal.querySelector('input')?.focus();
        };

        const close = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('.js-open-quote, [data-open-quote]');
            if (trigger) open(event);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) close();
        });

        closeButton.addEventListener('click', close);

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape' || !modal.classList.contains('is-open')) return;
            close();
        });

        modal.addEventListener('keydown', (event) => {
            if (event.key !== 'Tab') return;
            const focusable = Array.from(modal.querySelectorAll(focusableSelector));
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(form);
            const text = [
                'Hola Clean Pel, quiero solicitar una cotizacion.',
                `Nombre/empresa: ${data.get('name')}`,
                `Telefono: ${data.get('phone')}`,
                `Necesidad: ${data.get('need')}`,
                `Mensaje: ${data.get('message') || 'Sin detalle adicional'}`
            ].join('\n');

            window.open(`https://api.whatsapp.com/send?phone=543412151619&text=${encodeURIComponent(text)}`, '_blank');
            close();
            form.reset();
        });
    }

    function setupSubmenu() {
        const submenuToggle = document.querySelector(SELECTORS.submenuToggle);
        const submenu = document.querySelector(SELECTORS.submenu);
        const submenuBack = document.querySelector(SELECTORS.submenuBack);
        if (!submenuToggle || !submenu || !submenuBack) return;

        submenuToggle.addEventListener('click', () => submenu.classList.add('active'));
        submenuBack.addEventListener('click', () => submenu.classList.remove('active'));
    }

    function setupSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                const targetSelector = anchor.getAttribute('href');
                if (!targetSelector) return;
                if (targetSelector === '#') {
                    event.preventDefault();
                    return;
                }

                const target = document.querySelector(targetSelector);
                if (!target) return;

                event.preventDefault();
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            });
        });
    }

    function setupHeroVideo({ forceMuted = true } = {}) {
        const video = document.querySelector('.hero-video');
        const playBtn = document.querySelector('.play-btn');
        const muteBtn = document.querySelector('.mute-btn');
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        const progressBar = document.querySelector('.progress-bar');
        const timeLabel = document.querySelector('.time');
        if (!video) return;

        if (forceMuted) video.muted = true;
        updateMuteIcon(muteBtn, video.muted);

        const togglePlay = async () => {
            const icon = playBtn?.querySelector('i');

            if (video.paused) {
                try {
                    await video.play();
                    icon?.classList.replace('fa-play', 'fa-pause');
                } catch {
                    icon?.classList.replace('fa-pause', 'fa-play');
                }
                return;
            }

            video.pause();
            icon?.classList.replace('fa-pause', 'fa-play');
        };

        playBtn?.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        muteBtn?.addEventListener('click', () => {
            video.muted = !video.muted;
            updateMuteIcon(muteBtn, video.muted);
        });

        video.addEventListener('timeupdate', () => {
            if (!video.duration || !progressBar || !timeLabel) return;
            progressBar.value = (video.currentTime / video.duration) * 100;
            timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        });

        progressBar?.addEventListener('input', () => {
            if (video.duration) video.currentTime = (progressBar.value / 100) * video.duration;
        });

        fullscreenBtn?.addEventListener('click', () => {
            if (!document.fullscreenElement) video.requestFullscreen?.();
            else document.exitFullscreen?.();
        });
    }

    function setupReveal(selector, { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
        const elements = Array.from(document.querySelectorAll(selector));
        if (!elements.length) return;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            elements.forEach(revealElement);
            return;
        }

        elements.forEach((element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 600ms ease, transform 600ms ease';
            element.style.willChange = 'opacity, transform';
        });

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                revealElement(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold, rootMargin });

        elements.forEach((element) => observer.observe(element));
    }

    function revealElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.willChange = 'auto';
    }

    function setupLazyMedia({ eagerCount = 3 } = {}) {
        document.querySelectorAll('img').forEach((img, index) => {
            if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
            if (index >= eagerCount && !img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        });

        document.querySelectorAll('video').forEach((video) => {
            if (!video.hasAttribute('preload')) video.setAttribute('preload', 'metadata');
            if (!video.hasAttribute('playsinline')) video.setAttribute('playsinline', '');
        });
    }

    function debounce(callback, delay) {
        let timeoutId;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => callback(...args), delay);
        };
    }

    function formatTime(seconds) {
        const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
        const minutes = Math.floor(safeSeconds / 60);
        const rest = Math.floor(safeSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${rest}`;
    }

    function updateMuteIcon(button, isMuted) {
        const icon = button?.querySelector('i');
        if (!icon) return;

        icon.classList.toggle('fa-volume-high', !isMuted);
        icon.classList.toggle('fa-volume-xmark', isMuted);
    }

    window.toggleChat = toggleChat;
    window.showAnswer = showAnswer;

    window.CleanPel = {
        debounce,
        onReady,
        setupChatbot,
        setupHeroVideo,
        setupLazyMedia,
        setupLeadModal,
        setupHeaderState,
        setupReveal,
        setupSideMenu,
        setupSmoothAnchors,
        setupSubmenu
    };

    onReady(() => {
        setupHeaderState();
        setupLeadModal();
    });
}());
