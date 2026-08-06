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
        setupReveal('.contact-card, .form-content, .form-image, .map-container, .routing-card');
        setupContactForm();
        setupConfirmationModal();
    });

    function setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const errors = validateForm(formData);
            if (errors.length) {
                showErrors(form, errors);
                return;
            }

            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            window.setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                clearErrors(form);
                showConfirmationModal();
            }, 800);
        });

        form.querySelectorAll('input, textarea, select').forEach((field) => {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => clearFieldError(field));
        });
    }

    function validateForm(formData) {
        const errors = [];
        const firstName = String(formData.get('firstName') || '').trim();
        const lastName = String(formData.get('lastName') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!firstName) errors.push('El nombre es requerido');
        if (!lastName) errors.push('El apellido es requerido');
        if (!email) errors.push('El email es requerido');
        else if (!isValidEmail(email)) errors.push('El email no tiene un formato válido');
        if (!message) errors.push('El mensaje es requerido');

        return errors;
    }

    function validateField(field) {
        const value = field.value.trim();
        let errorMessage = '';

        clearFieldError(field);

        if ((field.name === 'firstName' || field.name === 'lastName') && !value) {
            errorMessage = 'Este campo es requerido';
        }

        if (field.name === 'email') {
            if (!value) errorMessage = 'El email es requerido';
            else if (!isValidEmail(value)) errorMessage = 'Formato de email inválido';
        }

        if (field.name === 'message') {
            if (!value) errorMessage = 'El mensaje es requerido';
            else if (value.length < 10) errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        }

        if (errorMessage) showFieldError(field, errorMessage);
        return !errorMessage;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showErrors(form, errors) {
        clearErrors(form);

        errors.forEach((error) => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = error;
            errorDiv.style.cssText = [
                'background:#fee2e2',
                'color:#dc2626',
                'padding:.75rem 1rem',
                'border-radius:8px',
                'margin-bottom:1rem',
                'border:1px solid #fecaca',
                'font-size:.9rem'
            ].join(';');
            form.insertBefore(errorDiv, form.firstChild);
        });

        form.querySelector('.error-message')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    function clearErrors(form) {
        form.querySelectorAll('.error-message').forEach((error) => error.remove());
    }

    function showFieldError(field, message) {
        field.style.borderColor = '#dc2626';

        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = 'color:#dc2626;font-size:.8rem;margin-top:.25rem;';

        field.parentElement.appendChild(errorDiv);
    }

    function clearFieldError(field) {
        field.style.borderColor = '#e5e7eb';
        field.parentElement.querySelector('.field-error')?.remove();
    }

    function setupConfirmationModal() {
        const modal = document.getElementById('confirmationModal');
        if (!modal) return;

        window.addEventListener('click', (event) => {
            if (event.target === modal) closeConfirmationModal();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeConfirmationModal();
        });
    }

    function showConfirmationModal() {
        const modal = document.getElementById('confirmationModal');
        if (!modal) return;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeConfirmationModal() {
        const modal = document.getElementById('confirmationModal');
        if (!modal) return;

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.closeConfirmationModal = closeConfirmationModal;
}());
