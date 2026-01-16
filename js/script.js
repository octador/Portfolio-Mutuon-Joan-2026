/**
 * ==========================================
 * SCRIPT PRINCIPAL - Portfolio Joan Mutuon
 * ==========================================
 * Fonctionnalités :
 * - Navigation responsive (menu mobile)
 * - Animation du header au scroll
 * - Validation du formulaire de contact
 * - Animation des barres de progression (compétences)
 * - Mise à jour de l'année courante
 * ==========================================
 */

// ==========================================
// NAVIGATION RESPONSIVE
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Éléments DOM
    const navToggle = document.getElementById('navToggle');
    const navDesktop = document.querySelector('.hidden.md\\:flex') || document.getElementById('navListDesktop');
    const navMobile = document.getElementById('navListMobile');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle du menu mobile
    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function () {
            // Basculer la classe active
            navToggle.classList.toggle('active');

            // Basculer l'affichage du menu mobile
            navMobile.classList.toggle('hidden');
            navMobile.classList.toggle('flex');

            // Mettre à jour l'attribut ARIA
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Fermer le menu lors du clic sur un lien
        const mobileLinks = navMobile.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMobile.classList.add('hidden');
                navMobile.classList.remove('flex');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Fermer le menu lors du clic en dehors
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navMobile.contains(event.target) || navToggle.contains(event.target);

            if (!isClickInsideNav && navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMobile.classList.add('hidden');
                navMobile.classList.remove('flex');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ==========================================
// ANIMATION DU HEADER AU SCROLL
// ==========================================
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');

    if (header) {
        // Ajouter la classe 'scrolled' si on a dépassé 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ==========================================
// VALIDATION DU FORMULAIRE DE CONTACT
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Fonction de validation de l'email
    function isValidEmail(email) {
        // Expression régulière pour valider l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction de validation d'un champ
    function validateField(input) {
        const errorElement = document.getElementById(input.id + 'Error');
        let isValid = true;

        // Reset de l'état d'erreur
        input.classList.remove('error');
        if (errorElement) {
            errorElement.classList.remove('visible');
        }

        // Validation du champ
        if (input.required && !input.value.trim()) {
            isValid = false;
        }

        // Validation spécifique pour l'email
        if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
            isValid = false;
        }

        // Validation spécifique pour le message (minimum 10 caractères)
        if (input.id === 'message' && input.value.trim() && input.value.trim().length < 10) {
            isValid = false;
        }

        // Afficher l'erreur si invalide
        if (!isValid) {
            input.classList.add('error');
            if (errorElement) {
                errorElement.classList.add('visible');
            }
        }

        return isValid;
    }

    // Validation en temps réel lors de la saisie
    const formInputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];
    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(input);
        });

        input.addEventListener('input', function () {
            // Retirer l'erreur dès que l'utilisateur commence à corriger
            input.classList.remove('error');
            const errorElement = document.getElementById(input.id + 'Error');
            if (errorElement) {
                errorElement.classList.remove('visible');
            }
        });
    });

    // Soumission du formulaire
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Cacher les messages précédents
            if (successMessage) successMessage.classList.remove('visible');
            if (errorMessage) errorMessage.classList.remove('visible');

            // Valider tous les champs
            let isFormValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            // Si le formulaire est valide
            if (isFormValid) {
                // Simuler l'envoi du formulaire
                const submitBtn = document.getElementById('submitBtn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Envoi en cours...';
                }

                // Simulation d'un délai d'envoi (à remplacer par une vraie soumission)
                setTimeout(function () {
                    // Réinitialiser le formulaire
                    contactForm.reset();

                    // Afficher le message de succès
                    if (successMessage) {
                        successMessage.classList.add('visible');
                    }

                    // Réactiver le bouton
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Envoyer le message';
                    }

                    // Faire défiler vers le message de succès
                    if (successMessage) {
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }

                }, 1500);
            } else {
                // Afficher le message d'erreur
                if (errorMessage) {
                    errorMessage.classList.add('visible');
                }

                // Faire défiler vers le premier champ en erreur
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    }
});

// ==========================================
// ANIMATION DES BARRES DE PROGRESSION
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour animer les barres de progression
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width + '%';
            }
        });
    }

    // Observer l'intersection avec le viewport
    const skillSection = document.querySelector('.skill');

    if (skillSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillSection);
    } else {
        // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
        animateSkillBars();
    }
});

// ==========================================
// MISE À JOUR DE L'ANNÉE COURANTE
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const currentYearElement = document.getElementById('currentYear');

    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
});

// ==========================================
// ANIMATIONS D'APPARITION AU SCROLL
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les éléments à animer
    const animatedElements = document.querySelectorAll('.card, .section');

    // Configuration de l'observer
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer chaque élément
        animatedElements.forEach((element, index) => {
            // Définir l'état initial
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.transitionDelay = (index * 0.1) + 'ms';

            observer.observe(element);
        });
    }
});

// ==========================================
// SMOOTH SCROLL POUR LES LIENS ANCRE
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');

            // Ignorer si c'est juste "#"
            if (targetId === '#') {
                event.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================
// GESTION DU FOCUS VISIBILITÉ ACCESSIBILITÉ
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Améliorer l'accessibilité en gérant le focus
    const focusableElements = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';

    // Ajouter une classe lors du focus
    document.addEventListener('focusin', function (event) {
        const element = event.target;
        if (element.matches(focusableElements)) {
            element.classList.add('is-focused');
        }
    });

    document.addEventListener('focusout', function (event) {
        const element = event.target;
        if (element.matches(focusableElements)) {
            element.classList.remove('is-focused');
        }
    });
});
