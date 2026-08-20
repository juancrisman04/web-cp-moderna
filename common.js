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

        const chatContent = answer.closest('.chat-content');
        const question = answer.closest('.faq-item')?.querySelector('p')?.textContent?.trim();
        if (chatContent && question) {
            let dialog = chatContent.querySelector('.chat-dialog');
            const intro = chatContent.querySelector('.chat-intro');

            if (!dialog) {
                dialog = document.createElement('div');
                dialog.className = 'chat-dialog';
                dialog.setAttribute('aria-live', 'polite');

                if (intro) intro.after(dialog);
                else chatContent.prepend(dialog);
            }

            if (dialog._answerTimer) window.clearTimeout(dialog._answerTimer);
            dialog.replaceChildren();
            if (intro) intro.style.display = 'none';

            const userBubble = document.createElement('div');
            userBubble.className = 'chat-message chat-message--user';
            userBubble.textContent = question;

            dialog.append(userBubble);
            chatContent.querySelectorAll('.faq-item').forEach((item) => {
                item.classList.toggle('is-active', item === answer.closest('.faq-item'));
            });
            chatContent.scrollTop = 0;

            dialog._answerTimer = window.setTimeout(() => {
                const botBubble = document.createElement('div');
                botBubble.className = 'chat-message chat-message--bot';
                botBubble.textContent = answer.textContent.trim();
                dialog.append(botBubble);
                chatContent.scrollTop = 0;
            }, 650);
        }

        document.querySelectorAll('.answer').forEach((item) => {
            item.style.display = 'none';
        });
    }

    function setupChatbot() {
        const chatbot = document.querySelector(SELECTORS.chatbot);
        const popup = document.querySelector(SELECTORS.popup);
        const mobileContainer = document.querySelector(SELECTORS.mobileChatContainer);
        if (!chatbot || !popup || !mobileContainer) return;

        const headerTitle = chatbot.querySelector('.chat-header h4');
        if (headerTitle) {
            headerTitle.innerHTML = '<span>ASISTENTE CLEAN PEL</span><strong>Preguntas Frecuentes</strong>';
        }

        const chatContent = chatbot.querySelector('.chat-content');
        if (chatContent && !chatContent.querySelector('.chat-intro')) {
            const intro = document.createElement('div');
            intro.className = 'chat-intro chat-message chat-message--bot';
            intro.textContent = 'Hola, soy el asistente de Clean Pel. Elegi una pregunta y te respondo al instante.';
            chatContent.prepend(intro);
        }

        chatbot.querySelectorAll('.answer').forEach((answer) => {
            answer.style.display = 'none';
        });
        chatbot.querySelectorAll('.faq-item').forEach((item) => {
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
            item.addEventListener('keydown', (event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                item.click();
            });
        });

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
                                <li><i class="fa-solid fa-check"></i> Propuesta enviada a ventas@cleanpel.com.ar.</li>
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
                            <label>Email
                                <input type="email" name="email" placeholder="tuempresa@email.com" required>
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
                            <input type="text" name="website" autocomplete="off" tabindex="-1" aria-hidden="true" hidden>
                            <button class="btn-submit" type="submit">
                                <i class="fa-solid fa-paper-plane"></i> Enviar consulta
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

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const data = new FormData(form);
            const submitButton = form.querySelector('.btn-submit');
            const originalText = submitButton.innerHTML;

            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

            try {
                await sendLead({
                    nombre: data.get('name'),
                    email: data.get('email'),
                    telefono: data.get('phone'),
                    necesidad: data.get('need'),
                    mensaje: data.get('message') || 'Sin detalle adicional',
                    origen: 'modal-propuesta',
                    website: data.get('website')
                });

                submitButton.innerHTML = '<i class="fa-solid fa-check"></i> Enviado';
                window.setTimeout(() => {
                    close();
                    form.reset();
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                }, 900);
            } catch (error) {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                window.alert(error.message || 'No pudimos enviar la consulta. Intentá nuevamente.');
            }
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

        let loadPromise = null;

        const loadVideo = () => {
            if (video.dataset.loaded === 'true') return Promise.resolve();
            if (loadPromise) return loadPromise;

            loadPromise = new Promise((resolve) => {
                const source = video.querySelector('source[data-src]');
                const src = video.dataset.src || source?.dataset.src;

                if (!src) {
                    resolve();
                    return;
                }

                const done = () => resolve();
                video.addEventListener('loadedmetadata', done, { once: true });
                video.addEventListener('error', done, { once: true });

                if (source) source.src = src;
                else video.src = src;

                video.dataset.loaded = 'true';
                video.load();
            });

            return loadPromise;
        };

        const togglePlay = async () => {
            const icon = playBtn?.querySelector('i');

            if (video.paused) {
                try {
                    loadVideo();
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
        video.addEventListener('pointerenter', () => {
            if (window.matchMedia('(pointer: fine)').matches) loadVideo();
        }, { once: true, passive: true });

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
            loadVideo();
            if (video.duration) video.currentTime = (progressBar.value / 100) * video.duration;
        });

        fullscreenBtn?.addEventListener('click', () => {
            loadVideo();
            if (!document.fullscreenElement) video.requestFullscreen?.();
            else document.exitFullscreen?.();
        });

        if (video.dataset.autoplay === 'true' && !prefersReducedMotion) {
            loadVideo().then(async () => {
                try {
                    await video.play();
                    playBtn?.querySelector('i')?.classList.replace('fa-play', 'fa-pause');
                } catch {
                    playBtn?.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
                }
            });
        }
    }

    async function sendLead(payload) {
        const response = await fetch('enviar-consulta.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok || result.ok === false) {
            throw new Error(result.message || 'No pudimos enviar la consulta.');
        }

        return result;
    }

    function setupReveal(selector, options = {}) {
        setupRevealElements(Array.from(document.querySelectorAll(selector)), options);
    }

    function setupRevealElements(elements, { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
        const revealableElements = [...new Set(elements)].filter((element) => {
            if (!element || element.dataset.cleanPelReveal === 'ready') return false;
            element.dataset.cleanPelReveal = 'ready';
            return true;
        });

        if (!revealableElements.length) return;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealableElements.forEach(revealElement);
            return;
        }

        revealableElements.forEach((element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            element.style.transition = 'opacity 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 420ms cubic-bezier(0.22, 1, 0.36, 1)';
        });

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                revealElement(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold, rootMargin });

        revealableElements.forEach((element) => observer.observe(element));
    }

    function setupDataAos() {
        setupRevealElements(Array.from(document.querySelectorAll('[data-aos]')), {
            threshold: 0.12,
            rootMargin: '0px 0px -6% 0px'
        });
    }

    function setupSiteReveal() {
        setupReveal([
            'header.header',
            'section:not(.hero):not(.products-content)',
            'footer.footer',
            '.hero-proof',
            '.hero-actions',
            '.hero.equipo .hero-image',
            '.section-heading',
            '.proof-card',
            '.process-card',
            '.sector-card',
            '.solution-card',
            '.featured-product-card',
            '.filter-toolbar',
            'body:not(.products-page) .product-card',
            '.upgrade-card',
            '.service-card',
            '.logistics-item',
            '.advantage-card',
            '.catalog-panel',
            '.contact-card',
            '.form-content',
            '.form-image',
            '.map-container',
            '.location-panel',
            '.footer-content',
            '.footer-bottom'
        ].join(', '), {
            threshold: 0.08,
            rootMargin: '0px 0px -5% 0px'
        });
    }

    function revealElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    function setupLazyMedia({ eagerCount = 3 } = {}) {
        document.querySelectorAll('img').forEach((img, index) => {
            if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
            if (index < eagerCount) {
                if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'high');
                return;
            }

            if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
            if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low');
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
        setupDataAos,
        setupHeaderState,
        setupReveal,
        setupSideMenu,
        setupSmoothAnchors,
        setupSubmenu
    };

    onReady(() => {
        setupHeaderState();
        setupLeadModal();
        setupDataAos();
        setupSiteReveal();
    });
}());
