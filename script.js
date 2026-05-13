
    const nav = document.querySelector('.site-nav');
    const toggle = document.querySelector('.nav-toggle');
    const menuLinks = document.querySelectorAll('.site-nav__links a');
    const mobileQuery = window.matchMedia('(max-width: 640px)');

    if (nav && toggle) {
        const setMenuState = (isOpen) => {
            nav.classList.toggle('is-open', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
        };

        toggle.addEventListener('click', () => {
            setMenuState(!nav.classList.contains('is-open'));
        });

        menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (mobileQuery.matches) {
                    setMenuState(false);
                }
            });
        });

        mobileQuery.addEventListener('change', (event) => {
            if (!event.matches) {
                setMenuState(false);
            }
        });
    }
